#!/usr/bin/env bun

import { serve } from "bun";
import { spawn } from "child_process";

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = "./public";
const BASE_PATH = process.env.BASE_PATH || "";

const args = process.argv.slice(2);
let directory = "vault";
let basePath = BASE_PATH || "/docs";

console.log("Args received:", args);

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--directory" && args[i + 1]) {
    directory = args[i + 1];
  }
  if (args[i] === "--basePath" && args[i + 1]) {
    basePath = args[i + 1];
  }
}

console.log("Using directory:", directory, "basePath:", basePath);

async function buildSite() {
  console.log(`🔨 Building site from '${directory}'...`);

  const buildProcess = spawn(
    "bun",
    ["-e", `import { handleBuild } from './quartz/cli/handlers.js'; await handleBuild({ directory: '${directory}', output: 'public', serve: false, watch: false })`],
    {
      stdio: "inherit",
    },
  );

  return new Promise<void>((resolve, reject) => {
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

  console.log(`🚀 Starting server on http://localhost:${PORT}${basePath}`);
  console.log(`📁 Serving files from: ${PUBLIC_DIR}`);
  console.log(`Press Ctrl+C to stop\n`);

  serve({
    port: PORT,
    async fetch(req) {
      const url = new URL(req.url);
      let path = url.pathname;

      // Strip base path prefix if present
      if (basePath && path.startsWith(basePath)) {
        path = path.slice(basePath.length) || "/";
      }

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
