import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/clinic-data';
import { SERVICES } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    '',
    '/testimonials',
    '/about',
    '/book-appointment',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('emergency') || route.includes('book') ? 0.9 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BASE_URL}/${service.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.lastUpdated).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...serviceRoutes, ...blogRoutes];
}
