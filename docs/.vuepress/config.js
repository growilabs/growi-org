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
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['meta', { name: 'description', content: 'Team Collaboration Software using markdown'}],
    ['meta', { name: 'keywords', content: 'markdown, wiki, javascript, react, growi, crowi'}],
    ['meta', { name: 'author', content: 'WESEEK, Inc.'}],
    ['link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', rel: 'stylesheet'}],
    // Fonts
    ['link', { href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700', rel: 'stylesheet', type: 'text/css'}],
    ['link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous'}],
    ['link', { href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css', rel: 'stylesheet'}],
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'OSS wiki tool GROWI | Easy and Smooth Information Sharing For Everyone',
      description: 'Easy and Smooth Information Sharing For Everyone'
    },
    '/ja/': {
      lang: 'ja',
      title: 'OSS開発wikiツールのGROWI | 快適な情報共有を、全ての人へ',
      description: '快適な情報共有を、全ての人へ'
    }
  },
  themeConfig: {
    logo: '/assets/images/logo.png',
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
