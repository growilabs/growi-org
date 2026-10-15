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
    require('./plugins/seo-head'),
    [
      'sitemap',
      {
        'hostname': 'https://growi.org',
        'exclude': ['/404.html'],
        'changefreq': 'weekly'
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
    ['link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', rel: 'stylesheet'}],
    // Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700&display=swap', rel: 'stylesheet', type: 'text/css'}],
    ['link', { href: 'https://use.fontawesome.com/releases/v6.5.2/css/all.css', rel: 'stylesheet'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap', rel: 'stylesheet', type: 'text/css'}],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap', rel: 'stylesheet'}],
  ],
  locales: {
    '/en/': {
      lang: 'en',
      title: 'GROWI - Free Open Source Markdown Wiki | Easy and Smooth Information Sharing For Everyone',
      description: 'GROWI is open source software developed by GROWI, Inc. and released under the MIT license. Installation on Docker and on-premise support are also possible. It also supports GROWI AI Agent and GROWI MCP Server. We are also looking for contributors who can help with the development and interns who want to try development.'
    },
    '/ja/': {
      lang: 'ja',
      title: 'GROWI｜無料のオープンソース Markdown Wiki｜快適な情報共有を、全ての人へ',
      description: 'GROWIはGROWI, Inc.が開発を行い、MITライセンスで公開しているオープンソースソフトウェアです。dockerへのインストールやオンプレ対応も可能です。GROWI AI Agent や GROWI MCP Server にも対応しています。開発を手伝っていただけるコントリビューター、開発してみたいインターン生も募集しています。'
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
