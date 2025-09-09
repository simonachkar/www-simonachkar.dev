<h1 align='center'>simonachkar.dev</h1>

<div align='center'>
    <img alt='Logo' src='public/logo.png'
        width='100' />
</div>

<p align='center'>
    My personal website (4th iteration). Built with
    <a href='https://nextjs.org' target='_blank'>
        Next.js
    </a>
    &
    <a href='https://tailwindcss.com' target='_blank'>
        Tailwind CSS
    </a>
    and deployed with
    <a href='https://www.netlify.com' target='_blank' rel='noreferrer'>
        Netlify
    </a>
    .
</p>

<p align='center'>
    <img src='https://api.netlify.com/api/v1/badges/d7e8efc9-f4e9-4ab9-beab-12cd34be5552/deploy-status' alt='Netlify Status' />
</p>

## Setup

To get up and running, install dependencies and run the development server:

```
# Install dependencies
npm install

# Run development server
npm run dev
```

## Stack

### Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Typefaces

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load [Montserrat](https://fonts.google.com/specimen/Montserrat) for Latin (e.g. English/French) alphabet and [Rubik](https://fonts.google.com/specimen/Rubik) for Arabic alphabet, custom Google Fonts.

### SVG

SVG components, located in the `components/svg` directory, are derived from [iconmonstr](https://iconmonstr.com).

### i18n

Internationalization (i18n) is a key feature of this project, with support for English, French, and Arabic languages. You can find more information on i18n in Next.js in the [Next.js Internationalization docs](https://nextjs.org/docs/app/building-your-application/routing/internationalization).

I followed the example set by this [repo](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing). No 3rd-party libraries were needed for i18n.

### Dark/Light Mode

Dark mode is applied to this project, and the ability to switch between themes (light/dark) with `theme-switcher`.

This feature was made possible with the help of `next-themes`. To learn more about this implementation, you can refer to [this guide](https://www.linkedin.com/pulse/implement-dark-mode-tailwindcss-nextjs13-app-5-simple-lucas-los-arcos/) by Lucas Los Arcos.

### Misc Ref

In addition to this, I've used the following libraries and resources:

- [html-react-parser](https://www.npmjs.com/package/html-react-parser) library for parsing JSON content
- [Minimal Prettier Setup](https://blog.stackademic.com/effortless-code-formatting-setting-up-prettier-with-next-js-13-460cbc6bbe2c)
