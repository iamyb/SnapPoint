# Getting Started

Follow these **three steps** to get SnapPoint up and running in under a few minutes.

## Step 1: Installation

SnapPoint is available for Chrome and Edge. Choose your store:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
  <a href="https://chromewebstore.google.com/detail/gkbgknfacaepgdcgeldeehlbgocnjefm" target="_blank" style="text-decoration: none; color: inherit;">
    <div style="border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 1.5rem; transition: border-color 0.25s, background-color 0.25s; background: var(--vp-c-bg-soft);">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
        <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" style="width: 28px; height: 28px;" alt="Chrome">
        <span style="font-weight: 600; font-size: 1.1rem;">Google Chrome</span>
      </div>
      <p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">Visit the Chrome Web Store and click "Add to Chrome".</p>
      <div style="margin-top: 1rem; color: var(--vp-c-brand-1); font-weight: 500; font-size: 0.9rem;">Add to Chrome →</div>
    </div>
  </a>

  <a href="https://microsoftedge.microsoft.com/addons/detail/dikigoelffioeljppklbehpkpdaabjcd" target="_blank" style="text-decoration: none; color: inherit;">
    <div style="border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 1.5rem; transition: border-color 0.25s, background-color 0.25s; background: var(--vp-c-bg-soft);">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg" style="width: 28px; height: 28px;" alt="Edge">
        <span style="font-weight: 600; font-size: 1.1rem;">Microsoft Edge</span>
      </div>
      <p style="margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2);">Visit Edge Add-ons and click "Get" to install.</p>
      <div style="margin-top: 1rem; color: var(--vp-c-brand-1); font-weight: 500; font-size: 0.9rem;">Get for Edge →</div>
    </div>
  </a>
</div>


## Step 2: Model Setup (REQUIRED)

SnapPoint is an AI-powered "shell"; you need to connect an AI "brain" before it can generate summaries.

<img src="/model_libary.png" alt="SnapPoint Model Library" style="border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); box-shadow: var(--vp-shadow-1);">

### Local Models 
1. **Runner Setup**: Download and install a local LLM runner such as [llama.cpp](https://github.com/ggerganov/llama.cpp), or [LM Studio](https://lmstudio.ai) or [Ollama](https://ollama.com).
2. **Download Model**: Choose a model (e.g., Qwen, Gemma) and download a version compatible with your hardware.
3. **Start Local Server**: Ensure the runner's local API server is active.
4. **Connect**: Open SnapPoint *Settings → Model Settings*:
   - **Base URL**: Enter your runner's API endpoint (e.g., `http://localhost:1234` for LM Studio or `http://localhost:11434` for Ollama).
   - **Model ID**: Enter the exact id of the model you configured in your model server.

::: tip
**Quick Setup**: You can also use the **Presets** dropdown in *Model Settings* to automatically fill in the correct Base URL and configuration for providers like **LM Studio**, **Ollama**, **vLLM**, or cloud providers like **DeepSeek** and **ZhipuAI**.
:::

### API Providers
If you prefer a hosted model, enter your API key in *Settings → Model Settings*.

::: tip
**Quick Setup**: Similar to local models, you can use the **Presets** dropdown to automatically configure endpoints and recommended model names for common providers like **OpenAI (GPT-4o, o3-mini)**, **Groq**, or **Kimi**.
:::

::: warning Action Required
The summarization feature **will not work** until a model is successfully configured and tested.
:::


## Step 3: Your First Summary (Quick Start)

Now that your model is connected, you're ready to summarize!

<img src="/snappoint_arxiv_summary.gif" alt="SnapPoint in Action" style="border-radius: 8px; margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); box-shadow: var(--vp-shadow-1);">

1. **Highlight text**: Move your mouse over any content on a webpage.
2. **✨ Snap it**: Click the Snap pill that appears next to your hovered content.
3. **Read**: The Side Panel will open and stream your summary in real-time.

::: info
You can also click the **▲ expand arrow** on the Snap pill to widen the selection to the parent DOM block before summarizing.
:::


## Further Reading

- [Advanced Features](./features)
- [Frequently Asked Questions (FAQ)](./faq)




