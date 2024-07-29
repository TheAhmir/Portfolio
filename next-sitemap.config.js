module.exports = {
  siteUrl: 'https://ahmirpostell.com',
  generateRobotsTxt: true,
  exclude: ['/admin'],
  alternateRefs: [
    {
      href: 'https://ahmir-postell.netlify.app/',
      hreflang: 'en',
    },
    {
      href: 'https://www.ahmirpostell.com',
      hreflang: 'en',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/admin',
      },
    ],
  },
}
