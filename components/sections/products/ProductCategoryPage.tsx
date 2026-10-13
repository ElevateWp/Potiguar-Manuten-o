import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

const categoryImages: Record<string, { src: string; alt: string }> = {
  'encanamento': { src: '/images/stock-metal-worker.jpg', alt: 'Reparo hidráulico residencial, imagem ilustrativa' },
  'eletricidade': { src: '/images/stock-industrial-welder.jpg', alt: 'Serviço elétrico residencial, imagem ilustrativa' },
  'pintura': { src: '/images/stock-welding-workshop.jpg', alt: 'Serviço de pintura residencial, imagem ilustrativa' },
  'reformas': { src: '/images/stock-roof-structure.jpg', alt: 'Reforma residencial, imagem ilustrativa' },
  'reparos-manutencao': { src: '/images/stock-welding-brazil.jpg', alt: 'Reparo residencial, imagem ilustrativa' },
  'portoes-e-consertos': { src: '/images/stock-steel-beams.jpg', alt: 'Manutenção residencial, imagem ilustrativa' },
};

const serviceDetails: Record<string, { intro: string; focus: string; planning: string[]; execution: string[] }> = {
  'encanamento': {
    intro: 'Serviços de encanamento incluem reparos de vazamentos e troca de hidrômetros, conforme a necessidade identificada no local.',
    focus: 'Conte onde percebeu o vazamento ou qual peça precisa de atenção. Evite mexer em instalações molhadas ou embutidas.',
    planning: ['Local do vazamento ou reparo', 'Quando o problema começou', 'Fotos feitas de um local seguro', 'Endereço e disponibilidade para atendimento'],
    execution: ['Descrição do problema à equipe', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
  'eletricidade': {
    intro: 'A Potiguar Manutenção atende serviços e reparos elétricos residenciais, incluindo demandas relacionadas a medidores.',
    focus: 'Descreva o que aconteceu e onde. Não toque em fios expostos nem tente abrir o medidor.',
    planning: ['Tipo de falha ou serviço elétrico', 'Local e momento em que percebeu o problema', 'Fotos feitas à distância, se for seguro', 'Endereço e disponibilidade para atendimento'],
    execution: ['Descrição do problema à equipe', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
  'pintura': {
    intro: 'Serviços de pintura residencial com escopo e orçamento alinhados diretamente com a equipe.',
    focus: 'Explique quais áreas precisam de pintura e compartilhe referências ou fotos feitas do local.',
    planning: ['Cômodos ou áreas que deseja pintar', 'Condição atual das superfícies', 'Referências de cor, se disponíveis', 'Endereço e disponibilidade para atendimento'],
    execution: ['Entendimento das áreas a pintar', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
  'reformas': {
    intro: 'Converse com a equipe sobre reformas e melhorias residenciais. O serviço depende das condições e necessidades de cada imóvel.',
    focus: 'Conte quais áreas da casa precisam de atenção e que resultado você espera.',
    planning: ['Descrição das áreas e serviços desejados', 'Fotos feitas com segurança, se disponíveis', 'Endereço e condições de acesso', 'Prazo e disponibilidade desejados'],
    execution: ['Entendimento dos serviços necessários', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
  'reparos-manutencao': {
    intro: 'A equipe atende diferentes reparos residenciais. Explique o que precisa para confirmar a disponibilidade.',
    focus: 'Descreva o problema e envie fotos do local se isso puder ser feito com segurança.',
    planning: ['Tipo de reparo necessário', 'Local e condições do serviço', 'Fotos feitas com segurança, se disponíveis', 'Endereço e disponibilidade para atendimento'],
    execution: ['Entendimento do reparo', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
  'portoes-e-consertos': {
    intro: 'Entre em contato para conversar sobre manutenção de portão eletrônico e outros pequenos consertos residenciais.',
    focus: 'Explique o que parou de funcionar e quando percebeu o problema. Não tente desmontar o portão ou seus componentes.',
    planning: ['Tipo de portão ou conserto necessário', 'Descrição do problema', 'Fotos feitas à distância, se for seguro', 'Endereço e disponibilidade para atendimento'],
    execution: ['Entendimento do conserto necessário', 'Alinhamento do orçamento', 'Combinação do atendimento e das próximas etapas'],
  },
};

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;
  const image = categoryImages[slug] || categoryImages['encanamento'];
  const details = serviceDetails[slug] || serviceDetails['encanamento'];
  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="w-full bg-paper">
      <section className="border-b border-mist bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} />
            <AnimateOnScroll animation="fade-right">
              <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">Potiguar Manutenção · Natal, RN</span>
              <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
              <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
              <p className="mt-4 max-w-xl font-body text-15 leading-relaxed text-forest-light">{details.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar para a empresa</Button>
                <Link href="/contact/" className="inline-flex min-h-12 items-center rounded-pill border border-mist px-6 font-body text-15 text-forest-ink hover:border-brand">Solicitar informações</Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper shadow-sm">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <span className="absolute bottom-3 right-3 bg-paper/90 px-3 py-1 font-body text-12 text-forest-ink">Imagem ilustrativa</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <AnimateOnScroll animation="fade-right">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Sobre o serviço</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Uma solução definida para cada projeto</h2>
            <p className="mt-5 font-body text-17 leading-relaxed text-forest-light">{category.clinicalExplanation}</p>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">{details.focus}</p>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">A Potiguar Manutenção fica em Ponta Negra, Natal, RN. Entre em contato para compartilhar as informações do serviço e confirmar a disponibilidade no seu endereço.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={0.1}>
            <div className="border border-mist bg-paper-secondary p-6 md:p-8">
              <h3 className="font-display text-21 text-forest-ink">Para quem este serviço pode ser indicado</h3>
              <ul className="mt-5 space-y-3">
                {category.whoNeeds.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{item}</li>)}
              </ul>
              <div className="mt-6 border-t border-mist pt-5">
                <p className="font-body text-13 font-medium uppercase tracking-wider text-brand">Converse com a equipe se você precisa</p>
                <ul className="mt-3 space-y-2">
                  {category.indications.map((item) => <li key={item.condition} className="font-body text-15 leading-relaxed text-forest-light"><strong className="text-forest-ink">{item.condition}:</strong> {item.explanation}</li>)}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">O que considerar</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Informações que ajudam no planejamento</h2>
            <p className="mt-4 max-w-3xl font-body text-15 leading-relaxed text-forest-light">Cada projeto tem características próprias. Reunir alguns detalhes antes de entrar em contato pode ajudar a equipe a compreender melhor a sua necessidade.</p>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {details.planning.map((item, index) => (
              <AnimateOnScroll key={item} animation="fade-up" delay={index * 0.08}>
                <div className="flex h-full gap-4 border border-mist bg-paper p-5 md:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-softBlue font-display text-17 text-forest-navy">0{index + 1}</span>
                  <p className="font-body text-15 leading-relaxed text-forest-ink">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <AnimateOnScroll animation="fade-right">
              <h3 className="font-display text-26 text-forest-ink">Benefícios de alinhar o escopo</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">Uma conversa clara no início ajuda a organizar as expectativas e a combinar como o trabalho será conduzido.</p>
              <ul className="mt-5 space-y-3">{category.benefits.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">✓</span>{item}</li>)}</ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={0.1}>
              <h3 className="font-display text-26 text-forest-ink">Pontos para conversar com a equipe</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">Na avaliação, explique o resultado esperado e pergunte quais etapas, condições e informações se aplicam ao seu caso.</p>
              <ul className="mt-5 space-y-3">{details.execution.map((item) => <li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">→</span>{item}</li>)}</ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ProcedurePin steps={category.procedureSteps} title={`Etapas de ${category.name.toLowerCase()}`} subtitle="Como funciona" className="bg-paper" />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Organização do projeto</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Planejamento, execução e orçamento</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {category.recoveryTimeline.map((item, index) => (
              <AnimateOnScroll key={item.period} animation="fade-up" delay={index * 0.1}>
                <article className="h-full border border-mist p-6 md:p-8">
                  <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">{item.period}</span>
                  <h3 className="mt-3 font-display text-21 text-forest-ink">O que esperar</h3>
                  <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{item.expectedSensations}</p>
                  <h3 className="mt-5 font-display text-17 text-forest-ink">Como se preparar</h3>
                  <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{item.careProtocol}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 grid gap-8 bg-navy px-6 py-8 text-paper md:grid-cols-2 md:p-10">
            <AnimateOnScroll animation="fade-right">
              <span className="font-body text-13 font-medium uppercase tracking-wider text-lime">Orçamento transparente</span>
              <h3 className="mt-3 font-display text-26">{category.costTransparency.baseRange}</h3>
              <p className="mt-3 font-body text-15 leading-relaxed text-paper/75">{category.costTransparency.note}</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={0.1}>
              <h3 className="font-display text-21">O valor pode depender de</h3>
              <ul className="mt-3 space-y-2">{category.costTransparency.factors.map((item) => <li key={item} className="font-body text-15 text-paper/80">• {item}</li>)}</ul>
              <p className="mt-5 font-body text-13 font-medium uppercase tracking-wider text-paper">Alinhe também</p>
              <ul className="mt-2 space-y-2">{category.costTransparency.whatIsIncluded.map((item) => <li key={item} className="font-body text-15 text-paper/80">• {item}</li>)}</ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-[.75fr_1.25fr]">
          <AnimateOnScroll animation="fade-right">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Perguntas frequentes</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Dúvidas sobre {category.name.toLowerCase()}</h2>
            <p className="mt-4 font-body text-15 leading-relaxed text-forest-light">Veja respostas iniciais e fale com a equipe para receber informações sobre o seu projeto.</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={0.1}>
            <Accordion items={category.faqs.map((faq) => ({ question: faq.question, answer: faq.answer, relatedLink: faq.relatedSlug ? { href: `/${faq.relatedSlug}/`, label: 'Conheça outro serviço' } : undefined }))} />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Outras soluções</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Conheça outros serviços</h2>
          </AnimateOnScroll>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.1}>
                <Link href={`/${service.slug}/`} className="group block h-full border border-mist bg-paper p-6 transition-colors hover:border-brand">
                  <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">Potiguar Manutenção</span>
                  <h3 className="mt-3 font-display text-21 text-forest-ink group-hover:text-brand">{service.name}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p>
                  <span className="mt-5 inline-block font-body text-13 font-medium text-forest-navy">Saiba mais →</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-paper md:py-16">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <h2 className="font-display text-26 md:text-33">Vamos conversar sobre seu projeto?</h2>
            <p className="mt-2 font-body text-15 text-paper/75">Entre em contato com a Potiguar Manutenção em Natal.</p>
          </div>
          <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="lime" size="lg">Ligar para a equipe</Button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
