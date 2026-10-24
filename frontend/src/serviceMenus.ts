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
    intro: 'Our body care menu includes individual LPG Endermologie and STYX Body Wrap treatments as well as multi-session packages for clients who prefer a consistent treatment plan. Review each service below, then use the booking page to see current availability.',
    sections: [{ title: 'Body sculpting & wraps', treatments: [
      {
        name: 'LPG Endermologie Body Sculpting Treatment', price: '', duration: '60 min',
        description: 'LPG Endermologie uses advanced mechanical stimulation to work across targeted areas of the body. The treatment is designed to support body contouring, smooth the appearance of cellulite, and improve the look of skin tone. Your specialist can tailor the session to the areas you would like to focus on and explain how a series of appointments may fit your goals.',
        note: 'Each session requires a special bodysuit (Endermowear). We never work directly on bare skin. Endermowear is reusable and available for purchase at our location.',
      },
      {
        name: 'LPG Body Packages', price: '', duration: '45 min per session',
        description: 'LPG Body Packages are available in five-, seven-, and ten-session plans for clients who want a consistent body-sculpting routine. Each 45-minute appointment uses LPG Endermologie mechanical stimulation to focus on selected areas and support smoother-looking skin and visible contouring. Your specialist can discuss the treatment schedule, target areas, and package length that best match your goals.',
        note: 'Endermowear is required for every LPG session and is available for purchase at the studio. The reusable bodysuit should be brought to each appointment in your package.',
      },
      {
        name: 'STYX Body Wrap', price: '', duration: '90 min',
        description: 'The STYX Body Wrap uses porous elastic bandages soaked in a specialized mineral solution and applied firmly to selected areas. This European body-wrapping treatment is designed to support visible contouring, help the skin look tighter, and create a smoother overall appearance. The 90-minute appointment gives your specialist time to apply the wrap carefully and provide a comfortable, unhurried experience.',
      },
      {
        name: 'STYX Body Wrap Package of 5', price: '', duration: '90 min per session',
        description: 'The STYX Body Wrap Package includes five 90-minute appointments for clients who want to make body wrapping part of an ongoing care plan. Each session uses mineral-soaked elastic bandages on selected areas to support visible contouring and smoother-looking skin. Scheduling a series makes it easier to follow a consistent routine while your specialist monitors your preferences and adjusts the focus areas when appropriate.',
      },
    ] }],
  },
  {
    slug: 'brows-lashes',
    title: 'Brows & Lashes',
    intro: 'Find your look with brow shaping, tinting, lash lifts, and extensions—from classic to mega volume.',
    sections: [
      { title: 'Brows & tinting', treatments: [
        { name: 'Eyebrow Lamination + Tint', price: '$120–$140', duration: '60 min', description: 'Eyebrow lamination smooths and redirects the brow hairs to create a fuller, fluffier, and more polished shape. A customized brow tint adds definition and helps lighter hairs appear more visible. Results generally last four to six weeks, depending on your natural hair growth and aftercare.' },
        { name: 'Brow Shaping + Henna', price: '$90', duration: '60 min', description: 'This personalized brow service combines careful eyebrow shaping with henna tint for richer color and a more defined appearance. Henna colors both the brow hairs and the skin beneath them, helping create the look of fuller brows while complementing your natural features.' },
        { name: 'Eyebrow Design', price: '$60–$80', duration: '30 min', description: 'Our customized eyebrow design appointment uses brow mapping, shaping, waxing, and tinting as appropriate for your brows. Your artist considers your natural growth pattern and facial proportions to create a clean, balanced shape that still feels like you.' },
        { name: 'Eyebrow Tint (Only)', price: '$40', duration: '30 min', description: 'A custom eyebrow tint darkens and defines the natural brow hairs without changing their shape. This standalone brow tinting service is a helpful choice for lighter, faded, or less-visible brows and can reduce the need for daily brow makeup.' },
        { name: 'Brow Wax', price: '$30', duration: '30 min', description: 'Professional brow waxing removes unwanted hair and refines the eyebrow shape for a clean, polished finish. Your brow artist follows your natural shape and discusses your preferences before waxing.' },
        { name: 'Eyelash Tint (Only)', price: '$25', duration: '25 min', description: 'Eyelash tinting darkens the natural lashes from root to tip, helping them look more defined without mascara. This standalone lash tint is ideal for clients who want a simple, low-maintenance enhancement to their natural lashes.' },
        { name: 'Upper Lip Wax', price: '$20', duration: '10 min', description: 'Upper lip waxing provides quick, precise facial hair removal and leaves the area looking smooth and clean. It can be booked on its own or alongside a brow shaping, brow tinting, or eyebrow lamination appointment.' },
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
