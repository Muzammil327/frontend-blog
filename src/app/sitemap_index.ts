import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://muzmentor.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://muzmentor.vercel.app/posts/how-to-download-and-install-vscode-for-windows/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 2,
    },
  ]
}
