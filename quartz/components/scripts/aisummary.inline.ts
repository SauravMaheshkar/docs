document.addEventListener("nav", () => {
  const aiSummaryLinks = document.querySelectorAll(".ai-summary-link")

  aiSummaryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const target = e.currentTarget as HTMLAnchorElement
      const service = target.dataset.service
      const pageTitle = document.querySelector("h1.article-title")?.textContent || document.title
      const pageContent = document.querySelector("article.popover-hint")?.textContent || ""

      // Truncate content to avoid URL length issues (keep first ~2000 chars for context)
      const truncatedContent = pageContent.slice(0, 2000).trim()
      const prompt = `Please provide a comprehensive summary of the following content titled "${pageTitle}":\n\n${truncatedContent}`
      const encodedPrompt = encodeURIComponent(prompt)

      let url: string
      switch (service) {
        case "chatgpt":
          url = `https://chat.openai.com/?q=${encodedPrompt}`
          break
        case "claude":
          url = `https://claude.ai/new?q=${encodedPrompt}`
          break
        case "gemini":
          url = `https://gemini.google.com/app?q=${encodedPrompt}`
          break
        case "perplexity":
          url = `https://www.perplexity.ai/?q=${encodedPrompt}`
          break
        default:
          return
      }

      window.open(url, "_blank")
    })
  })
})
