export interface Treatment {
  name: string
  price: string
  duration: string
  description?: string
  note?: string
  packages?: { price: string; sessions: number }[]
}

export interface ServiceMenu {
  slug: string
  title: string
  intro: string
  sections: { title: string; treatments: Treatment[] }[]
}

// Treatment details, prices and durations supplied in the client's October 2026 PDFs.
export const serviceMenus: ServiceMenu[] = [
  {
    slug: 'body',
    title: 'Body Treatments',
    intro: 'Explore our body sculpting treatments and wraps, with packages for your ongoing care.',
    sections: [{ title: 'Body care', treatments: [
      {
        name: 'LPG Endermologie Body Sculpting Treatment', price: '$129', duration: '60 min',
        description: 'Advanced mechanical stimulation designed to help sculpt the body, smooth the appearance of cellulite, and improve skin tone.',
        note: 'Each session requires a special bodysuit (Endermowear). We never work directly on bare skin. Endermowear is reusable and available for purchase at our location.',
        packages: [{ price: '$590', sessions: 5 }, { price: '$850', sessions: 7 }, { price: '$1,150', sessions: 10 }],
      },
      {
        name: 'STYX Body Wrap', price: '$180', duration: '90 min',
        description: 'Porous elastic bandages soaked in a special mineral solution are wrapped firmly around areas needing contouring. Designed to visually slenderize the body and visibly tighten the skin.',
        packages: [{ price: '$840', sessions: 5 }],
      },
    ] }],
  },
  {
    slug: 'brows-lashes',
    title: 'Brows & Lashes',
    intro: 'Find your look with brow shaping, tinting, lash lifts, and extensions—from classic to mega volume.',
    sections: [
      { title: 'Brows & tinting', treatments: [
        { name: 'Eyebrow Lamination + Tint', price: '$120–$140', duration: '60 min', description: 'A perm for brow hairs, leaving them fuller, fluffier, and easier to maintain. Lasts about 4–6 weeks.' },
        { name: 'Brow Shaping + Henna', price: '$90', duration: '60 min', description: 'Brow shaping and tinting with natural henna for rich color and fuller, more defined brows. Color lasts on both the skin and hair.' },
        { name: 'Eyebrow Design', price: '$60–$80', duration: '30 min', description: 'Brow shaping using techniques including waxing and tinting with dye to enhance your features and create a neat, natural look.' },
        { name: 'Eyebrow Tint (Only)', price: '$40', duration: '30 min', description: 'Tinting of your brows.' },
        { name: 'Brow Wax', price: '$30', duration: '30 min' },
        { name: 'Eyelash Tint (Only)', price: '$25', duration: '25 min' },
        { name: 'Upper Lip Wax', price: '$20', duration: '10 min' },
      ] },
      { title: 'Lashes · full sets & treatments', treatments: [
        { name: 'Classic Full Set', price: '$170–$190', duration: '2 hr', description: 'One extension is applied to each isolated natural lash, with various lengths, widths, and curls available. About 120–150 extensions are applied to each eye.' },
        { name: 'Volume Full Set', price: '$200–$220', duration: '2 hr 10 min', description: 'Multiple ultra-fine synthetic lashes are applied to a single natural lash for a full, glamorous look with natural-looking volume.' },
        { name: 'Mega Volume Full Set', price: '$250–$270', duration: '2 hr 30 min', description: 'Our fullest, most glamorous volume set. An extended appointment and our thinnest lashes create maximum fullness.' },
        { name: 'Wet Effect Full Set', price: '$185–$205', duration: '2 hr 15 min', description: 'Extensions create the look of slightly wet, separated, and voluminous lashes for a fresh, bright appearance while maintaining a natural look.' },
        { name: 'Lash Lift + Tint', price: '$120–$140', duration: '60 min', description: 'Enhance your natural lashes with a curl and a darker, more defined tint for a lifted look without mascara. Lasts about 6–8 weeks.' },
        { name: 'Lash Extensions Removal', price: '$30', duration: '30 min', description: 'Removal of all lash extensions with a complimentary lash bath.' },
      ] },
      { title: 'Fills · 1–2 weeks', treatments: [
        { name: 'Classic', price: '$90', duration: '75 min' },
        { name: 'Volume', price: '$110', duration: '75 min' },
        { name: 'Mega Volume', price: '$130', duration: '90 min' },
        { name: 'Wet Effect', price: '$100', duration: '75 min' },
      ] },
      { title: 'Fills · 3 weeks', treatments: [
        { name: 'Classic', price: '$110', duration: '75 min' },
        { name: 'Volume', price: '$130', duration: '75 min' },
        { name: 'Mega Volume', price: '$160', duration: '90 min' },
        { name: 'Wet Effect', price: '$120', duration: '75 min' },
      ] },
      { title: 'Fills · 4 weeks', treatments: [
        { name: 'Classic', price: '$130', duration: '90 min' },
        { name: 'Volume', price: '$150', duration: '90 min' },
        { name: 'Mega Volume', price: '$190', duration: '90 min' },
        { name: 'Wet Effect', price: '$140', duration: '90 min' },
      ] },
    ],
  },
  {
    slug: 'skin-care',
    title: 'Skin Care',
    intro: 'Personalized facials, targeted treatments, and thoughtful add-ons for your skin care routine.',
    sections: [
      { title: 'Facials & skin treatments', treatments: [
        { name: '“The Beauty Spot” Facial', price: '$160', duration: '75 min', description: 'A custom facial tailored to your skin needs using top-quality products packed with active ingredients. Perfect for first-time clients.' },
        { name: 'Glo2Facial', price: '$225', duration: '60 min', description: 'The Glo2Facial by Geneo combines RF Pro technology, OXF exfoliation and oxygenation, ultrasound hydration, and a detox massage phase for a comprehensive skin care treatment.' },
        { name: 'The Buccal Facial', price: '$175–$195', duration: '60 min', description: 'Facial massage both outside and inside the mouth, with a focus on our buccal technique. Includes elements of lymphatic drainage, décolleté, shoulder and neck massage, and a custom mask or LED finish. Regular treatments are recommended to maintain results.' },
        { name: 'DMK Enzyme Therapy', price: '$195', duration: '90 min', description: 'A specialized enzyme facial for deeper skin care. Includes exfoliation, extractions, an enzyme mask, and hydration layering.' },
        { name: 'Deep Pore Cleansing Facial', price: '$160', duration: '90 min', description: 'A cleansing facial focused on unclogging pores and refreshing the skin. Includes cleansing, exfoliation, extractions, LED, and a soothing mask.' },
        { name: 'Microneedling Meso Therapy', price: '$270–$325', duration: '30 min', description: 'A customized Meso solution is selected for your skin needs, including texture, tone, wrinkles, or elasticity. Micropunctures allow the selected ingredients to penetrate deeper into the skin.', note: 'Hyaluronic acid: $270 · Exosomes: $325' },
        { name: 'Gentleman’s Facial', price: '$149', duration: '60 min', description: 'A facial designed specifically for men to renew skin tone and texture.' },
        { name: 'Corrective Peels', price: '$70–$200', duration: '30 min', description: 'BioRePeel, Azelaic, Vitamin C, and Yellow Peel options tailored to your skin needs, including concerns such as acne, hyperpigmentation, and fine lines. Products used are medical grade from Spain and Italy.' },
      ] },
      { title: 'Add-ons', treatments: [
        { name: 'RF & Ultrasound', price: '$100', duration: '30 min', description: 'Non-invasive RF and ultrasound treatments designed to tighten, firm, and lift the skin and reduce signs of aging.' },
        { name: 'Dermaplaning Add-on', price: '$50', duration: '30 min', description: 'Professional exfoliation that removes dead skin cells and fine facial hair for a smoother, more radiant complexion.' },
        { name: 'Paraffin Wax Hand Treatment Add-on', price: '$30', duration: '15 min', description: 'An add-on to any facial. Warm melted wax and warming hand mitts moisturize and soften the skin.' },
      ] },
    ],
  },
]
