import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reformas residenciais',
  description: 'Reformas e melhorias residenciais da Potiguar Manutenção em Natal, Rio Grande do Norte.',
  pathname: '/reformas/',
});

export default function ConstructionMaterialsPage() {
  return <ProductCategoryPage slug="reformas" />;
}
