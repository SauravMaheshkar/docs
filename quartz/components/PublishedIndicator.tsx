import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

function PublishedIndicator({ fileData }: QuartzComponentProps) {
  const isPublished = !fileData.frontmatter?.draft;

  if (!isPublished) {
    return null;
  }

  return (
    <span class="published-indicator" title="This note is published">
      🌱
    </span>
  );
}

PublishedIndicator.css = `
.published-indicator {
  margin-left: 0.5rem;
  font-size: 0.8em;
  opacity: 0.7;
  cursor: help;
}
`;

export default (() => PublishedIndicator) satisfies QuartzComponentConstructor;
