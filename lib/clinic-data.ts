export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string; specialization: string;
  experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[];
  specialties: string[]; image: string; warmImage: string;
}

export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string;
  whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string; legalName: string; tagline: string; establishedYear?: number;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'Potiguar Manutenção', legalName: 'Potiguar Manutenção',
  tagline: 'Pintura, encanamento, elétrica e reformas em Ponta Negra, Natal.',
  primaryLocation: {
    street: 'R. Jorn. José Mussoline Fernandes, 123 - Ponta Negra', suite: '',
    city: 'Natal', state: 'Rio Grande do Norte', postalCode: '59090-188', country: 'BR',
    directions: 'R. Jorn. José Mussoline Fernandes, 123 - Ponta Negra, Natal - RN, 59090-188, Brasil',
    landmarks: '4R8G+G9 Ponta Negra, Natal - Rio Grande do Norte, Brasil',
  },
  contact: { phone: '+55 84 99131-4147', emergencyPhone: '+55 84 99131-4147', whatsapp: '+55 84 99131-4147', email: '' },
  identityHighlights: ['Pintura', 'Encanamento', 'Eletricidade', 'Reformas', 'Empresa de propriedade feminina', 'LGBTQ+ friendly'],
  schedule: [{ day: 'Horário de atendimento', hours: 'A partir das 7h (confirme a disponibilidade)' }],
  verifiedStats: [
    { value: 4, suffix: ',8', label: 'Nota no Google', description: 'Nota média baseada em 18 avaliações no Google.' },
    { value: 18, suffix: '', label: 'Avaliações no Google', description: 'Avaliações públicas de clientes no Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [{
  id: 'potiguar-manutencao-equipe', slug: 'potiguar-manutencao', name: 'Potiguar Manutenção',
  title: 'Pintor, encanador, eletricista e reformas', qualifications: 'Ponta Negra, Natal, Rio Grande do Norte',
  specialization: 'Manutenção e reparos residenciais', experienceYears: 0,
  bio: 'A Potiguar Manutenção atende serviços de pintura, encanamento, elétrica e reformas. Clientes relatam reparos de vazamentos, troca de hidrômetros e consertos elétricos e de portões.',
  philosophy: 'Entender o serviço, alinhar o orçamento e combinar os próximos passos com o cliente.', education: [], memberships: [],
  specialties: ['Pintura', 'Encanamento', 'Eletricidade', 'Reformas e reparos'],
  image: '/images/stock-metal-worker.jpg', warmImage: '/images/stock-metal-worker.jpg',
}];

export interface CustomerTestimonial { name: string; rating: number; quote: string; age: string; source: string }

// Positive excerpts from the customer reviews supplied for this website.
export const TESTIMONIALS: CustomerTestimonial[] = [
  { name: 'Juliana Azevedo', rating: 5, quote: 'Atendimento rápido e educado pelo WhatsApp, orçamento bem explicado, pontualidade e serviço limpo e rápido. Recomendo.', age: 'há 1 ano', source: 'Avaliação no Google' },
  { name: 'Ayla', rating: 5, quote: 'Precisava resolver com urgência um problema simples de encanamento e fui atendida logo. Profissional gentil, atencioso e prestativo.', age: 'há 3 anos', source: 'Avaliação no Google' },
  { name: 'José Peixoto', rating: 5, quote: 'Profissionalismo, competência, pontualidade, honestidade e preço justo pela qualidade do serviço.', age: 'há 4 anos', source: 'Avaliação no Google' },
  { name: 'Sandra Cassiano', rating: 5, quote: 'Fiquei satisfeita com os serviços de pintura, elétrica e encanamento. Foi uma boa experiência.', age: 'há 4 anos', source: 'Avaliação no Google' },
  { name: 'Vitor Justino', rating: 5, quote: 'Excelente profissional. Recomendei para meu tio e ele ficou muito satisfeito.', age: 'há 3 anos', source: 'Avaliação no Google' },
  { name: 'Raira Moura', rating: 5, quote: 'O serviço na minha casa não foi fácil, mas com um ótimo profissional tudo correu bem.', age: 'há 3 anos', source: 'Avaliação no Google' },
];

