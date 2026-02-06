import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "docs/",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "sauravmaheshkar.github.io/docs",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#1e1e2e",
          lightgray: "#313244",
          gray: "#6c7086",
          darkgray: "#cdd6f4",
          dark: "#f5e0dc",
          secondary: "#b4befe",
          tertiary: "#cba6f7",
          highlight: "rgba(180, 190, 254, 0.15)",
          textHighlight: "#f9e2af88",
        },
        darkMode: {
          light: "#1e1e2e",
          lightgray: "#313244",
          gray: "#6c7086",
          darkgray: "#cdd6f4",
          dark: "#f5e0dc",
          secondary: "#b4befe",
          tertiary: "#cba6f7",
          highlight: "rgba(180, 190, 254, 0.15)",
          textHighlight: "#f9e2af88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
        lazyLoad: true,
        externalLinkIcon: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
};

export default config;
