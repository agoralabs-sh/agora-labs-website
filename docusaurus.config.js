// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/* eslint-enable @typescript-eslint/no-var-requires */

// directories
const SOURCE_DIR = path.resolve(__dirname, 'src');
const STATIC_DIR = path.resolve(__dirname, 'static');
const STYLES_DIR = path.resolve(SOURCE_DIR, 'styles');

// links
const AGORA_LABS_LINK = 'https://agoralabs.sh';
const ALGORAND_PROVIDER_LINK = 'https://algorand-provider.agoralabs.sh';
const KIBISIS_LINK = 'https://kibis.is';
const X_LINK = 'https://x.com/agoralabs_sh';

// application
const TITLE = 'Agora Labs';
const TAGLINE = 'Innovate. Build. Transform.';

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  favicon: 'images/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'agoralabs-sh ',
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
        },
        docs: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: [
            require.resolve(path.resolve(STYLES_DIR, 'global.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'footer.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'functions.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'mixins.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'navbar.scss')),
          ],
        },
      }),
    ],
  ],
  projectName: 'agora-labs-website',
  staticDirectories: [STATIC_DIR],
  tagline: TAGLINE,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'images/meta_card.png',
      metadata: [
        {
          name: 'keywords',
          content: 'blockchain, cryptocurrency, development',
        },
      ],
      navbar: {
        items: [
          // right
          {
            label: 'About',
            position: 'right',
            to: '/#about',
          },
          {
            label: 'Collective',
            position: 'right',
            to: '/#collective',
          },
          {
            label: 'Blog',
            position: 'right',
            to: '/blog',
          },
        ],
        style: 'dark',
      },
      footer: {
        copyright: `<p class="copyright-text">Copyright© Agora Labs. All Rights Reserved.</p>`,
        links: [
          {
            title: TITLE,
            items: [
              {
                label: 'Home',
                to: '/',
              },
              // {
              //   label: 'About',
              //   to: '/#about',
              // },
              // {
              //   label: 'Collective',
              //   to: '/#collective',
              // },
              {
                label: 'Blog',
                href: '/blog',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                html: `<a class="footer__icon footer__icon--x-icon" href="${X_LINK}" target="_blank" />`,
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Kibisis',
                href: KIBISIS_LINK,
              },
              {
                label: 'Algorand Provider',
                href: ALGORAND_PROVIDER_LINK,
              },
            ],
          },
        ],
        style: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  title: TITLE,
  trailingSlash: false,
  url: AGORA_LABS_LINK,
};

module.exports = config;
