module.exports = {
    siteUrl: 'https://ahmirpostell.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['\admin'],
    alternateRefs: [
      {
        href: 'https://ahmir-postell.netlify.app/',
        hreflang: 'en',
      },
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }