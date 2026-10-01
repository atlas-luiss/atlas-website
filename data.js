// ============================================================================
//  ATLAS Lab — SITE CONTENT
//  Edit ONLY this file to update the website. No need to touch the layout.
//  Save, then reload the page to see your changes.
// ============================================================================

export const DATA = {
  // ---- Header -------------------------------------------------------------
  labName: "ATLAS Lab",
  tagline: "Adaptive and Physical AI Agents",
  university: "LUISS Guido Carli University",
  address: "Viale Romania, 32, Rome, Italy",
  // Grey line under the hero title
  location: "LUISS Guido Carli University, Rome, Italy",
  // Appended to the footer copyright line
  footerLine: "LUISS, Viale Romania, 32, 00197 Rome, Italy",

  // Hero layout: "centered" (logo above the title), "typographic" (no hero logo),
  // or "side" (logo next to the title)
  heroLayout: "centered",

  // Logos (files live in the assets/ folder next to index.html)
  labLogo: "assets/atlas_logo.png",
  universityLogo: "assets/luiss.png",
  universityUrl: "https://www.luiss.it/it",

  // Links
  githubUrl: "https://github.com/atlas-luiss",
  linkedinUrl: "https://www.linkedin.com/company/atlas-luiss",
  scholarUrl: "https://scholar.google.com/citations?user=rQLINtQAAAAJ&hl=en",
  contactEmail: "vlomonaco@luiss.it",

  // ---- Featured figure ----------------------------------------------------
  heroImage: "assets/atlas_lab_concept.png",
  heroCaption: "From monolithic models to adaptive, safe, embodied agents: ATLAS studies AI systems that perceive, reason and act in the physical world, continually adapting to environments that change.",

  // ---- Vision (one or more paragraphs; simple HTML allowed) ---------------
  vision: [
    "The <a href=\"https://www.luiss.it/en/research/applied-research/ai4society-research-center/atlas-lab-agenti-intelligenti-adattivi-e-fisici\" target=\"_blank\" rel=\"noopener\"><strong>ATLAS Lab</strong></a> studies <strong>adaptive</strong> and <strong>physical</strong> AI agents: embodied systems — robots and situated agents — that perceive, reason and act in the real world. Directed by <a href=\"https://vincenzolomonaco.com/\" target=\"_blank\" rel=\"noopener\">Vincenzo Lomonaco</a>, the lab is part of the <a href=\"https://www.luiss.it/en/research/applied-research/ai4society-research-center\" target=\"_blank\" rel=\"noopener\">AI4Society Research Center</a> at <a href=\"https://www.luiss.it/it\" target=\"_blank\" rel=\"noopener\">LUISS Guido Carli University</a>. Our goal is to close the gap between today's powerful but static foundation models and the demands of agents that must operate reliably in open, dynamic and unpredictable environments.",
    "Our research rests on three pillars. <strong>Adaptivity</strong>: agents learn across their entire lifetime, integrating new experience without forgetting what came before. <strong>Embodiment</strong>: intelligence emerges from the interplay of body, perception and action, not from a model isolated from the world. <strong>Safety</strong>: as agents learn and act in the physical world, their behavior must remain aligned, predictable and controllable, so that people can trust them in shared spaces.",
    "By bringing together continual learning, robotics and foundation models, the ATLAS Lab aims to establish the theoretical and methodological groundwork for a new generation of physical agents — able to grow with experience, work safely alongside people, and adapt to the world as it actually is. The group is supported by several grants, including the <em>FIS2 – Starting Grant</em> (the Italian equivalent of an ERC Starting Grant) with a budget of over €1.3M.",
  ],

  // Highlighted note below the vision (set to null to hide)
  hint: {
    text: "Have a look at our GitHub organization to explore the open-source side of our research!",
    linkLabel: "GitHub organization",
    linkUrl: "https://github.com/atlas-luiss",
  },

  // ---- Recent articles ----------------------------------------------------
  articles: [
    { title: "Continual Model Routing in Evolving Model Hubs", authors: "Bell et al.", venue: "ICML 2026", url: "https://arxiv.org/abs/2605.28577" },
    { title: "Modular Memory is the Key to Continual Learning Agents", authors: "Dorovatas et al.", venue: "ICML 2026", url: "https://arxiv.org/abs/2603.01761" },
    { title: "Book your room in the Turing Hotel! A symmetric and distributed Turing Test with multiple AIs and humans", authors: "Maio et al.", venue: "Preprint 2026", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rQLINtQAAAAJ&sortby=pubdate&citation_for_view=rQLINtQAAAAJ:geHnlv5EZngC" },
    { title: "The Future of Continual Learning in the Era of Foundation Models: Three Key Directions", authors: "Bell et al.", venue: "Trustworthy and Collaborative Artificial Intelligence Workshop, HHAI 2025", url: "https://arxiv.org/abs/2506.03320" },
    { title: "A Compositional Paradigm for Foundation Models: Towards Smarter Robotic Agents", authors: "Quarantiello et al.", venue: "I-RIM 3D Conference Workshop 2025", url: "https://arxiv.org/abs/2510.18608" },
  ],

  // ---- Collaborations -----------------------------------------------------
  collaborations: [
    {
      pi: "Egidio Falotico",
      lab: "BRAIR Lab",
      institution: "The BioRobotics Institute, Sant'Anna School of Advanced Studies, Pisa",
      note: "Main collaboration on embodied intelligence, soft robotics and adaptive control for physical agents.",
      url: "https://www.santannapisa.it/it/istituto/biorobotica/brair-lab",
    },
    {
      pi: "Antonio Carta",
      lab: "Pervasive AI Lab (PAI)",
      institution: "Department of Computer Science, University of Pisa",
      note: "Main collaboration on deep continual learning and learning from sequential data.",
      url: "https://pages.di.unipi.it/carta/",
    },
  ],

  // ---- Members ------------------------------------------------------------
  members: [
    { name: "Vincenzo Lomonaco", role: "Principal Investigator", url: "https://vincenzolomonaco.com/" },
    { name: "Daniele Malitesta", role: "Post-Doc", url: "https://scholar.google.com/citations?user=Aeg9i_IAAAAJ&hl=en" },
    { name: "Luigi Quarantiello", role: "Post-Doc", url: "https://scholar.google.com/citations?user=TM5H03oAAAAJ&hl=it" },
    { name: "Jack Charles Bell", role: "PhD Student", url: "https://scholar.google.it/citations?hl=it&user=MMukC9kAAAAJ" },
    { name: "Gerlando Gramaglia", role: "PhD Student", url: "https://scholar.google.com/citations?user=SrB4KocAAAAJ&hl=it" },
    { name: "Giacomo Carfì", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=ATn6PxgAAAAJ" },
    { name: "Irene Testa", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=uDsnUzgAAAAJ" },
    { name: "Ehsan Tavan", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=oY-ufO0AAAAJ" },
    { name: "Mauro Madeddu", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=rBVtq8kAAAAJ" },
    { name: "Lanpei Li", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=PnkoFQYAAAAJ" },
    { name: "Gabriele De Ieso", role: "PhD Student", url: "https://www.linkedin.com/in/gabriele-de-ieso-0321b431b/" },
    { name: "Pierre Averty", role: "PhD Student", url: "https://www.linkedin.com/in/pierre-averty-996ab5195/" },
    { name: "Xiaoyan Li", role: "Research Assistant", url: "" },
    { name: "Eric Nuertey Coleman", role: "Research Assistant", url: "https://scholar.google.com/citations?hl=it&user=326UIJYAAAAJ" },
  ],

  // ---- Mentees ------------------------------------------------------------
  mentees: [
    { name: "Gennaro Francesco Landi", role: "MSc Computer Science @ ETH Zurich", url: "https://landigf.github.io/" },
    { name: "Federico Gerardi", role: "MSc Computer Science @ Sapienza University of Rome", url: "https://www.federicogerardi.ovh/" },
    { name: "Anthony Tricarico", role: "MSc Data Science @ University of Trento", url: "" },
    { name: "Giovanni Zacchini", role: "MSc Statistics @ University of Bologna", url: "https://www.linkedin.com/in/giovannizecchini/" },
    { name: "Andres Claudio Lazzari", role: "MSc Computer Science @ University of Pisa", url: "https://www.linkedin.com/in/andres-lazzari/" },
    { name: "Giulio Rossi", role: "MSc Computer Science @ University of Pisa", url: "https://www.linkedin.com/in/giulio-rossi-3699412b4" },
  ],

  // ---- Previous members ---------------------------------------------------
  previousMembers: [
    { name: "Elia Piccoli", role: "PhD Student", url: "https://scholar.google.com/citations?user=-TKxJbro74UC&hl=en" },
    { name: "Malio Li", role: "PhD Student", url: "https://scholar.google.com/citations?hl=it&user=l1GF6dsAAAAJ" },
  ],
};
