/**
 * 21-Day Inner Healing Journal - Centralized Configuration
 * 
 * Edit prices, payment URLs, contact details, and images here.
 */

import hardcoverImg from '../assets/images/journal_hardcover_mockup_1791030004309.jpg';
import digitalImg from '../assets/images/journal_digital_mockup_1791030016232.jpg';
import founderImg from '../assets/images/founder_portrait_mainak_1791030026773.jpg';
import ambientImg from '../assets/images/mindful_peace_ambient_1791030037621.jpg';

export interface ProductFormat {
  id: 'hardcopy' | 'pdf' | 'app';
  title: string;
  price: number;
  currency: string;
  badge?: string;
  summary: string;
  features: string[];
  ctaLabel: string;
  paymentUrl: string; // Replace with your Razorpay / Stripe / Instamojo / Gateway link
  whatsappMessage: string;
  deliveryNote: string;
}

export const JOURNAL_CONFIG = {
  brand: {
    name: 'PATH TO INNER PEACE',
    tagline: 'Transform Your Mind. Elevate Your Life.',
    websiteUrl: 'https://www.pathtoinnerpeace.in',
    displayWebsite: 'www.pathtoinnerpeace.in',
    email: 'connect@pathtoinnerpeace.in',
    whatsappNumber: '+91 9163670300',
    whatsappCleanNumber: '919163670300',
  },
  
  product: {
    title: '21-Day Inner Healing Journal',
    supportingLine: 'A Guided 21-Day Journey to Understand Your Thoughts, Emotions, Patterns & Inner Self.',
    subLabel: '21-DAY GUIDED INNER HEALING JOURNEY',
    coreMessageLead: 'Not just a journal.',
    coreMessageSub: 'A guided 21-day process to understand yourself more deeply.',
  },

  creator: {
    name: 'Mainak Chatterjee',
    title: 'Author • Mind Mastery Coach • Quantum Alchemist',
    role: 'Founder, Path to Inner Peace',
    quote: 'Inner transformation begins when we become willing to observe ourselves honestly. The 21-Day Inner Healing Journal was created as a structured space for reflection, awareness and conscious personal growth — helping you move from simply reacting to your inner experiences toward understanding them.',
  },

  assets: {
    hardcover: hardcoverImg,
    digital: digitalImg,
    founder: founderImg,
    ambient: ambientImg,
  },

  formats: [
    {
      id: 'hardcopy' as const,
      title: 'HARD COPY JOURNAL',
      price: 199,
      currency: '₹',
      summary: 'A physical journal delivered to you.',
      features: [
        '21-day guided journal',
        'Physical writing experience',
        'Structured daily prompts',
        'Reflection-based inner work',
      ],
      ctaLabel: 'GET THE HARD COPY — ₹199',
      paymentUrl: 'https://www.pathtoinnerpeace.in/checkout?format=hardcopy',
      whatsappMessage: 'Hello, I want to order the Hard Copy of the 21-Day Inner Healing Journal (₹199). Please share delivery details.',
      deliveryNote: 'Delivered to your address across India (physical edition).',
    },
    {
      id: 'pdf' as const,
      title: 'INTERACTIVE PDF',
      price: 299,
      currency: '₹',
      badge: 'MOST POPULAR',
      summary: 'A digital version designed for interactive use.',
      features: [
        '21-day guided journey',
        'Interactive digital format',
        'Use on phone, tablet or computer',
        'Instant digital access',
      ],
      ctaLabel: 'GET INTERACTIVE PDF — ₹299',
      paymentUrl: 'https://www.pathtoinnerpeace.in/checkout?format=pdf',
      whatsappMessage: 'Hello, I want to get the Interactive PDF of the 21-Day Inner Healing Journal (₹299). Please provide instant download access.',
      deliveryNote: 'Instant digital download link sent to your email & WhatsApp.',
    },
    {
      id: 'app' as const,
      title: 'MOBILE APP',
      price: 399,
      currency: '₹',
      summary: 'Your guided inner-work journey on your phone.',
      features: [
        '21-day guided experience',
        'Mobile-first experience',
        'Easy daily access',
        'Continue your journey from anywhere',
      ],
      ctaLabel: 'GET THE APP — ₹399',
      paymentUrl: 'https://www.pathtoinnerpeace.in/checkout?format=app',
      whatsappMessage: 'Hello, I want to access the Mobile App edition of the 21-Day Inner Healing Journal (₹399). Please share app access.',
      deliveryNote: 'Direct app activation code & onboarding instructions.',
    },
  ] satisfies ProductFormat[],

  problems: [
    {
      number: '01',
      title: 'Overthinking',
      description: 'The same situations keep replaying in your mind.',
    },
    {
      number: '02',
      title: 'Emotional Confusion',
      description: 'You feel something strongly but struggle to understand exactly what it is.',
    },
    {
      number: '03',
      title: 'Self-Doubt',
      description: 'Old beliefs and inner criticism quietly influence your decisions.',
    },
    {
      number: '04',
      title: 'Lack of Clarity',
      description: 'You keep taking care of everything else while losing touch with yourself.',
    },
    {
      number: '05',
      title: 'Difficulty Starting',
      description: "You know you want change, but don't know where to begin.",
    },
  ],

  pillars: [
    {
      title: 'AWARENESS',
      description: 'Observe your thoughts, emotions and patterns.',
    },
    {
      title: 'REFLECTION',
      description: 'Understand what may be influencing your reactions and choices.',
    },
    {
      title: 'TRANSFORMATION',
      description: 'Build a more conscious relationship with yourself.',
    },
  ],

  phases: [
    {
      phaseNumber: 'PHASE 01',
      title: 'AWARENESS',
      days: 'Days 1–7',
      focusItems: [
        'Thought awareness',
        'Emotional awareness',
        'Identifying recurring patterns',
        'Understanding triggers',
        'Self-observation',
        'Inner child awareness',
        'Building conscious attention',
      ],
    },
    {
      phaseNumber: 'PHASE 02',
      title: 'HEALING & REFRAMING',
      days: 'Days 8–14',
      focusItems: [
        'Limiting beliefs',
        'Emotional patterns',
        'Self-talk',
        'Forgiveness',
        'Self-acceptance',
        'Releasing unhelpful patterns',
        'Inner healing practices',
      ],
    },
    {
      phaseNumber: 'PHASE 03',
      title: 'REINVENTION',
      days: 'Days 15–21',
      focusItems: [
        'Personal values',
        'Identity',
        'Purpose',
        'Future self',
        'New perspectives',
        'Conscious habits',
        'Creating your next chapter',
      ],
    },
  ],

  daysList: [
    { day: '01', title: 'Thought Awareness', phase: 'Phase 01', brief: 'Observing the stream of daily mental chatter without judgment.' },
    { day: '02', title: 'Emotional Awareness', phase: 'Phase 01', brief: 'Naming and validating feelings as internal messengers.' },
    { day: '03', title: 'Limiting Beliefs', phase: 'Phase 01', brief: 'Uncovering the invisible rules you inherited or absorbed.' },
    { day: '04', title: 'Inner Child', phase: 'Phase 01', brief: 'Reconnecting with your earlier self and unmet emotional needs.' },
    { day: '05', title: 'Self-Love', phase: 'Phase 01', brief: 'Replacing self-punishment with gentle presence and respect.' },
    { day: '06', title: 'Forgiveness', phase: 'Phase 01', brief: 'Releasing the emotional weight of holding onto past hurt.' },
    { day: '07', title: 'Identity', phase: 'Phase 01', brief: 'Examining who you are beneath external roles and expectations.' },
    { day: '08', title: 'Triggers & Patterns', phase: 'Phase 02', brief: 'Mapping the moments that cause sudden emotional reactions.' },
    { day: '09', title: 'Self-Talk', phase: 'Phase 02', brief: 'Listening to your internal voice and shifting toward conscious care.' },
    { day: '10', title: 'Emotional Patterns', phase: 'Phase 02', brief: 'Recognizing cyclic loops in your relationships and stress responses.' },
    { day: '11', title: 'Personal Values', phase: 'Phase 02', brief: 'Clarifying the non-negotiable principles that bring you alignment.' },
    { day: '12', title: 'Purpose & Direction', phase: 'Phase 02', brief: 'Connecting day-to-day actions with a meaningful inner compass.' },
    { day: '13', title: 'Future Self', phase: 'Phase 02', brief: 'Stepping into the mindset and calm maturity of who you are becoming.' },
    { day: '14', title: 'Conscious Habits', phase: 'Phase 02', brief: 'Designing small daily rituals that protect your mental peace.' },
    { day: '15', title: 'Relationship With Yourself', phase: 'Phase 03', brief: 'Becoming your own most trusted and grounding ally.' },
    { day: '16', title: 'Boundaries', phase: 'Phase 03', brief: 'Learning to say no to what drains you so you can say yes to peace.' },
    { day: '17', title: 'Gratitude & Perspective', phase: 'Phase 03', brief: 'Cultivating authentic appreciation grounded in reality.' },
    { day: '18', title: 'Reframing', phase: 'Phase 03', brief: 'Viewing challenges through the lens of growth and inner strength.' },
    { day: '19', title: 'Personal Growth', phase: 'Phase 03', brief: 'Acknowledging the subtle and profound progress made.' },
    { day: '20', title: 'Integration', phase: 'Phase 03', brief: 'Weaving the insights of the past 20 days into your daily life.' },
    { day: '21', title: 'Your Next Chapter', phase: 'Phase 03', brief: 'Stepping forward with quiet confidence and renewed clarity.' },
  ],
};
