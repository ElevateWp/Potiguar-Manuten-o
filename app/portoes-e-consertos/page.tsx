import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Portões e pequenos consertos',
  description: 'Converse com a Potiguar Manutenção sobre manutenção de portões e pequenos consertos em Natal, RN.',
  pathname: '/portoes-e-consertos/',
});

export default function MaterialsDeliveryPage() {
  return <ProductCategoryPage slug="portoes-e-consertos" />;
}
