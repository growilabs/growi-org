module.exports = ctx => ({
  title: 'GROWI - Get the best Markdown Wiki for *FREE*',
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: 'img',
        delay: 1000,
        options: {
          margin: 24,
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        // provide i18n redirection
        // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
        locales: true
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-55480073-14' // UA-00000000-0
      }
    ],
    [
      'sitemap',
      {
        'hostname': 'https://growi.org'
      }
    ]
  ],
  head: [
    ['link', { rel: 'icon', href: '/assets/images/favicon.ico', sizes: '48x48'}],
    ['link', { rel: 'icon', href: '/assets/images/favicon.svg', sizes: 'any', type: 'image/svg+xml'}],
    ['link', { rel: 'apple-touch-icon', href: '/assets/images/apple-touch-icon.png'}],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['meta', { name: 'description', content: 'Team Collaboration Software using markdown'}],
    ['meta', { name: 'keywords', content: 'markdown, wiki, javascript, react, growi, crowi'}],
    ['meta', { name: 'author', content: 'GROWI, Inc.'}],
    // OGP
    ['meta', { property: 'og:title', content: 'OSS開発wikiツールのGROWI | 快適な情報共有を、全ての人へ'}],
    ['meta', { property: 'og:description', content: 'GROWIはGROWI, Inc.が開発を行い、MITライセンスで公開しているオープンソースソフトウェアです。 dockerへのインストールやオンプレ対応も可能です。 開発を手伝っていただけるコントリビューター、開発してみたいインターン生も募集しています。'}],
    ['meta', { property: 'og:image', content: 'https://growi.org/assets/images/ogp-logo.png'}],
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary'}],
    ['meta', { name: 'twitter:title', content: 'OSS開発wikiツールのGROWI | 快適な情報共有を、全ての人へ'}],
    ['meta', { name: 'twitter:description', content: 'GROWIはGROWI, Inc.が開発を行い、MITライセンスで公開しているオープンソースソフトウェアです。 dockerへのインストールやオンプレ対応も可能です。 開発を手伝っていただけるコントリビューター、開発してみたいインターン生も募集しています。'}],
    ['meta', { name: 'twitter:image', content: 'https://growi.org/assets/images/ogp-logo.png'}],
    ['link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', rel: 'stylesheet'}],
    // Fonts
    ['link', { href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700', rel: 'stylesheet', type: 'text/css'}],
    ['link', { href: 'https://use.fontawesome.com/releases/v6.5.2/css/all.css', rel: 'stylesheet'}],
    ['link', { href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css', rel: 'stylesheet'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap', rel: 'stylesheet', type: 'text/css'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap', rel: 'stylesheet'}],
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'OSS wiki tool GROWI | Easy and Smooth Information Sharing For Everyone',
      description: 'GROWI is open source software developed by GROWI, Inc. and released under the MIT license. Installation on docker and on-premise support are also possible. We are also looking for contributors who can help with the development and internship students who want to develop.'
    },
    '/ja/': {
      lang: 'ja',
      title: 'OSS開発wikiツールのGROWI | 快適な情報共有を、全ての人へ',
      description: 'GROWIはGROWI, Inc.が開発を行い、MITライセンスで公開しているオープンソースソフトウェアです。 dockerへのインストールやオンプレ対応も可能です。 開発を手伝っていただけるコントリビューター、開発してみたいインターン生も募集しています。'
    }
  },
  themeConfig: {
    logo: '/assets/images/growi-brand-logo-positive.svg',
    search: false,
    smoothScroll: true,
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en')
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        ariaLabel: '言語を選択',
        editLinkText: 'GitHub で編集',
        lastUpdated: '最終更新日',
        nav: require('./nav/ja')
      }
    }
  }
})
