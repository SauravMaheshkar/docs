import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
// @ts-ignore
import aiSummaryScript from "./scripts/aisummary.inline"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { pathToRoot } from "../util/path"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="ai-summary-section">
          <p class="ai-summary-title">Request an AI summary</p>
          <div class="ai-summary-icons">
            <a
              href="#"
              class="ai-summary-link"
              data-service="chatgpt"
              aria-label="Summarize with ChatGPT"
              title="Summarize with ChatGPT"
            >
              <img src={`${baseDir}/static/icons/chatgpt.svg`} alt="ChatGPT" />
            </a>
            <a
              href="#"
              class="ai-summary-link"
              data-service="claude"
              aria-label="Summarize with Claude"
              title="Summarize with Claude"
            >
              <img src={`${baseDir}/static/icons/claude.svg`} alt="Claude" />
            </a>
            <a
              href="#"
              class="ai-summary-link"
              data-service="gemini"
              aria-label="Summarize with Gemini"
              title="Summarize with Gemini"
            >
              <img src={`${baseDir}/static/icons/gemini.svg`} alt="Gemini" />
            </a>
            <a
              href="#"
              class="ai-summary-link"
              data-service="perplexity"
              aria-label="Summarize with Perplexity"
              title="Summarize with Perplexity"
            >
              <img src={`${baseDir}/static/icons/perplexity.svg`} alt="Perplexity" />
            </a>
          </div>
        </div>
        <hr class="footer-divider" />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  Footer.afterDOMLoaded = aiSummaryScript
  return Footer
}) satisfies QuartzComponentConstructor
