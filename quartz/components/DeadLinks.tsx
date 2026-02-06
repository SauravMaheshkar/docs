import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { i18n } from "../i18n";

function DeadLinks({ allFiles, fileData }: QuartzComponentProps) {
  const outgoingLinks = fileData.links || [];
  const existingSlugs = new Set(allFiles.map((f) => f.slug));

  // Find dead links (links that don't exist)
  const deadLinks = outgoingLinks.filter((link) => !existingSlugs.has(link));

  if (deadLinks.length === 0) {
    return null;
  }

  return (
    <div class="dead-links-warning">
      <h3>⚠️ Broken Links</h3>
      <p>The following links on this page don't exist yet:</p>
      <ul>
        {deadLinks.map((link) => (
          <li key={link}>
            <a href={`/${link}`} class="dead-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

DeadLinks.css = `
.dead-links-warning {
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 193, 7, 0.1);
  border-left: 4px solid #ffc107;
  border-radius: 4px;
}

.dead-links-warning h3 {
  margin: 0 0 0.5rem 0;
  color: #856404;
}

.dead-links-warning p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9em;
}

.dead-links-warning ul {
  margin: 0;
  padding-left: 1.5rem;
}

.dead-link {
  color: #dc3545;
  text-decoration: line-through;
  opacity: 0.7;
}

.dead-link:hover {
  opacity: 1;
}
`;

export default (() => DeadLinks) satisfies QuartzComponentConstructor;
