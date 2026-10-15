const SITE_URL = 'https://growi.org';
const ORG_URL = 'https://growi.co.jp';
const VIDEO_UPLOAD_DATE = '2026-10-15';

const ORG_ID = `${ORG_URL}/#organization`;
const SOFTWARE_ID = `${SITE_URL}/#software`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// One linked @graph per locale page. Texts come from the page frontmatter and the
// locale config so the JSON-LD always matches the visible content and language.
const buildStructuredData = ({ base, hreflang, description, frontmatter }) => {
  const pageUrl = `${SITE_URL}${base}`;
  const mcp = frontmatter.sections.growi_ai.mcp_server;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        'name': 'GROWI, Inc.',
        'url': ORG_URL,
        'logo': `${SITE_URL}/assets/images/growi-brand-logo-positive.svg`,
        'sameAs': [
          'https://github.com/growilabs',
          'https://x.com/GrowiDev',
          'https://growi.cloud',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        'name': 'GROWI',
        'url': SITE_URL,
        'inLanguage': ['ja', 'en'],
        'publisher': { '@id': ORG_ID },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': SOFTWARE_ID,
        'name': 'GROWI',
        'url': pageUrl,
        'description': description,
        'inLanguage': hreflang,
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web, Linux, Docker',
        'license': 'https://opensource.org/licenses/MIT',
        'downloadUrl': 'https://github.com/growilabs/growi',
        'installUrl': 'https://hub.docker.com/r/growilabs/growi/',
        'isAccessibleForFree': true,
        'screenshot': `${SITE_URL}${frontmatter.mockImage}`,
        'featureList': Object.values(frontmatter.features).map(feature => feature.title),
        'author': { '@id': ORG_ID },
        'publisher': { '@id': ORG_ID },
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
      },
      {
        '@type': 'VideoObject',
        '@id': `${pageUrl}#mcp-server-demo`,
        'name': mcp.video_label,
        'description': mcp.video_description,
        'thumbnailUrl': `${SITE_URL}/assets/images/growi-mcp-server-poster.jpg`,
        'contentUrl': `${SITE_URL}/assets/images/growi-mcp-server.mp4`,
        'uploadDate': VIDEO_UPLOAD_DATE,
        'inLanguage': hreflang,
      },
    ],
  };
};

const toJsonLdScript = data => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

module.exports = { buildStructuredData, toJsonLdScript };
