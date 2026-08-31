# Contributing

Thank you for contributing a Seedance prompt. A good entry should be reproducible, specific about motion and camera behavior, and honest about its source and output.

## Add an entry

1. Copy [`prompts/_template.md`](prompts/_template.md) into the most relevant category directory.
2. Choose a globally unique lowercase `slug`.
3. Include the complete prompt and the artifact URL or an explicit note that no artifact is available yet.
4. Add the original creator/source URL and the applicable license.
5. Run the local checks:

   ```bash
   npm run validate
   npm run build:readme
   ```

6. Open a pull request with a short note about what the prompt demonstrates.

## Review requirements

- Do not include API keys, cookies, private URLs, or personal data.
- Do not upload third-party media unless you have permission to redistribute it.
- Keep author attribution and source links intact.
- Avoid claims that a prompt always produces a particular result.
- Use `status: draft` for work in progress; only reviewed entries should use `status: published`.

## Pull request checklist

- [ ] The prompt file passes `npm run validate`.
- [ ] The slug is unique and stable.
- [ ] The model and category are correct.
- [ ] Source attribution and licensing are present.
- [ ] Artifact URLs are authorized and do not expose private data.
- [ ] The generated prompt index is updated.
