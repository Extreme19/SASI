import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {return ['','/sasi','/sasi/outreaches/ready-set-grow'].map(path=>({url:`https://joshiverse.com${path}`,lastModified:new Date()}))}