const imageSet = ['/images/stock-metal-worker.jpg', '/images/stock-industrial-welder.jpg', '/images/stock-welding-brazil.jpg', '/images/stock-roof-structure.jpg', '/images/stock-welding-workshop.jpg', '/images/stock-steel-beams.jpg'];
const makeFaq = (serviceName: string) => [
  { question: `Como solicitar um orçamento para ${serviceName.toLowerCase()}?`, answer: 'Entre em contato por telefone ou WhatsApp e conte o que precisa. Fotos do local feitas com segurança podem ajudar a equipe a entender o serviço.' },
  { question: 'Quais informações devo enviar?', answer: 'Informe o tipo de reparo, o endereço ou bairro, o que aconteceu e quando gostaria de agendar. A equipe pode pedir outros detalhes para preparar o orçamento.' },
  { question: 'Como funciona o agendamento?', answer: 'A disponibilidade e o horário são combinados diretamente com a equipe pelo telefone ou WhatsApp.' },
  { question: 'Como é definido o orçamento?', answer: 'O valor depende do serviço e das condições encontradas no local. Consulte a equipe para explicar sua necessidade e receber as informações do orçamento.' },
  { question: 'Onde fica a Potiguar Manutenção?', answer: 'A Potiguar Manutenção fica na R. Jorn. José Mussoline Fernandes, 123, em Ponta Negra, Natal - RN. Consulte a equipe sobre atendimento no seu endereço.' },
];

const makeService = (slug: string, name: string, tagline: string, description: string, imageIndex: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: ['Moradores que precisam de reparos e manutenção residencial', 'Pessoas que querem conversar sobre pintura, encanamento, elétrica ou reforma'],
  benefits: ['Contato direto para explicar o que precisa', 'Orçamento e agendamento combinados com a equipe', 'Serviços residenciais de manutenção e reparo'],
  indications: [{ condition: 'Serviço sob consulta', explanation: 'Conte à equipe o que precisa ser feito para verificar o escopo, a disponibilidade e os próximos passos.' }],
  procedureSteps: [
    { stepNumber: 1, title: 'Conte o que precisa', duration: 'Contato inicial', description: 'Explique o reparo ou serviço desejado pelo telefone ou WhatsApp.', clinicalDetails: 'Fotos do local feitas com segurança podem ajudar a equipe a entender a situação.' },
    { stepNumber: 2, title: 'Alinhe o orçamento', duration: 'A combinar', description: 'Converse sobre as condições do serviço e os detalhes do orçamento.', clinicalDetails: 'Valores e escopo dependem de cada necessidade e das condições encontradas.' },
    { stepNumber: 3, title: 'Combine o atendimento', duration: 'Conforme disponibilidade', description: 'A equipe combina com você a data e os próximos passos.', clinicalDetails: 'Confirme diretamente o horário e o endereço antes do atendimento.' },
  ],
  recoveryTimeline: [
    { period: 'Orçamento', expectedSensations: 'A equipe entende o serviço e as condições do local.', careProtocol: 'Explique o que aconteceu e compartilhe referências, se tiver.' },
    { period: 'Atendimento', expectedSensations: 'A duração depende do serviço e das condições encontradas.', careProtocol: 'Combine previamente o acesso ao local e os detalhes do serviço.' },
  ],
  costTransparency: { baseRange: 'Orçamento sob consulta.', factors: ['Tipo de serviço e reparo', 'Condições do local', 'Materiais e escopo necessários'], whatIsIncluded: ['Alinhamento do serviço solicitado', 'Combinação das próximas etapas'], note: 'Consulte a equipe para receber um orçamento adequado ao serviço.' },
  beforeAfterCase: { category: name, clinicalContext: 'Imagem ilustrativa de serviço de manutenção.', beforeLabel: 'Serviço residencial', afterLabel: 'Serviço residencial', beforeImage: imageSet[imageIndex % imageSet.length], afterImage: imageSet[(imageIndex + 1) % imageSet.length], timeframe: 'Imagem ilustrativa' },
  assignedDentistId: 'potiguar-manutencao-equipe', faqs: makeFaq(name),
});

