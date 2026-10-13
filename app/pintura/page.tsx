import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Pintura residencial',
  description: 'Serviços de pintura residencial da Potiguar Manutenção em Natal, RN.',
  pathname: '/pintura/',
});

export default function DecorativeBlocksPage() {
  return <ProductCategoryPage slug="pintura" />;
}
