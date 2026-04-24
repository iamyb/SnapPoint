# Frequently Asked Questions (FAQ)

Find answers to common questions about using SnapPoint.

## Privacy & Security

**Is my API key safe?**
Yes. Your API keys are stored securely using the browser's extension storage (`chrome.storage.local`). They are only sent directly to the AI provider you configure — never to SnapPoint's servers (we don't even have any!).

**Does SnapPoint collect my browsing data?**
No. SnapPoint only processes the text or images you explicitly select to summarize. We do not track your history or collect analytics.

## General

**Why did I build this extension?**
As a non-native English speaker, I can understand most English content, but reading long articles, deep technical discussions, or complex research papers is still time-consuming. I built SnapPoint to help me (and others) quickly grasp the core message and the key points of a source. If a summary looks valuable, I then dive deeper into the original text. It's about optimizing reading efficiency without losing depth.

**How do I change the summary language?**
Go to **Settings → Prompt Settings** and update the "Global Prompt Template". Ensure you include the <code v-pre>{{targetLang}}</code> variable or explicitly specify your language in the custom prompt.

**Is SnapPoint free?**
The extension itself is free and open-source. However, you may incur costs if you use paid API providers (like OpenAI or Anthropic). Local models are completely free to use.

**Why doesn't the Snap icon appear when I hover over certain text?**
If the Snap icon doesn't appear on hover, it's likely because the text content is shorter than the minimum threshold. In such cases, you can simply **select the text with your mouse**, and the Snap button will appear immediately for the selected content.

## Feedback & Support

**I found a bug or have a suggestion. Where can I report it?**
We love feedback! You can report issues, suggest new features, or ask questions on our [GitHub Issues](https://github.com/iamyb/SnapPoint/issues) page.

