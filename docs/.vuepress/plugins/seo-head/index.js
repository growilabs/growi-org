const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://growi.org';
const VIDEO_UPLOAD_DATE = '2026-10-15';
const OGP_IMAGE = `${SITE_URL}/assets/images/ogp-logo.png`;

const LOCALES = {
  '/ja/': { hreflang: 'ja', ogLocale: 'ja_JP' },
  '/en/': { hreflang: 'en', ogLocale: 'en_US' },
};

const findLocaleBase = pagePath => Object.keys(LOCALES).find(base => pagePath.startsWith(base));

// Per-locale OGP / Twitter card derived from the locale title and description,
// so the card language always matches the page language.
module.exports = (options, ctx) => ({
  name: 'growi-seo-head',

  extendPageData($page) {
    const base = findLocaleBase($page.path);
    if (base == null || $page.path !== base) {
      return;
    }
    const { title, description } = ctx.siteConfig.locales[base];
    const { ogLocale } = LOCALES[base];
    const alternates = Object.keys(LOCALES).filter(b => b !== base).map(b => LOCALES[b].ogLocale);

    const meta = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'GROWI' },
      { property: 'og:url', content: `${SITE_URL}${$page.path}` },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:locale', content: ogLocale },
      ...alternates.map(content => ({ property: 'og:locale:alternate', content })),
      { property: 'og:image', content: OGP_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'GROWI' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@GrowiDev' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OGP_IMAGE },
    ];
    $page.frontmatter.meta = [...($page.frontmatter.meta || []), ...meta];
  },

  // VuePress 1 cannot emit per-page <link> or extra JSON-LD, so add them to the built HTML.
  async generated() {
    const hreflangTags = [
      ...Object.keys(LOCALES).map(base => `<link rel="alternate" hreflang="${LOCALES[base].hreflang}" href="${SITE_URL}${base}">`),
      `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/">`,
    ].join('');

    await Promise.all(Object.keys(LOCALES).map(async base => {
      const page = ctx.pages.find(p => p.path === base);
      const mcp = page.frontmatter.sections.growi_ai.mcp_server;
      const video = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': mcp.video_label,
        'description': mcp.video_description,
        'thumbnailUrl': `${SITE_URL}/assets/images/growi-mcp-server-poster.jpg`,
        'contentUrl': `${SITE_URL}/assets/images/growi-mcp-server.mp4`,
        'uploadDate': VIDEO_UPLOAD_DATE,
        'inLanguage': LOCALES[base].hreflang,
      };
      const videoTag = `<script type="application/ld+json">${JSON.stringify(video).replace(/</g, '\\u003c')}</script>`;

      const file = path.join(ctx.outDir, base, 'index.html');
      const html = await fs.promises.readFile(file, 'utf8');
      await fs.promises.writeFile(file, html.replace('</head>', `${hreflangTags}${videoTag}</head>`));
    }));
  },
});
