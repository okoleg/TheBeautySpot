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
        { name: 'Classic Full Set', price: '', duration: '90–120 min', description: 'A Classic Full Set places one extension on each isolated natural lash for clean, defined length. Your lash artist selects the curl, length, and width to complement your eye shape and desired finish. This technique is a strong choice for clients who want polished lash definition with a lighter, natural-looking result.' },
        { name: 'Volume Full Set', price: '', duration: '120–135 min', description: 'A Volume Full Set uses fans of ultra-fine extensions on individual natural lashes to create a fuller appearance. The density and styling are customized to your natural lashes, eye shape, and preferred level of glamour. Volume lashes can add noticeable softness and fullness while keeping the set balanced and wearable.' },
        { name: 'Wet Effect Full Set', price: '', duration: '120–135 min', description: 'A Wet Effect Full Set creates textured, separated lash spikes that resemble the definition of freshly wet lashes. The style makes the lash line look bright and dimensional while maintaining a modern, lightweight finish. Your artist adjusts the curl and length pattern to suit your eyes and desired intensity.' },
        { name: 'Mega Volume Full Set', price: '', duration: '150 min', description: 'A Mega Volume Full Set is designed for clients who prefer the fullest and most dramatic lash look. Very fine extensions are arranged into dense fans so the artist can build maximum volume while working carefully with the natural lashes. The extended appointment allows time to customize the shape, balance, and overall intensity.' },
        { name: 'Eyelash Tint', price: '', duration: '20 min', description: 'Eyelash tinting darkens the natural lashes from root to tip for clearer definition without extensions. It is a simple option for clients with lighter lashes or anyone wanting a low-maintenance enhancement. The tint can make the lash line appear more noticeable even when you are not wearing mascara.' },
        { name: 'Lash Lift + Tint', price: '', duration: '60 min', description: 'A Lash Lift and Tint curls the natural lashes and adds darker color for a more open, defined appearance. It enhances the lashes you already have without adding extensions or requiring daily use of a lash curler. Results commonly remain visible for several weeks as the natural lashes move through their growth cycle.' },
        { name: 'Lash Extension Removal', price: '', duration: '30 min', description: 'Professional lash extension removal dissolves the adhesive so existing extensions can be taken off carefully. The appointment includes a complimentary lash bath to cleanse the natural lashes and eye area. Avoid pulling extensions off at home, since doing so may place unnecessary stress on your natural lashes.' },
      ] },
      { title: 'Fills · 1–2 weeks', treatments: [
        { name: 'Classic Fill', price: '', duration: '75 min', description: 'This Classic Fill refreshes a set within 15 days of the previous appointment. The artist removes grown-out extensions and replaces lashes that have naturally shed to restore clean definition and balance. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Volume Fill', price: '', duration: '75 min', description: 'This Volume Fill maintains a volume set within 15 days of the previous appointment. Grown-out fans are removed where needed and new lightweight fans are added to areas affected by the natural lash cycle. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Wet Effect Fill', price: '', duration: '75 min', description: 'This Wet Effect Fill refreshes textured lash styling within 15 days of the previous appointment. The artist replaces naturally shed extensions and rebuilds the separated spikes that give the set its signature wet-look definition. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Mega Volume Fill', price: '', duration: '90 min', description: 'This Mega Volume Fill restores dense fullness within 15 days of the previous appointment. Your artist removes grown-out fans and adds new ultra-fine fans while preserving the established shape and intensity. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
      ] },
      { title: 'Fills · 3 weeks', treatments: [
        { name: 'Classic Fill', price: '', duration: '75 min', description: 'This Classic Fill is intended for appointments scheduled no more than 22 days after the previous set or fill. The artist replaces extensions lost through the natural lash cycle and removes grown-out pieces before restoring the shape. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Volume Fill', price: '', duration: '75 min', description: 'This Volume Fill is designed for maintenance within 22 days of the previous appointment. New lightweight fans restore coverage while grown-out extensions are removed as appropriate for a clean result. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Wet Effect Fill', price: '', duration: '75 min', description: 'This Wet Effect Fill maintains the set within 22 days of the previous appointment. Your artist rebuilds missing texture and defined spikes while keeping the original mapping and eye-shape balance. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Mega Volume Fill', price: '', duration: '90 min', description: 'This Mega Volume Fill restores dramatic density within 22 days of the previous appointment. Ultra-fine fans are added where natural shedding has created gaps, and grown-out extensions are removed when needed. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
      ] },
      { title: 'Fills · 4 weeks', treatments: [
        { name: 'Classic Fill', price: '', duration: '90 min', description: 'This extended Classic Fill is available within 29 days of the previous appointment. Additional time allows the artist to address natural shedding, remove grown-out extensions, and rebuild balanced classic definition. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Volume Fill', price: '', duration: '90 min', description: 'This extended Volume Fill is intended for maintenance within 29 days of the previous appointment. The artist restores areas affected by natural shedding and refines the set with new lightweight volume fans. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Wet Effect Fill', price: '', duration: '90 min', description: 'This extended Wet Effect Fill refreshes the set within 29 days of the previous appointment. Extra time allows the artist to rebuild textured spikes, restore coverage, and preserve the original wet-look pattern. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
        { name: 'Mega Volume Fill', price: '', duration: '90 min', description: 'This Mega Volume Fill is available within 29 days of the previous appointment for sets that still qualify for fill service. Your artist removes grown-out fans and restores density with ultra-fine extensions while maintaining the planned shape. Fill appointments are available for work originally applied by The Beauty Spot lash artists.' },
      ] },
    ],
  },
  {
    slug: 'skin-care',
    title: 'Skin Care',
    intro: 'Explore customized facials, advanced skin treatments, professional exfoliation, and focused add-ons with guidance from a licensed esthetician.',
    sections: [
      { title: 'Facials & skin treatments', treatments: [
        { name: '“The Beauty Spot” Facial', price: '', duration: '75 min', description: 'Our signature facial is customized after your esthetician reviews your skin, routine, and current concerns. Professional products and active ingredients are selected to cleanse, exfoliate, hydrate, and support a refreshed complexion. It is an excellent starting point for first-time clients who want a personalized introduction to skin care at our Needham studio.' },
        { name: 'The Buccal Facial', price: '', duration: '60 min', description: 'The Buccal Facial combines external facial massage with an intraoral massage technique performed inside the mouth. The experience may also include lymphatic-style movements plus décolleté, shoulder, and neck massage, followed by a customized mask or LED session. Your esthetician adapts the appointment to your comfort and skin needs for a deeply relaxing, sculpting-focused treatment.' },
        { name: 'Deep Pore Cleansing Facial', price: '', duration: '90 min', description: 'This detailed cleansing facial focuses on congested areas and the appearance of clogged pores. The appointment includes cleansing, exfoliation, careful extractions, LED, and a soothing mask selected for your skin. The longer treatment time allows the esthetician to work methodically while supporting a calmer, clearer-looking complexion.' },
        { name: 'DMK Enzyme Therapy', price: '', duration: '105 min', description: 'DMK Enzyme Therapy is a comprehensive facial designed to support the skin’s natural functions and improve its overall appearance. The appointment combines preparation, exfoliation, extractions when appropriate, the signature enzyme masque, and layers of hydration. Your esthetician will explain the process and choose supporting products based on your skin at the time of service.' },
        { name: 'Glo2Facial', price: '', duration: '60 min', description: 'Glo2Facial by Geneo combines several technologies in one customized skin care appointment. The treatment uses Oxfoliation for surface exfoliation and oxygenation, ultrasound to support product absorption, and a relaxing massage phase, with RF Pro incorporated when appropriate. Your esthetician selects the treatment approach according to your complexion and desired finish.' },
        { name: 'Microneedling Meso Therapy', price: '', duration: '45 min', description: 'Microneedling Meso Therapy uses controlled microchannels and a customized serum selected for concerns such as uneven texture, tone, fine lines, or loss of elasticity. The treatment is designed to support skin renewal and help chosen topical ingredients reach the treated surface more effectively. Your esthetician will review suitability, preparation, and aftercare before beginning.' },
        { name: 'Corrective Peels – BioRePeel, Azelaic, Vitamin C, or Yellow Peel', price: '', duration: '30 min', description: 'Corrective peel options include BioRePeel, azelaic, Vitamin C, and Yellow Peel protocols. Your esthetician selects the most appropriate option after considering your skin condition and concerns such as uneven tone, congestion, or visible signs of aging. Because peel strength and aftercare vary, the appointment includes guidance for protecting and supporting the skin after treatment.' },
        { name: 'Dermaplaning Facial', price: '', duration: '75 min', description: 'The Dermaplaning Facial pairs professional surface exfoliation with the care and hydration of a complete facial. A sterile tool is used to remove accumulated dead skin cells and fine vellus hair, helping the complexion look smoother and more even. Finishing products are chosen for your skin so you leave with a polished, refreshed appearance.' },
        { name: 'Gentleman’s Facial', price: '', duration: '60 min', description: 'The Gentleman’s Facial is tailored to men’s skin and common concerns such as dryness, congestion, uneven texture, and the effects of shaving. Cleansing, exfoliation, and finishing products are selected after a brief skin assessment. The goal is a comfortable, straightforward treatment that leaves the complexion looking clean and renewed.' },
        { name: 'Skin Care Consultation', price: '', duration: '15 min', description: 'A Skin Care Consultation gives you dedicated time with a licensed esthetician before choosing a treatment or home-care plan. We discuss your current routine, sensitivities, priorities, and the changes you would like to see. You will receive personalized guidance about suitable studio services and practical next steps for your skin.' },
      ] },
      { title: 'Add-ons', treatments: [
        { name: 'Paraffin Wax Hand Treatment Add-on', price: '', duration: '15 min', description: 'Add a warm paraffin hand treatment to a facial for extra comfort and moisture care. The hands are coated with warm wax and placed in insulated mitts while your facial continues. This simple add-on helps dry skin feel softer and makes the appointment feel especially restorative.' },
        { name: 'Dermaplaning Add-on', price: '', duration: '30 min', description: 'Dermaplaning is a professional exfoliation add-on that removes surface buildup and fine vellus hair with a sterile tool. It can help the skin look smoother and create a more even surface for finishing products or makeup. Your esthetician will confirm that dermaplaning is appropriate for your skin before adding it to the facial.' },
        { name: 'RF & Ultrasound', price: '', duration: '30 min', description: 'This add-on combines radiofrequency and ultrasound technologies as part of a focused, noninvasive skin care session. It is designed to support a firmer-looking complexion and improve the appearance of tone and visible signs of aging. Your esthetician adjusts the treatment area and approach according to your skin and service plan.' },
      ] },
    ],
  },
  {
    slug: 'makeup',
    title: 'Makeup',
    intro: 'Professional makeup appointments for weddings, commercial work, photo shoots, natural daytime looks, and evening events, customized for your features and setting.',
    sections: [{ title: 'Professional makeup services', treatments: [
      { name: 'Bridal Makeup', price: '', duration: '90 min', description: 'Bridal Makeup is designed around your wedding style, features, photography, and the finish you want to wear throughout the celebration. Your artist builds a polished, long-lasting look with careful attention to complexion, eyes, and balance. Bring inspiration images and relevant details about your dress, hair, venue, and timeline so the final look feels cohesive and personal.' },
      { name: 'Makeup for Commercials', price: '', duration: '90 min', description: 'Commercial makeup is prepared for the production brief, camera, lighting, and brand aesthetic. Your artist can create a clean, natural finish or a more defined look while keeping the result consistent and appropriate for the project. Share the call sheet, references, wardrobe information, and usage needs in advance whenever possible.' },
      { name: 'Makeup for Photo Shoots', price: '', duration: '90 min', description: 'Photo Shoot Makeup is customized for the concept, lighting, styling, and level of detail the camera will capture. The artist balances complexion, color, and definition so the makeup reads beautifully both in person and in photographs. Inspiration images and information about wardrobe or creative direction help us prepare the right finish.' },
      { name: 'Nude Day Makeup', price: '', duration: '90 min', description: 'Nude Day Makeup enhances your natural features with a fresh complexion, subtle definition, and softly balanced color. It is ideal for daytime events, professional portraits, celebrations, or anyone who prefers an understated finish. Your artist adjusts coverage, tones, and texture so the result looks polished while still feeling like you.' },
      { name: 'Evening Soft Glam Makeup', price: '', duration: '90 min', description: 'Evening Soft Glam adds refined definition and luminosity without overpowering your features. The look can include perfected skin, softly sculpted eyes, lashes, and a coordinated lip selected for your event and preferences. Your artist tailors the intensity to your outfit, lighting, and comfort level for a camera-ready evening finish.' },
    ] }],
  },
]
