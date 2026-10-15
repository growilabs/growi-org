// Adds canonical / hreflang to each locale page and a language redirect to the root page,
// which VuePress 1 cannot express per page.
const fs = require('fs')
const path = require('path')

const HOSTNAME = 'https://growi.org'
const LOCALES = [
  { prefix: '/ja/', lang: 'ja' },
  { prefix: '/en/', lang: 'en-US' },
]

const buildLocaleTags = (prefix) => [
  `<link rel="canonical" href="${HOSTNAME}${prefix}">`,
  ...LOCALES.map(({ prefix: p, lang }) => `<link rel="alternate" hreflang="${lang}" href="${HOSTNAME}${p}">`),
  `<link rel="alternate" hreflang="x-default" href="${HOSTNAME}/">`,
].join('')

// Root keeps a 200 response; visitors are sent to their language, crawlers see the links.
const ROOT_TAGS = [
  `<link rel="canonical" href="${HOSTNAME}/">`,
  ...LOCALES.map(({ prefix, lang }) => `<link rel="alternate" hreflang="${lang}" href="${HOSTNAME}${prefix}">`),
  `<link rel="alternate" hreflang="x-default" href="${HOSTNAME}/">`,
  '<script>(function(){var l=(navigator.languages||[navigator.language||""])[0]||"";'
    + 'location.replace(/^ja/i.test(l)?"/ja/":"/en/")})()</script>',
].join('')

const injectIntoHead = (file, tags) => {
  const html = fs.readFileSync(file, 'utf8')
  if (!html.includes('</head>')) throw new Error(`seo-head: no </head> in ${file}`)
  fs.writeFileSync(file, html.replace('</head>', `${tags}</head>`))
}

const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;')

// vuepress-plugin-sitemap cannot cope with a root page that has no locale, so the sitemap is written here.
// The root page is a language chooser and is left out; /404.html never belongs in a sitemap.
const buildSitemap = (pages) => {
  const alternates = LOCALES
    .map(({ prefix, lang }) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${HOSTNAME}${prefix}"/>`)
    .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${HOSTNAME}/"/>`)
    .join('')
  const urls = LOCALES.map(({ prefix }) => {
    const page = pages.find((p) => p.path === prefix)
    const lastmod = page && page.lastUpdated ? `<lastmod>${new Date(page.lastUpdated).toISOString()}</lastmod>` : ''
    return `<url><loc>${escapeXml(HOSTNAME + prefix)}</loc>${lastmod}${alternates}</url>`
  })
  return '<?xml version="1.0" encoding="UTF-8"?>'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
    + `${urls.join('')}</urlset>`
}

module.exports = (options, context) => ({
  name: 'seo-head',

  async generated () {
    const dist = context.outDir
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap(context.pages))
    injectIntoHead(path.join(dist, 'index.html'), ROOT_TAGS)
    LOCALES.forEach(({ prefix }) => {
      injectIntoHead(path.join(dist, prefix, 'index.html'), buildLocaleTags(prefix))
    })
  },
})
