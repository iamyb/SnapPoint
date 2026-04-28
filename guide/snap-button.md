# Snap Button

The **Snap Button** is the heart of the SnapPoint experience. It is a smart, floating interactive element that appears as you navigate the web, providing instant access to AI-powered insights.

<div style="display: flex; justify-content: center; padding: 20px 0; background: var(--vp-c-bg-soft); border-radius: 12px; margin: 2rem 0;">
  <SnapButtonPreview />
</div>

## How it Works

The Snap Button follows your cursor and subtly appears when you hover over meaningful content (like paragraphs, articles, or code blocks). It acts as a bridge between the webpage content and your AI agents.

### Core Components

1.  **Snap (Center)**: 
    Clicking the main part of the button (the "Snap" text or icon) immediately triggers the summarization of the currently highlighted block.

2.  **Expand (<span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border: 1px solid currentColor; border-radius: 4px; font-size: 12px; vertical-align: middle; margin: 0 2px;">▲</span> Top Arrow)**:
    Clicking this expands the selection to the parent HTML element. This is useful when you want to summarize a whole section instead of just one paragraph.

3.  **Agent Picker (<span style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; padding-left: 4px; font-size: 12px; vertical-align: middle; margin-left: 4px;">▼</span> Bottom Arrow)**:
    Opens a searchable list of available AI agents. You can switch from the default "Auto-summarizer" to a specific agent like "Forum Agent," "Paper Agent," or any custom agent you've created.

## Power User Shortcuts

SnapPoint is designed for efficiency. Use these keyboard shortcuts to operate the Snap Button without reaching for your mouse:

| Key | Action |
| :--- | :--- |
| <kbd>[</kbd> | **Confirm/Highlight**: On first press, highlights the currently identified block under the mouse. |
| <kbd>[</kbd> | **Expand**: On second press, expands the selection to the parent container. |
| <kbd>/</kbd> | **Agent Picker**: Opens a searchable menu to force-select a specific sub-agent, matching the ▼ picker on the Snap Button. |
| <kbd>Enter</kbd> | **Snap**: Triggers the summarization (equivalent to clicking the "Snap" button). |

::: info
Shortcuts are active whenever the Snap Button is visible on the page.
:::
