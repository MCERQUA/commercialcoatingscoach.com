export const site = {
  businessName: "Commercial Coatings Coach",
  tagline: "Business Coaching for Commercial Coatings & Roof Coating Contractors",
  domain: "commercialcoatingscoach.com",
  url: "https://www.commercialcoatingscoach.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Placeholder — replaced with the final research-confirmed list (ai/research/05-topical-map/topical-map.md)
export const programs: Program[] = [
  {
    slug: "sales-closing-coaching",
    name: "Sales & Closing Coaching",
    shortName: "Sales & Closing",
    summary: "Scripts, objection handling, and closing systems built specifically for commercial coatings sales calls.",
  },
  {
    slug: "estimating-bidding-systems",
    name: "Estimating & Bidding Systems",
    shortName: "Estimating & Bidding",
    summary: "Pricing models and bid systems that protect margin on commercial coatings and roof-coating jobs.",
  },
  {
    slug: "crew-operations-coaching",
    name: "Crew Operations & Production Coaching",
    shortName: "Crew Operations",
    summary: "Scheduling, crew accountability, and production systems that keep coatings jobs on time and on budget.",
  },
  {
    slug: "marketing-lead-generation",
    name: "Marketing & Lead Generation for Coatings Contractors",
    shortName: "Marketing & Leads",
    summary: "Building a predictable pipeline of commercial coatings leads instead of relying on referrals alone.",
  },
  {
    slug: "business-systems-scaling",
    name: "Business Systems & Scaling",
    shortName: "Systems & Scaling",
    summary: "The operational and financial systems that let a coatings contracting business grow past the owner.",
  },
  {
    slug: "one-on-one-coaching",
    name: "One-on-One Coaching",
    shortName: "1-on-1 Coaching",
    summary: "Weekly, private coaching for owners who want a direct hand on their numbers and decisions.",
  },
  {
    slug: "group-mastermind",
    name: "Group Coaching Mastermind",
    shortName: "Mastermind",
    summary: "A peer group of coatings contractor owners working the same growth systems together.",
  },
];
