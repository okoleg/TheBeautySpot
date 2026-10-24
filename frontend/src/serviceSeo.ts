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
    description: 'Explore customized facials and skin care in Needham, MA, including Glo2Facial, buccal massage, DMK Enzyme Therapy, dermaplaning, peels, and microneedling.',
    intro: 'Our licensed estheticians provide personalized facials and advanced skin care in Needham, Massachusetts. The menu includes Glo2Facial, buccal facial massage, DMK Enzyme Therapy, deep pore cleansing, microneedling, corrective peels, dermaplaning, a facial for men, and focused add-ons. A dedicated consultation is available when you would like professional guidance before selecting a treatment.',
    faqs: [
      { question: 'Which facial is best for a first visit?', answer: 'The Beauty Spot Facial is customized to your current skin and makes a helpful starting point for first-time clients. You can also schedule a 15-minute Skin Care Consultation if you would like guidance before choosing a full treatment.' },
      { question: 'What is the difference between a Dermaplaning Facial and the add-on?', answer: 'The Dermaplaning Facial is a complete 75-minute facial that includes professional dermaplaning and customized finishing care. The 30-minute Dermaplaning Add-on can be included with another eligible facial after your esthetician confirms that it suits your skin.' },
      { question: 'How is a corrective peel selected?', answer: 'Your esthetician reviews your skin condition, sensitivities, goals, and recent treatments before recommending BioRePeel, azelaic, Vitamin C, Yellow Peel, or another suitable plan. Preparation and aftercare instructions depend on the selected peel.' },
      { question: 'Can I book a skin care consultation without a facial?', answer: 'Yes. The standalone 15-minute consultation is intended for discussing your routine, priorities, sensitivities, and suitable professional treatments before committing to a facial.' },
      { question: 'Where are facial appointments provided?', answer: 'Skin care appointments are provided at our studio at 123 Highland Ave, Floor 3, in Needham, MA.' },
    ],
  },
  '/treatments/lashes': {
    title: 'Lash Extensions & Lash Lifts in Needham, MA | The Beauty Spot',
    description: 'Explore lash extensions, fills, lash lifts, tinting, and removal in Needham, MA, with classic, volume, mega-volume, and wet-effect styling.',
    intro: 'Our lash artists provide customized lash extensions, maintenance fills, lash lift and tint, eyelash tinting, and professional extension removal in Needham, Massachusetts. Choose Classic, Volume, Wet Effect, or Mega Volume styling, with fill appointments organized by the number of weeks since your previous visit.',
    faqs: [
      { question: 'How often should I schedule a lash fill?', answer: 'Fill timing depends on your natural lash cycle and retention. Our menu includes maintenance appointments for one to two weeks, three weeks, and four weeks after the prior service.' },
      { question: 'Can you fill lash extensions applied by another salon?', answer: 'Our listed fill appointments are reserved for extensions originally applied by The Beauty Spot lash artists. Please schedule professional removal and a new full set if you currently wear work from another salon.' },
      { question: 'What is the difference between classic and volume lashes?', answer: 'Classic sets apply one extension to each isolated natural lash. Volume sets use multiple ultra-fine lashes to create a fuller result.' },
      { question: 'How long does a lash lift last?', answer: 'A lash lift and tint generally lasts about six to eight weeks, although individual results vary with the natural lash cycle.' },
      { question: 'Should I remove lash extensions at home?', answer: 'No. Pulling or picking at extensions can place unnecessary stress on the natural lashes. A professional removal appointment uses adhesive remover and includes a complimentary lash bath.' },
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
    description: 'Explore LPG Endermologie body sculpting and STYX body wraps in Needham, MA, including individual treatments and multi-session body care packages.',
    intro: 'Our Needham studio offers LPG Endermologie body sculpting and STYX body wrapping for clients interested in smoother-looking skin, visible contouring, and consistent body care. Choose an individual appointment or explore multi-session LPG and STYX packages based on your preferred treatment plan.',
    faqs: [
      { question: 'What should I wear for an LPG Endermologie appointment?', answer: 'Every LPG Endermologie session requires reusable Endermowear because treatment is not performed directly on bare skin. The special bodysuit is available for purchase at our Needham studio and should be brought back for each appointment.' },
      { question: 'Which LPG Body Packages are available?', answer: 'Square currently offers LPG Body Packages with five, seven, or ten sessions. Package appointments are scheduled for approximately 45 minutes each, and your specialist can help you choose a plan based on your preferred areas and routine.' },
      { question: 'What happens during a STYX Body Wrap?', answer: 'Porous elastic bandages soaked in a specialized mineral solution are applied firmly to selected areas. The treatment is designed to support visible contouring and help the skin look smoother and tighter.' },
      { question: 'How long is a STYX Body Wrap appointment?', answer: 'An individual STYX Body Wrap and each appointment in the five-session package are scheduled for approximately 90 minutes.' },
      { question: 'Where are body sculpting treatments offered?', answer: 'LPG Endermologie and STYX Body Wrap appointments are offered at The Beauty Spot, 123 Highland Ave, Floor 3, Needham, MA 02494. Use the booking links on this page to see current appointment availability.' },
    ],
  },
  '/treatments/makeup': {
    title: 'Professional Makeup Artist in Needham, MA | The Beauty Spot',
    description: 'Explore professional bridal, commercial, photoshoot, nude day, and evening soft glam makeup appointments in Needham, MA.',
    intro: 'Our professional makeup artist creates personalized bridal, commercial, photo shoot, nude daytime, and evening soft glam makeup in Needham, Massachusetts. Each 90-minute appointment considers your features, personal style, wardrobe, event setting, lighting, and desired finish.',
    faqs: [
      { question: 'What types of makeup appointments are available?', answer: 'The current menu includes Bridal Makeup, Makeup for Commercials, Makeup for Photo Shoots, Nude Day Makeup, and Evening Soft Glam Makeup. Each appointment is scheduled for approximately 90 minutes.' },
      { question: 'Can I bring inspiration photos?', answer: 'Yes. Inspiration images help communicate the colors, complexion finish, eye style, and level of definition you prefer. Information about your outfit, hair, venue, or production concept is also useful.' },
      { question: 'What is the difference between Nude Day Makeup and Evening Soft Glam?', answer: 'Nude Day Makeup focuses on fresh skin and subtle definition for an understated daytime finish. Evening Soft Glam adds more luminosity and refined definition while keeping the overall look balanced and wearable.' },
      { question: 'How should I prepare for a makeup appointment?', answer: 'Arrive with a clean face unless your artist gives you different instructions. Share relevant sensitivities and bring reference photos plus details about your clothing, hair, lighting, or event schedule.' },
      { question: 'Where are professional makeup appointments offered?', answer: 'Makeup appointments are available at The Beauty Spot, 123 Highland Ave, Floor 3, Needham, MA 02494. Use the booking link on this page to review current availability.' },
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
