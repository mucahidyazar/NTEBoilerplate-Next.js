## Index

- [Installation](#installation)
- [Some Url about Next.JS](#some-url-about-nextjs)
- [About Structure](#about-structure)
- [About CSS](#about-css)
- [About Language System](#about-language-system)
- [About Icons](#about-icons)
- [Creating New Page](#creating-new-page)
- [Setting up Your Environment Variables](#setting-up-your-environment-variables)

## Installation

    git clone https://github.com/mucahidyazar/NTEBoilerplate-Next.js.git
    npm install .
    npm run dev

## Some Url about Next.JS

- [Next.JS](https://nextjs.org/)
- [Documentation](https://nextjs.org/docs)
- [SSR and Data fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)
- [Routing, Link](https://nextjs.org/docs/routing/introduction)
- [Head, Meta, Title, Description](https://nextjs.org/docs/api-reference/next/head)

## About Structure

- public => there are static folderss and files in this folder
- pages => we can create page on here
- views/components => there are components folders and files in here...
- views/layouts => there are layout templates in here. like header, footer, navbar...
- views/ui => there are ui components in here. like button, input vs...
- config => main setting folder
- config/database => express database settings
- config/helper => you can create some helper files on there. like getCurrentTime.ts, getDate.ts....
- config/i18n => javascript setup settings of next-i18next(i18 multi language)
- public/statics/locale => There are the key words that you can use for multi languages
- redux => state management with redux
- public/statics/assets/styles => The style management

## About CSS

- [Next.JS CSS Yapısı](https://nextjs.org/docs/basic-features/built-in-css-support)
- You should import new scss files in main.scss if you create a new one
- You can manage your style files with 2 ways.
  - Either you create a new scss file then import that to the main.scss
  - or you can create a component folder and you can keep on there 2 files like this. Home/index.tsx, Home/styles.module.scss. and you can use this styles folder in your index.tsx by importing like this. (import styles from './styles.module.scss'). And now you can catch the classes that you create in the scss file in your tsx file. You should catch them in classNames of your elements. (<div className={styles.container}></div>)
- You should use the media points by importing from 'public/static/assets/styles/base/breakpoints.scss' for responsivity

## About Language System

- We use next-i18next for this
- public/static/locales => There are language folders
- For using
  - import our withTranslation file in your component like this. (import { withTranslation } from '../../config/i18n/index')
  - then wapper your component like this. (export default withTranslation('header')(Header))
  - and now you are using the keys of header file in your public/static/locales/tr/header.json

## About Icons

- public/static/assets/styles/icon => main icon folder
- [Icomoon](https://icomoon.io/app) You should import your icon files on there and generate your new files to add there again

## Creating New Page

- You just need to create a new file or folder in the pages folder.

## Setting up Your Environment Variables

- [Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables)
- You should create a new file that name is .env.local on root
  - Environment Variables describing for server side
    OWM_API_ID=WRITEYOURAPIKEY
  - Environment Variables describing for client side(browser)
    NEXT_PUBLIC_OWM_API_ID=WRITEYOURAPIKEYFORBROWSER
