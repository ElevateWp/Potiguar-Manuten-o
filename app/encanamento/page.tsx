import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Encanamento e hidráulica',
  description: 'Reparos de vazamentos e troca de hidrômetros com a Potiguar Manutenção em Natal, RN.',
  pathname: '/encanamento/',
});

export default function BuildingMaterialsPage() {
  return <ProductCategoryPage slug="encanamento" />;
}
