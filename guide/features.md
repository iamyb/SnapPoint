# Advanced Features

Once you've mastered the basics, explore these advanced features to get the most out of SnapPoint.

## Global Prompt Template

By default, SnapPoint uses the **Global Prompt Template** for all summarization tasks. You can customize this template to set your preferred tone and format.

User-defined variables like <code v-pre>{{targetLang}}</code>, <code v-pre>{{siteName}}</code>, <code v-pre>{{hostname}}</code>, and <code v-pre>{{author}}</code> are supported to keep your summaries contextually relevant and consistent.

If you enable **Sub-Agents** or **Context-based Rules** (see below), they will take precedence over this global template.

## Image Analysis (Vision)

SnapPoint can analyze images and explain their content. This is useful for summarizing infographics, diagrams, or visual data.

::: info Default Status
This feature is **disabled by default** to save tokens and processing power. You must manually enable it in settings.
:::

- **Embedded Images**: For images within articles, SnapPoint converts the visual content into a text description and integrates it with the surrounding text for cohesive analysis.
- **Single Image Snippets**: If you snap only an image (without surrounding text), the AI will focus exclusively on analyzing and describing that specific visual content.
- **Enable**: Toggle **Enable Image Analysis** in **Settings → General Settings**.
- **Requirement**: Use a model that supports vision (e.g., Qwen3.5 2B/4B/9B models).

## Agents & Rules

SnapPoint uses a two-tier system to determine how to summarize content: **Context-based Rules** (precise) and **Sub-Agents** (AI-driven routing).

::: warning Note on Activation
By default, both **Sub-Agents** and **Context-based Rules** are disabled to keep the initial experience simple. You must manually enable them using the master switches in **Settings → Prompt Settings**.
:::

### Sub-Agents (Smart Router)

<img src="/subagent.png" alt="SnapPoint in Action" style="border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); box-shadow: var(--vp-shadow-1);">


When no specific rule matches, the AI automatically routes to the best agent based on the content type. This is managed in *Settings → Prompt Settings*.

- **How it works**: Each agent has a **Description**. This description is sent to a "Router LLM" which decides which agent fits the current page best.
- **Built-in Agents**: SnapPoint comes with specialized agents:

| Agent Name | Primary Focus | Best Use Cases |
| :--- | :--- | :--- |
| **Paper Agent** | Methodology, core innovations, and limitations. | arXiv, scholarly journals, preprints. |
| **Forum Agent** | Thread structure, consensus, and key arguments. | Reddit, Hacker News, GitHub discussions. |
| **News Agent** | Facts, context, and future implications. | News articles, press releases, blog posts. |
| **Repo Agent** | Goals, stack, and architectural overview. | GitHub repositories, landing pages. |
| **Technical Documentation** | Installation, usage, and API specifications. | API docs, lib READMEs, technical guides. |
| **How-to & Tutorial** | Prerequisites, execution steps, and takeaways. | Educational posts, course modules. |
| **Product Review** | Pros/cons, value prop, and performance verdict. | Tech blogs, e-commerce product reviews. |
| **Legal & Policy** | Terms, user obligations, and privacy details. | Terms of Service, Privacy Policies. |

- **Custom Agents**: You can add your own sub-agents by providing a name, a description for the router, and a custom prompt template.



### Context-based Prompt Rules

Rules allow you to define exact behavior for specific websites or authors. They are evaluated from **top-to-bottom**, and the first match overrides everything else.

- **Hostname Pattern**: Match specific sites (e.g., `github.com` or `wikipedia.org`).
- **Author Pattern**: Match specific content authors if detectable on the page.
- **AND Logic**: You can combine both hostname and author for highly specific targeting.
- **Templates**: Define a unique prompt for these matches (e.g., "Always summarize GitHub issues as technical bug reports").


## Knowledge History

Every summary is automatically saved to your local history for later review and search.

1. **Browse history**: Click the **History** tab in the side panel to see past summaries.
2. **Search**: Use the search bar to find past summaries by keyword, URL, or content type.
3. **Storage**: Export your history as a JSON file or clear entries in *Settings → Storage*.

::: tip
History is stored entirely in your browser's local extension storage. It is never synced to a server.
:::

## Power User Shortcuts

SnapPoint is designed for efficiency. Use these keyboard shortcuts to operate the Snap pill without reaching for your mouse:

| Key | Action |
| :--- | :--- |
| <kbd>[</kbd> | **Confirm/Highlight**: On first press, highlights the currently identified block under the mouse. |
| <kbd>[</kbd> | **Expand**: On second press, expands the selection to the parent container. |
| <kbd>Enter</kbd> | **Snap**: Triggers the summarization (equivalent to clicking the "Snap" button). |

::: info
Shortcuts are active whenever the Snap pill is visible on the page.
:::
