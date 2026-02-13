#!/usr/bin/env bun

import { handleBuild } from "../quartz/cli/handlers.js";

const args = process.argv.slice(2).filter((arg) => !arg.startsWith("scripts/"));

let mode = "build";
let directory = "vault";
let basePath = "/docs";
let port = 8080;

for (const arg of args) {
  if (arg.startsWith("--mode=")) mode = arg.split("=")[1];
  if (arg.startsWith("--directory=")) directory = arg.split("=")[1];
  if (arg.startsWith("--basePath=")) basePath = arg.split("=")[1];
  if (arg.startsWith("--port=")) port = parseInt(arg.split("=")[1]);
}

const output = "public";

async function build() {
  await handleBuild({
    directory,
    output,
    serve: false,
    watch: false,
    baseDir: basePath,
  });
}

async function startServer() {
  const server = Bun.serve({
    port,
    async fetch(req) {
      const url = new URL(req.url);
      let path = url.pathname;

      if (basePath && path.startsWith(basePath)) {
        path = path.slice(basePath.length) || "/";
      }

      if (path === "/" || path === "") {
        path = "/index.html";
      }

      let filePath = `public${path}`;
      let file = Bun.file(filePath);

      if (!(await file.exists()) && !path.includes(".")) {
        filePath = `public${path}.html`;
        file = Bun.file(filePath);
      }

      if (!(await file.exists()) && !path.includes(".")) {
        filePath = `public${path}/index.html`;
        file = Bun.file(filePath);
      }

      if (await file.exists()) {
        return new Response(file);
      }

      return new Response("Not found", { status: 404 });
    },
  });

  console.log(`🚀 Server running at http://localhost:${server.port}${basePath}`);
}

async function main() {
  if (mode === "build") {
    await build();
  } else if (mode === "serve") {
    await build();
    await startServer();
  } else {
    console.error(`Unknown mode: ${mode}`);
    process.exit(1);
  }
}

main();
