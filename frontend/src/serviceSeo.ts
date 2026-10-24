export type ServiceSeoContent = {
  title: string
  description: string
  intro: string
  faqs: { question: string; answer: string }[]
}

export const serviceSeo: Record<string, ServiceSeoContent> = {
  '/treatments/specials': {
    title: 'Beauty Salon Specials in Needham, MA | The Beauty Spot',
    description: 'Explore current beauty salon specials in Needham, MA, then review treatment details, appointment availability, and offer conditions online.',
    intro: 'Explore current beauty offers from The Beauty Spot in Needham, Massachusetts. Our specials may include skin care, lashes, brows, body care, makeup, and other seasonal treatments.',
    faqs: [
      { question: 'Where can I see the latest beauty specials?', answer: 'Our current offers, prices, conditions, and available appointment times are maintained on our Square booking page.' },
      { question: 'Do specials change?', answer: 'Yes. Specials may be seasonal or available for a limited time, so check the booking page for the latest information.' },
      { question: 'Can you help me choose an offer?', answer: 'Yes. Contact our Needham studio and tell us what you would like to address so our team can help you choose.' },
    ],
  },
  '/treatments/skin-care': {
    title: 'Facials & Skin Care in Needham, MA | The Beauty Spot',
    description: 'Book customized facials and advanced skin care in Needham, MA, including Glo2Facial, buccal massage, DMK Enzyme Therapy, peels, and microneedling.',
    intro: 'Our licensed estheticians provide personalized facials and advanced skin care in Needham, Massachusetts. Treatment options include Glo2Facial, buccal facial massage, DMK Enzyme Therapy, deep pore cleansing, microneedling, corrective peels, and thoughtful add-ons.',
    faqs: [
      { question: 'Which facial is best for a first visit?', answer: 'The Beauty Spot Facial is customized to your skin needs and is designed as a helpful starting point for first-time clients.' },
      { question: 'Do you offer consultations for skin concerns?', answer: 'Yes. Your esthetician will discuss your goals and current skin condition before recommending a suitable treatment.' },
      { question: 'Where are facial appointments provided?', answer: 'Skin care appointments are provided at our studio at 123 Highland Ave, Floor 3, in Needham, MA.' },
    ],
  },
  '/treatments/lashes': {
    title: 'Lash Extensions & Lash Lifts in Needham, MA | The Beauty Spot',
    description: 'Book lash extensions, lash lifts, tinting, and fills in Needham, MA. Choose classic, volume, mega-volume, or wet-effect lash styles.',
    intro: 'Our lash artists provide customized lash extensions, lash lifts, tinting, and maintenance fills in Needham, Massachusetts. Choose from classic, volume, mega-volume, and wet-effect styles tailored to your natural lashes and preferred look.',
    faqs: [
      { question: 'How often should I schedule a lash fill?', answer: 'Fill timing depends on your natural lash cycle and retention. We offer maintenance options at one to two weeks, three weeks, and four weeks.' },
      { question: 'What is the difference between classic and volume lashes?', answer: 'Classic sets apply one extension to each isolated natural lash. Volume sets use multiple ultra-fine lashes to create a fuller result.' },
      { question: 'How long does a lash lift last?', answer: 'A lash lift and tint generally lasts about six to eight weeks, although individual results vary with the natural lash cycle.' },
    ],
  },
  '/treatments/brows': {
    title: 'Brow Lamination, Tinting & Shaping in Needham, MA',
    description: 'Book brow lamination, tinting, shaping, henna, and waxing in Needham, MA for polished, personalized eyebrow definition.',
    intro: 'Visit The Beauty Spot for eyebrow lamination, brow tinting, shaping, henna, and waxing in Needham, Massachusetts. Our brow artists work with your natural growth pattern and personalize the shape, color, and level of definition to complement your features.',
    faqs: [
      { question: 'How long does eyebrow lamination last?', answer: 'Eyebrow lamination generally lasts about four to six weeks. Your individual result depends on your natural brow-hair growth cycle, skin care routine, and aftercare. Avoiding excess moisture and steam immediately after the appointment can help protect the finished shape.' },
      { question: 'What is included in a customized eyebrow design?', answer: 'An eyebrow design appointment may include brow mapping, shaping, waxing, and tinting based on your natural brows and desired result. Your artist will discuss the shape and level of definition with you before beginning the service.' },
      { question: 'Can I book eyebrow tinting without shaping?', answer: 'Yes. Eyebrow Tint is available as a standalone appointment at our Needham studio. It adds color and definition to the natural brow hairs without including waxing or reshaping.' },
      { question: 'What is the difference between regular brow tint and henna?', answer: 'Traditional brow tint primarily colors the brow hairs. Henna can add color to both the hairs and the skin beneath them, which may create a fuller, more filled-in appearance. Your brow artist can help you choose the option that fits your desired result.' },
      { question: 'Where can I book brow lamination and eyebrow shaping in Needham?', answer: 'Brow appointments are available at The Beauty Spot, 123 Highland Ave, Floor 3, Needham, MA 02494. Use the booking link on this page to review current prices and appointment availability.' },
    ],
  },
  '/treatments/body': {
    title: 'LPG Body Sculpting & Body Wraps in Needham, MA',
    description: 'Explore LPG Endermologie body sculpting and STYX body wraps in Needham, MA, with individual sessions and treatment packages available.',
    intro: 'Our Needham studio offers LPG Endermologie body sculpting and STYX body wrapping for clients seeking smoother-looking skin, visible contouring, and ongoing body care. Individual appointments and multi-session packages are available.',
    faqs: [
      { question: 'What should I wear for LPG Endermologie?', answer: 'Each LPG session requires reusable Endermowear. Treatment is not performed directly on bare skin, and the special bodysuit is available for purchase at the studio.' },
      { question: 'Are LPG treatment packages available?', answer: 'Yes. Five-, seven-, and ten-session LPG packages are available for clients planning ongoing care.' },
      { question: 'How long is a STYX Body Wrap appointment?', answer: 'A STYX Body Wrap appointment is scheduled for approximately 90 minutes.' },
    ],
  },
  '/treatments/makeup': {
    title: 'Professional Makeup Artist in Needham, MA | The Beauty Spot',
    description: 'Book professional makeup in Needham, MA for natural, evening, bridal, special-event, and photoshoot looks.',
    intro: 'Our professional makeup artist creates natural, evening, bridal, special-event, and photoshoot makeup in Needham, Massachusetts. Each look is personalized for your features, style, occasion, and desired finish.',
    faqs: [
      { question: 'What types of makeup appointments are available?', answer: 'We offer natural, evening, bridal, special-event, and photoshoot makeup looks with a personalized consultation.' },
      { question: 'Can I bring inspiration photos?', answer: 'Yes. Inspiration images are helpful when discussing the colors, finish, and level of glam you prefer.' },
      { question: 'How do I plan makeup for a special event?', answer: 'Book online or contact our studio with your event date and preferred look so we can help you plan the appointment.' },
    ],
  },
  '/treatments/hair-extensions': {
    title: 'K-Tip Hair Extensions in Needham, MA | The Beauty Spot',
    description: 'Schedule a consultation for Italian Hot Fusion K-Tip hair extensions in Needham, MA for personalized length, volume, density, and color matching.',
    intro: 'Our Massachusetts-licensed cosmetologist provides Italian Hot Fusion K-Tip hair extension installation in Needham. Every consultation considers your desired length, volume, density, natural-hair health, color, and texture for a seamless result.',
    faqs: [
      { question: 'Is extension hair included in the installation price?', answer: 'No. Hair is selected and purchased separately. The listed prices cover the installation service only.' },
      { question: 'Do I need a consultation before K-Tip extensions?', answer: 'Yes. A consultation allows us to evaluate your goals, match color and texture, and estimate the amount of hair needed.' },
      { question: 'Can K-Tip extensions add volume without significant length?', answer: 'Yes. Installation can focus on density and thickness, temple-area fullness, or a combination of length and volume.' },
    ],
  },
  '/treatments/laser': {
    title: 'Laser Hair Removal Coming Soon in Needham, MA',
    description: 'Laser hair removal is coming soon to The Beauty Spot in Needham, MA. Contact our team to ask questions and receive launch updates.',
    intro: 'Laser hair removal is coming soon to The Beauty Spot in Needham, Massachusetts. Service areas, preparation guidance, pricing, and appointment availability will be published when booking opens.',
    faqs: [
      { question: 'Is laser hair removal available now?', answer: 'Not yet. The service is being prepared, and booking will open after treatment details and availability are finalized.' },
      { question: 'How can I receive an update?', answer: 'Use the contact form to tell our team that you are interested, and follow our Instagram profile for announcements.' },
      { question: 'Where will treatments be offered?', answer: 'Appointments will be offered at The Beauty Spot, 123 Highland Ave, Floor 3, in Needham, MA.' },
    ],
  },
}
