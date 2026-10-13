import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reparos e manutenção',
  description: 'Reparos e manutenção residencial da Potiguar Manutenção em Natal, RN.',
  pathname: '/reparos-manutencao/',
});

export default function CurbsidePickupPage() {
  return <ProductCategoryPage slug="reparos-manutencao" />;
}
