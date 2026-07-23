export const COMPANY = {
  name: 'Martinov Home Solutions',
  phone: '2342552320',
  phoneDisplay: '234-255-2320',
  license: 'License #46724',
  address: '100 Cochran Rd, Cuyahoga Falls, OH 44223',
  hoursWeekday: 'Mon - Fri: 7:00am - 5:00pm',
  hoursSaturday: 'Sat: 8:00am - 12:00pm',
  emergency: 'Emergency Services Available',
  email: 'info@martinovhomesolutions.com',
  serviceAreas: [
    'Akron',
    'Aurora',
    'Bath',
    'Boston Heights',
    'Brecksville',
    'Brunswick',
    'Canton',
    'Copley',
    'Cuyahoga Falls',
    'Fairlawn',
    'Green',
    'Hinckley',
    'Hudson',
    'Kent',
    'Macedonia',
    'Medina',
    'Munroe Falls',
    'Peninsula',
    'Portage Lakes',
    'Ravenna',
    'Richfield',
    'Strongsville',
    'Stow',
    'Tallmadge',
    'Twinsburg',
    'Wadsworth',
  ],
};

export const WHATSAPP_NUMBER = '12342552320'; // 1 (US country code) + 2342552320

export type WhatsAppIntent =
  | 'new-system'
  | 'repair'
  | 'replace'
  | 'energy-bill'
  | 'healthier-home'
  | 'maintenance'
  | 'product-knowledge'
  | 'emergency'
  | 'financing'
  | 'general';

const intentMessages: Record<WhatsAppIntent, string> = {
  'new-system':
    "Hi Martinov Home Solutions, I'd like an Instant Estimate for a new HVAC system.",
  repair:
    "Hi Martinov Home Solutions, my HVAC system needs repair. Can you help?",
  replace:
    "Hi Martinov Home Solutions, I'm considering replacing my current HVAC system.",
  'energy-bill':
    "Hi Martinov Home Solutions, I have concerns about my energy bills and would like advice.",
  'healthier-home':
    "Hi Martinov Home Solutions, I'm interested in solutions for a healthier home environment.",
  maintenance:
    "Hi Martinov Home Solutions, I'd like to schedule a maintenance visit.",
  'product-knowledge':
    "Hi Martinov Home Solutions, I'd like more product information.",
  emergency:
    "Hi Martinov Home Solutions, I have an HVAC EMERGENCY and need immediate assistance.",
  financing:
    "Hi Martinov Home Solutions, I'd like to learn about financing options.",
  general: 'Hi Martinov Home Solutions, I have a question.',
};

export function buildWhatsAppUrl(
  intent: WhatsAppIntent = 'general',
  customMessage?: string
): string {
  const message = customMessage ?? intentMessages[intent];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildTelUrl(): string {
  return `tel:+1${COMPANY.phone}`;
}
