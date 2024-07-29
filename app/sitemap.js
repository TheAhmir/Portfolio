export default function sitemap() {
    return [
      {
        url: 'https://ahmirpostell.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://ahmirpostell.com/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://ahmirpostell.com/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://ahmirpostell.com/resume',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
    ]
  }