# Nextra Personal Website Template

This template includes almost everything you need to build a personal website. You can write **documents** and **blogs**, have navigation bar, search bar, page bar, TOC bar, and other integrated components. And especially with multi-language support (i18n) - pre-configured Vietnamese and English.

[**View Demo →**](https://nextra-personal-website-template.vercel.app)

## Technology used

- NextJS 15
- Nextra v3
- Tailwind CSS, Shadcn/ui
- MDX v3

See more new features of Nextra v3 [here](https://the-guild.dev/blog/nextra-3)

## Start

### Deploy on Vercel

You can get started by creating your own Nextra website and deploy to Vercel by clicking the link:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fnamnguyenthanhwork%2Fnextra-personal-website-template&showOptionalTeamCreation=false)

Vercel will copy the [Nextra Personal Website Template](https://github.com/namnguyenthanhwork/nextra-personal-website-template) and deploy the website for you. Once completed, every commit in the repo will be deployed automatically.

### Copy Repository

You can also clone [this repository](https://github.com/namnguyenthanhwork/nextra-personal-website-template) manually.

### Installation

To manually create a Nextra Docs site, you must install **NextJS, React, Nextra V3 alpha and Nextra Docs Theme V3 alpha**. In your project directory, run the following command to install the dependencies:

```bash
npm i next react react-dom nextra@alpha nextra-theme-docs@alpha
```

If you have NextJS installed in your project, you just need to install `nextra` `nextra-theme-docs`.

Add the following scripts `package.json`:

```json filename="package.json"
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

You can run the project using npm `npm run dev`, running in development mode or `npm run build && npm run start` production mode.

### Add NextJS configuration

Create the `next.config.js` following file in the project root directory:

```js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra();

// If you have other Next.js configurations, you can pass them as parameters:
// module.exports = withNextra({ /* another next.js configuration */ })
```

With the above configuration, Nextra can process Markdown files in your NextJS project, with the theme specified. Other Nextra configurations can be found in the [Guide](https://nextra.site/docs/guide).

### Create Docs Theme configuration

Finally, create the `theme.config.jsx` corresponding file in the project root directory. This will be used to configure the Nextra Docs theme:

```bash
export default {
  logo: <span>Nextra Template</span>,
  project: {
    link: 'https://github.com/namnguyenthanhwork/nextra-personal-website-template',
  },
};
```

Full theme configuration can be found [here](https://nextra.site/docs/docs-theme/theme-configuration).

### Ready to use

You can now create your first MDX page at `pages/index.mdx`:

```mdx filename="pages/index.mdx"
# Welcome to Nextra

Hello world!
```

And run the command `next` or `next dev` specified in `package.json` to start project development! 🎉

## Buy me a coffee

If you find this project helpful, you can buy me a coffee 🙏

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Donate-FF813F.svg)](https://buymeacoffee.com/thanhnamnguyen)

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here. [🙏 Become a sponsor via Buy me a coffee](https://buymeacoffee.com/thanhnamnguyen)
