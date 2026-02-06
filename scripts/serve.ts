#!/usr/bin/env bun

import { serve } from "bun";
import { spawn } from "child_process";

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = "./public";

async function buildSite() {
  console.log("🔨 Building site...");

  const buildProcess = spawn(
    "bun",
    ["run", "quartz", "build", "--directory=vault"],
    {
      stdio: "inherit",
    },
  );

  return new Promise((resolve, reject) => {
    buildProcess.on("close", (code) => {
      if (code === 0) {
        console.log("✅ Build complete!\n");
        resolve();
      } else {
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

async function startServer() {
  await buildSite();

  console.log(`🚀 Starting server on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${PUBLIC_DIR}`);
  console.log(`Press Ctrl+C to stop\n`);

  serve({
    port: PORT,
    async fetch(req) {
      const url = new URL(req.url);
      let path = url.pathname;

      // Default to index.html for root paths
      if (path === "/" || path === "") {
        path = "/index.html";
      }

      // Try the exact path first
      let filePath = `${PUBLIC_DIR}${path}`;
      let file = Bun.file(filePath);

      // If not found and no extension, try adding .html
      if (!(await file.exists()) && !path.includes(".")) {
        filePath = `${PUBLIC_DIR}${path}.html`;
        file = Bun.file(filePath);
      }

      // If still not found, try index.html in the directory
      if (!(await file.exists()) && !path.includes(".")) {
        filePath = `${PUBLIC_DIR}${path}/index.html`;
        file = Bun.file(filePath);
      }

      if (await file.exists()) {
        return new Response(file);
      }

      return new Response("Not found", { status: 404 });
    },
  });
}

startServer().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
