# technicloud

Technicloud's public site — consulting services, about, and contact pages — built with [Hugo](https://gohugo.io), the [Forty](https://github.com/MarcusVirg/forty) theme (a Hugo port of [HTML5 UP Forty](https://html5up.net/forty)), and deployed to GitHub Pages.

The visual theme is [Forty](https://github.com/MarcusVirg/forty), a Hugo port of [HTML5 UP Forty](https://html5up.net/forty), vendored as `themes/forty`. After cloning, initialize the submodule:

```sh
git submodule update --init --recursive
```

## Local development

```sh
hugo server -D
```

## Deployment

`.github/workflows/hugo.yaml` builds the site with Hugo 0.166.0 (extended). Pull requests run a build check. Pushes to `main` (and manual **Actions → Deploy Hugo site to Pages → Run workflow**) publish to GitHub Pages.

The custom domain (technicloud.com) is set via `static/CNAME`. In the repo's **Settings → Pages**, the source must be **GitHub Actions**, and DNS must point technicloud.com at GitHub Pages.

## Contact form

The Contact page posts to Formspree. Set `params.formspreeEndpoint` in `hugo.yaml` to your own Formspree form URL (create one for free at https://formspree.io).
