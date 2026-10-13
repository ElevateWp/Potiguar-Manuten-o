import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Eletricidade',
  description: 'Serviços e reparos elétricos residenciais da Potiguar Manutenção em Natal, RN.',
  pathname: '/eletricidade/',
});

export default function ConcretePipesPage() {
  return <ProductCategoryPage slug="eletricidade" />;
}
