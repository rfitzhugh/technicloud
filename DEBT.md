# Debt

Open follow-ups that are documented in the repo but not finished.

## 1. Contact form

The Contact page already posts to Formspree (`layouts/partials/contact.html`), but `params.formspreeEndpoint` in `hugo.yaml` is still a placeholder:

```yaml
formspreeEndpoint: "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
```

Until that is a real form URL, submissions go nowhere.

To finish:

1. Create a form at [formspree.io](https://formspree.io) and set the notification email.
2. Replace the placeholder in `hugo.yaml` with the endpoint Formspree gives you (`https://formspree.io/f/...`).
3. Deploy to production and send a test message.
4. Confirm the first-submission email from Formspree so later messages are delivered.

No backend or extra JavaScript is required. Name, Email, and Message are already wired.

## 2. Custom domain

The site is configured for `technicloud.com` in the repo (`hugo.yaml` `baseURL`, `static/CNAME`), and GitHub Actions deploys to Pages. DNS and the GitHub Pages custom-domain setting still need to be completed at the registrar / GitHub.

To finish:

1. In the repo: **Settings → Pages**, set the source to **GitHub Actions** (not a branch).
2. Add `technicloud.com` (and `www` if you want it) as the custom domain in that same Pages settings page.
3. At the DNS provider, point the domain at GitHub Pages:
   - Apex (`technicloud.com`): `A` records to GitHub’s Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), or an `ALIAS`/`ANAME` if the registrar supports it.
   - `www`: `CNAME` to `<org-or-user>.github.io`.
4. Wait for DNS to propagate, then confirm GitHub issues a TLS certificate and that `https://technicloud.com` loads the site.
