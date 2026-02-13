import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";
import { FullSlug, resolveRelative } from "../../util/path";

const NotFound: QuartzComponent = ({ cfg, allFiles }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  const baseDir = url.pathname;

  // Get some recent pages to suggest
  const recentPages = allFiles
    .filter((f) => f.slug !== "404" && !f.slug?.startsWith("tags/"))
    .slice(0, 5);

  return (
    <article class="popover-hint not-found-page">
      <h1>🌱 404 - Page Not Found</h1>
      <p class="not-found-intro">
        This note seems to have wandered off into the digital garden. It might
        not be published yet, or the link might be broken.
      </p>

      <div class="not-found-suggestions">
        <h2>What you can do:</h2>
        <ul>
          <li>
            Check the <a href={baseDir}>home page</a> and navigate from there
          </li>
          <li>Use the search bar above to find what you're looking for</li>
          <li>
            Browse the <a href={`${baseDir}tags`}>tags</a> or{" "}
            <a href={`${baseDir}areas`}>areas</a>
          </li>
          <li>
            If this link is from another note, it might be a{" "}
            <strong>dead link</strong> pointing to a draft
          </li>
        </ul>
      </div>

      {recentPages.length > 0 && (
        <div class="not-found-recent">
          <h2>Recently published notes:</h2>
          <ul>
            {recentPages.map((page) => (
              <li key={page.slug}>
                <a href={resolveRelative("404" as FullSlug, page.slug!)}>
                  {page.frontmatter?.title || page.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div class="not-found-footer">
        <p>
          <em>
            "The best time to plant a tree was 20 years ago. The second best
            time is now." — This note might be planted soon!
          </em>
        </p>
      </div>
    </article>
  );
};

NotFound.css = `
.not-found-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.not-found-page h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.not-found-intro {
  text-align: center;
  font-size: 1.1em;
  color: var(--gray);
  margin-bottom: 2rem;
}

.not-found-suggestions,
.not-found-recent {
  background: var(--lightgray);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.not-found-suggestions h2,
.not-found-recent h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.not-found-suggestions ul,
.not-found-recent ul {
  margin: 0;
  padding-left: 1.5rem;
}

.not-found-suggestions li,
.not-found-recent li {
  margin-bottom: 0.5rem;
}

.not-found-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--lightgray);
  color: var(--gray);
}
`;

export default (() => NotFound) satisfies QuartzComponentConstructor;
