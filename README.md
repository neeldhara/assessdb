# Foxi Pro - Astro Theme

Premium Astro website template with fully responsive, customizable TailwindCSS components.

![just-the-basics](https://oxygenna-themes.b-cdn.net/foxi-pro-astro/foxi-pro.png)

[![View live Demo](https://oxygenna-themes.b-cdn.net/foxi-astro/button-demo.svg)](https://foxi-pro.netlify.app) [![Page Speed Insights (100%)](https://oxygenna-themes.b-cdn.net/foxi-astro/button-pagespeed.svg)](https://pagespeed.web.dev/analysis/https-foxi-pro-netlify-app/noql4g17gc?form_factor=desktop)

## 1. Introduction

Foxi Pro builds upon the solid foundation of the [free Foxi](https://github.com/oxygenna-themes/foxi-astro-theme) template, enhancing it with a tone of additional features. Designed for developers seeking more advanced functionality, Foxi Pro is the perfect solution for your productivity toolkit.

## 2. Getting Started

### Commands

After downloading the template, you'll need to install some dependencies. Once that's done, you can run it on your local server. Check out the package.json file to see what scripts are available.

You will need to use Node.js version 20.3.0 or later.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

### Folder structure

Inside Foxi Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   ├── scripts/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── blog/
│   │       └── ...
│   │   └── eguides/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`            | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`           | Holds collection data, such as blog posts.                                                                                         |
| `src/content/blog/`      | Contains individual blog posts in markdown.                                                                                        |
| `src/data/`              | Contains JSON and md files with content data (like features, testimonials etc).                                                    |
| `src/icons/`             | Contains all icons used in the project, sourced from [Heroicons](https://heroicons.com/).                                          |
| `src/layouts/`           | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`             | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                                |
| `package.json`           | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

## 3. Theme Configuration

You can find the configuration files in the `src/config` directory. The configuration files are written in TypeScript and contain various settings for the theme, such as basic information, navigation bar, footer navigation, analytics, and social links. You can customize these settings to fit your specific needs.

| Configuration Files              | Description                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/config/config.ts`           | Includes the basic configuration settings including SEO, mode, and scroll animations.           |
| `src/config/navigationBar.ts`    | Includes menu TypeScript interface options and JSON files for the navigation bar.               |
| `src/config/footerNavigation.ts` | Includes menu TypeScript interface options and JSON files for the footer navigation.            |
| `src/config/analytics.ts`        | Includes the required codes for Google Analytics, Google Tag Manager and Google Search Console. |
| `src/config/socialLinks.ts`      | Contains the social link data for the website.                                                  |

In the `src/config/config.ts` file, you can find the basic configuration settings.
These includes the default SEO settings:

- `siteTitle`: The default title of your website.
- `siteDescription`: The default description of your website.
- `ogImage`: The open graph image for your website.
- `logo`: The logo for your website.
- `canonical`: Whether to use canonical links for your website.
- `noindex`: Prevents search engines from indexing your website if set to true.

as well as the default site settings:

- `mode`: The default mode for your website. Can be set to 'auto', 'light', or 'dark'. Auto mode will automatically switch between light and dark modes based on the user's system settings, while 'light' and 'dark' will force the site to use the corresponding mode.
- `scrollAnimations`: Whether to enable smooth scrolling animations for your website.

## 4. Theme Customization

### Customize the Colors

The theme uses two main colors: primary and neutral. These colors are defined in the Tailwind CSS configuration file. To personalize the color scheme of your project, you can easily modify these color values.

To customize the colors, follow these steps:

1. Open the `tailwind.config.js` file.
2. Find the `theme` section within the file.
3. Under `theme`, locate the `extend` property and then the `colors` object.
4. Modify the color values for `primary` and `neutral` to suit your preferred color palette.

You can use the [tailwind CSS colors](https://nodejs.org/en/download/) or create your [own palette](https://uicolors.app/create) .

### Customize the Fonts

To customize the fonts used in your project, follow these steps:

1. **Update the Tailwind CSS Configuration**

   Open the `tailwind.config.js` file. In the `theme` section, find the `extend` property and update the `fontFamily` object.

2. **Ensure Font Packages are Installed**

   Verify that the necessary font packages are included in your `package.json` file and also imported in the `src/layouts/Layout.astro` file.

You can add your own fonts by following [this guide](https://docs.astro.build/en/guides/fonts/#using-fontsource)

### Dark/Light Mode

By default, the site uses an automatic mode switcher, allowing it users to switch between light and dark modes based on the user's system settings or by using the mode switcher in the navigation bar. This is achioeved by setting the `mode-auto` class in the `Layout.astro` file.

If you need to enforce a specific theme, you can set the class above as **`mode-light`** or **`mode-dark`**. When **`mode-light`** is applied, the site will consistently display in light mode, and the switcher will not be functional. Similarly, **`mode-dark`** will force the site to dark mode, with the switcher rendered non-functional. These settings allow you to maintain a fixed appearance across the site regardless of user preferences or system settings.

## 5. Internationalization (i18n)

Foxi Pro supports multilingual content using Astro's built-in internationalization capabilities, making it straightforward to build sites for multiple locales without requiring additional plugins.

### Setting up i18n

1. **Define Locales**

   Configure locales directly in `astro.config.mjs` by specifying the `defaultLocale` and `locales` to handle different languages across the site.

2. **Localized Folders**

   Astro supports organizing content by locale-specific folders. The default language does not need a separate folder unless desired, but additional languages should be nested in corresponding subfolders. For example:

   ```plaintext
   pages/
   ├── page.astro            # Default language content
   └── es/
       └── page.astro        # Spanish content
   ```

3. **Content Collections**

   Each content type is organized within `src/content/` by language, using subdirectories for each supported language.

   ```plaintext
   src/content/
   └── blog/
       ├── en/    # English content
       └── es/    # Spanish content
   ```

   This structure allows for easy localization of blog posts, guides, and other collections. When retrieving collection data, you must specify the language from which to draw the data. For example, to fetch blog posts in Spanish, you can use:

   ```javascript
   const lorem = await getCollection("blog", ({ id }) => {
     return id.startsWith("es/"); // Fetch content from the Spanish (es) folder
   });
   ```

   For more information, refer to Astro's [guide on using collections for translated content](https://docs.astro.build/en/recipes/i18n/#use-collections-for-translated-content).

### Translating Content

1. **Translation Files**

   JSON files for the supported languages are located in the `data/json-files/` folder. These files store translations used across components, like the footer navigation, the feature blocks, and the highlight blocks. For instance the `json-files/en/navigationBarData.json` file contains the English content for the navigation bar. In order to change the main menu items, you can simply edit the JSON file and add or remove the menu items as needed. If you need to make any structural changes to the menu, you will need to update the TypeScript interface in `config/navigationBar.ts` and the corresponding code in the `src/components/ui/Navbar.astro` file.

2. **Language Switcher**

   All pages are translated using the language switcher component. When a user clicks on the language switcher, the page is redirected to the corresponding language version. An exception is made for category and tag pages for collections, which will redirect to the main collection page. For instance, `/blog/tags/lorem/` will redirect to `/blog/`, allowing for different categories, tags, etc., for each language.

For more details on localization, refer to Astro's official [Internationalization guide](https://docs.astro.build/en/guides/internationalization/).

## 6. Content Management

Foxi Pro includes Keystatic CMS integration for both the Blog and the eGuides collections, allowing you to manage your content effortlessly from within your Astro project. Here’s how you can get started with Keystatic in Foxi Pro:

### Keystatic configuration

Locate the Keystatic configuration files in `src/keystatic.config.ts`. This file defines the content collections, and settings used in the CMS.

In your Keystatic config, you'll need to set the storage option to either local or cloud. In the existing configuration, the storage is set to local for development purposes and cloud for production:

```plaintext
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
```

To use the cloud storage, you'll need to add to the cloud.project property the name of the team and project from your Keystatic Cloud account:

```plaintext
  cloud: {
   project: '[TEAM_NAME]/[PROJECT_NAME]',
 },
```

### Accessing Keystatic

To use Keystatic, open your Astro project and run the development server. The keystaic dashboard will be available at `http://127.0.0.1:4321/keystatic`.

For further details, refer to Keystatic’s official [documentation](https://keystatic.com/docs/introduction) for comprehensive setup and customization guidance.

## 7. Support

If you’ve purchased the Foxi Pro theme, you’re invited to join our exclusive Foxi Pro channel on our [Discord server](https://discord.gg/dccWbkEY). This community is dedicated to providing guidance and support, whether you're setting up the theme or adjusting its configuration. Our team and fellow users are there to help you make the most of your theme experience!

## 8. License

Oxygenna Single-Use License for Foxi-Pro Theme

### License Agreement

This Single-Use License ("Agreement") is a legal agreement between Oxygenna ("Licensor") and you ("Licensee") for the purchase and use of the Foxi-Pro Theme ("Theme"). By purchasing and using the Theme, you agree to comply with the following terms and conditions.

#### 1. Grant of License

This Agreement grants you a non-exclusive, non-transferable, single-use license to install and use the Theme on one website or domain only. You may customize the Theme for personal or commercial use on that single installation, provided all terms of this Agreement are followed.

#### 2. Restrictions

Single Installation Only: You may use the Theme on one website or domain only. For any additional websites, domains, or installations, a separate license must be purchased.
No Redistribution or Resale: You may not resell, redistribute, share, sublicense, or transfer the Theme or any modified versions thereof to third parties.

#### 3. Modifications

You are permitted to modify or customize the Theme to suit your needs. However, modified versions of the Theme may not be distributed, resold, or shared in any form.

#### 4. Intellectual Property

All rights, title, and interest in and to the Theme remain the exclusive property of Oxygenna. Purchasing this license grants usage rights only; ownership of the Theme and all associated intellectual property remains with Oxygenna.

#### 5. Support and Updates

This license includes support and updates for a period of 6 months from the date of purchase. After this period, you may choose to contact us to renew your support and updates for an additional fee.

#### 6. Disclaimer of Warranties and Limitation of Liability

The Theme is provided "as-is," without warranty of any kind. In no event shall Oxygenna be liable for any damages arising from the use or inability to use the Theme, including but not limited to direct, indirect, incidental, or consequential damages.

#### 7. Developer License Option

If you require a license for multiple installations or client projects, please contact Oxygenna at themes@oxygenna.com to discuss our Developer License options.

By purchasing, downloading, or using this Theme, you acknowledge that you have read, understood, and agreed to abide by the terms of this License Agreement.

Copyright © 2025 - Designed & Developed by [Oxygenna](http://www.oxygenna.com/)

[![Hire Us](https://oxygenna-themes.b-cdn.net/foxi-astro/hireus.png)](mailto:info@oxygenna.com,christos@oxygenna.com)
