#!/usr/bin/env bun

/**
 * Dead Link Checker
 *
 * This script checks all markdown files for broken internal links
 * and reports them before building.
 */

import { globby } from "globby";
import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

const VAULT_DIR = "./vault";

// Regex to find wikilinks [[link]] and markdown links [text](link)
const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

async function getAllSlugs() {
  const files = await globby(`${VAULT_DIR}/**/*.md`);
  const slugs = new Set<string>();

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    const { data } = matter(content);

    // Generate slug from file path
    const relativePath = path.relative(VAULT_DIR, file);
    const slug = relativePath
      .replace(/\.md$/, "")
      .replace(/ /g, "-")
      .replace(/[?]/g, "")
      .toLowerCase();

    slugs.add(slug);

    // Also check for aliases in frontmatter
    if (data.aliases) {
      for (const alias of data.aliases) {
        slugs.add(alias.toLowerCase().replace(/ /g, "-"));
      }
    }
  }

  return slugs;
}

async function checkDeadLinks() {
  console.log("🔍 Checking for dead links...\n");

  const slugs = await getAllSlugs();
  const files = await globby(`${VAULT_DIR}/**/*.md`);

  let totalDeadLinks = 0;
  const deadLinksByFile: Map<string, string[]> = new Map();

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    const { data } = matter(content);

    // Skip drafts
    if (data.draft) continue;

    const relativePath = path.relative(VAULT_DIR, file);
    const deadLinks: string[] = [];

    // Check wikilinks
    let match;
    while ((match = wikiLinkRegex.exec(content)) !== null) {
      const link = match[1].split("#")[0]; // Remove anchor
      const normalizedLink = link.toLowerCase().replace(/ /g, "-");

      if (!slugs.has(normalizedLink)) {
        deadLinks.push(`[[${link}]]`);
      }
    }

    // Check markdown links (internal only)
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const link = match[2];

      // Skip external links
      if (link.startsWith("http") || link.startsWith("#")) continue;

      const normalizedLink = link
        .replace(/^\.\//, "")
        .replace(/\.md$/, "")
        .toLowerCase()
        .replace(/ /g, "-");

      if (!slugs.has(normalizedLink)) {
        deadLinks.push(`[${match[1]}](${link})`);
      }
    }

    if (deadLinks.length > 0) {
      deadLinksByFile.set(relativePath, deadLinks);
      totalDeadLinks += deadLinks.length;
    }
  }

  if (totalDeadLinks === 0) {
    console.log("✅ No dead links found!");
    return 0;
  }

  console.log(
    `⚠️  Found ${totalDeadLinks} dead link(s) in ${deadLinksByFile.size} file(s):\n`,
  );

  for (const [file, links] of deadLinksByFile) {
    console.log(`📄 ${file}:`);
    for (const link of links) {
      console.log(`   - ${link}`);
    }
    console.log("");
  }

  console.log(
    "💡 These links point to notes that don't exist yet (drafts or missing notes).",
  );
  console.log("   They will be shown as broken on the published site.");

  return totalDeadLinks;
}

const exitCode = await checkDeadLinks();
process.exit(exitCode > 0 ? 1 : 0);