export const SERVICES: ServiceDetail[] = [
  makeService('encanamento', 'Encanamento e hidráulica', 'Reparos de vazamentos e serviços hidráulicos.', 'A Potiguar Manutenção atende serviços de encanamento, incluindo reparos de vazamentos e troca de hidrômetros em banheiros.', 0),
  makeService('eletricidade', 'Eletricidade', 'Serviços e reparos elétricos residenciais.', 'Serviços elétricos residenciais, incluindo reparos e substituição de medidor elétrico externo, conforme avaliação do local.', 1),
  makeService('pintura', 'Pintura', 'Serviços de pintura residencial.', 'Serviços de pintura para a casa, com orçamento e escopo alinhados diretamente com a equipe.', 2),
  makeService('reformas', 'Reformas residenciais', 'Reformas e melhorias para a sua casa.', 'Converse com a equipe sobre reformas e serviços de manutenção residencial.', 3),
  makeService('reparos-manutencao', 'Reparos e manutenção', 'Reparos gerais para a casa.', 'A equipe atende diferentes necessidades de reparo residencial; conte o que precisa para verificar a disponibilidade.', 4),
  makeService('portoes-e-consertos', 'Portões e pequenos consertos', 'Manutenção de portões e outros reparos.', 'Entre em contato para conversar sobre reparos como manutenção de portão eletrônico e outros consertos residenciais.', 5),
];

export interface EmergencyCondition { id: string; title: string; urgency: string; symptoms: string[]; immediateAction: string[]; clinicTreatment: string }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export interface BlogPost {
  slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string;
  excerpt: string; leadImage: string; relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'como-identificar-vazamento', title: 'Como perceber sinais de vazamento em casa', category: 'Encanamento', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'potiguar-manutencao-equipe', excerpt: 'Alguns sinais visíveis ajudam a perceber quando um ponto de água precisa de atenção.', leadImage: imageSet[0], relatedServiceSlug: 'encanamento', content: { intro: 'Manchas de umidade, goteiras e alterações no consumo podem indicar um vazamento. Observe o que acontece sem abrir paredes ou mexer em instalações.', sections: [{ heading: 'Observe o local com segurança', body: 'Anote onde aparece a umidade e quando ela surge. Se puder, registre fotos sem se aproximar de fiação ou áreas molhadas.' }, { heading: 'Converse com um profissional', body: 'Compartilhe o que observou para explicar a situação e combinar os próximos passos.' }] } },
  { slug: 'quando-chamar-eletricista', title: 'Quando procurar ajuda para um reparo elétrico', category: 'Eletricidade', readTime: '3 min de leitura', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'potiguar-manutencao-equipe', excerpt: 'Sinais recorrentes na instalação elétrica merecem atenção e avaliação profissional.', leadImage: imageSet[1], relatedServiceSlug: 'eletricidade', content: { intro: 'Falhas repetidas, tomadas danificadas ou problemas no medidor precisam ser avaliados por um profissional. Não toque em fios expostos nem tente abrir o medidor.', sections: [{ heading: 'Priorize a segurança', body: 'Mantenha distância de fios e equipamentos danificados. Se houver risco imediato, desligue o circuito apenas se puder fazê-lo com segurança.' }, { heading: 'Explique o que percebeu', body: 'Ao pedir atendimento, descreva o problema, o local e quando começou para que a equipe possa orientar os próximos passos.' }] } },
];
