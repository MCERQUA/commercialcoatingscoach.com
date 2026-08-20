import type { FAQItem } from "@/components/sections/FAQ";

export interface ProgramContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  whatsIncluded: string[];
  whoItsFor: string[];
  whyUs: string;
  faqs: FAQItem[];
}

export const programContent: Record<string, ProgramContent> = {
  "sales-closing-coaching": {
    slug: "sales-closing-coaching",
    heroImage: "/images/service-sales-coaching.jpg",
    heroImageAlt: "Sales coaching session reviewing a commercial coatings bid",
    intro: [
      "Most commercial coatings bids don't lose on price — they lose on process. A bid gets emailed over without a scope walkthrough, a warranty explanation, or a clear next step, so the buyer defaults to comparing line-item numbers instead of the value of the job. That's a sales-process gap, and it's fixable.",
      "This program builds a repeatable sales process specifically for commercial and industrial coatings jobs: how to present a bid, handle the objections that actually come up in this trade, and follow up on stalled deals without sounding desperate. The goal is a process your sales team can run — not one that only works when the owner is on the call.",
    ],
    whatsIncluded: [
      "A structured bid-presentation framework for commercial coatings and roof-coating jobs",
      "Objection-handling scripts built for this trade's actual buyer objections",
      "A defined follow-up cadence for bids that have gone quiet",
      "Discovery-call scripts that surface budget and decision-timeline earlier",
      "Weekly review of real, live deals in your pipeline",
      "A sales process documented well enough to hand off to a salesperson",
    ],
    whoItsFor: [
      "Owners who are still the only person who can close a bid",
      "Companies where win rate has stalled despite steady bid volume",
      "Anyone building a sales role and needing a process to hand it to",
    ],
    whyUs:
      "Sales cycles on commercial coatings jobs vary by contract size, but stalled deals are almost always a follow-up-system problem, not a client-still-deciding problem. We work your live pipeline in every session, not a generic sales-training curriculum.",
    faqs: [
      {
        question: "Why do commercial coatings bids lose to lower competitors?",
        answer: "Usually a sales-process gap, not a pricing gap: the bid is presented without a clear scope walkthrough, warranty explanation, or a next-step ask, so the buyer defaults to comparing line-item price instead of value.",
      },
      {
        question: "How long should a commercial coatings sales cycle take?",
        answer: "It varies by contract size, but stalled deals are almost always a follow-up-system problem — a defined follow-up cadence recovers a meaningful share of “gone quiet” bids.",
      },
    ],
  },
  "estimating-bidding-systems": {
    slug: "estimating-bidding-systems",
    heroImage: "/images/service-estimating-systems.jpg",
    heroImageAlt: "Reviewing an estimating and bidding sheet for a coatings job",
    intro: [
      "Estimating software calculates the number you tell it to. It doesn't fix an underlying scope-definition gap, a missing historical-cost record, or a margin target that isn't actually built into the formula. Contractors who switch tools without fixing the system behind the tool end up with the same margin problem in a nicer spreadsheet.",
      "This program builds the actual bidding system: how to price a commercial roof coating job by substrate condition, prep scope, coating system and mil thickness, access and staging — with a margin target built in from the start, not backed into after the job is already underway.",
    ],
    whatsIncluded: [
      "A repeatable bid-pricing framework by substrate, prep scope, and coating system",
      "Historical job-cost tracking so future bids are based on real numbers, not guesses",
      "A built-in margin target, not a margin hoped for after the job",
      "Bid-template review and standardization across your estimating team",
      "Change-order and scope-creep protection built into the bid process",
      "Review of real, recent bids you've sent — wins and losses",
    ],
    whoItsFor: [
      "Owners who still estimate every job personally",
      "Companies whose margins shrink between the bid and the finished job",
      "Anyone who's bought estimating software and still has the same margin problem",
    ],
    whyUs:
      "Pricing a commercial roof coating job correctly comes down to square footage, substrate condition and prep required, coating system and mil thickness, access and staging, and a built-in margin target — not a flat per-square-foot rule copied from a competitor. We build that system around your actual jobs, not a generic template.",
    faqs: [
      {
        question: "Why do estimating software tools fail to fix margin problems?",
        answer: "Software calculates the number you tell it to; it doesn't fix an underlying scope-definition or historical-cost-tracking gap. Systems and inputs matter more than the tool.",
      },
      {
        question: "How do you price a commercial roof coating job?",
        answer: "Based on square footage, substrate condition/prep required, coating system and mil thickness, access/staging, and a built-in margin target — not a flat per-square-foot rule of thumb copied from a competitor.",
      },
    ],
  },
  "crew-operations-coaching": {
    slug: "crew-operations-coaching",
    heroImage: "/images/service-crew-operations.jpg",
    heroImageAlt: "Commercial coatings crew on a job site",
    intro: [
      "Coatings crews fall behind schedule for a predictable reason: there's no clear daily production target tied to the bid, and no early-warning signal when a job starts slipping. By the time the owner notices, the job is already behind and margin is already gone.",
      "This program builds production planning and crew accountability systems — daily and weekly targets tied to the actual bid, a reporting rhythm the crew lead owns, and an early-warning signal that flags a slipping job before it costs the whole margin. The goal is a crew that runs on schedule without the owner checking every job site in person.",
    ],
    whatsIncluded: [
      "Daily and weekly production targets tied directly to the bid",
      "A crew-lead reporting rhythm that doesn't require owner site visits",
      "Early-warning tracking so a slipping job gets caught before it's a loss",
      "Scheduling systems for multi-crew, multi-job coordination",
      "Accountability structure that doesn't rely on micromanagement",
      "Review of real job timelines and where they're actually slipping",
    ],
    whoItsFor: [
      "Owners who personally check every job site to keep crews on track",
      "Companies with frequent schedule slippage on coatings jobs",
      "Anyone managing multiple crews without a clear reporting system",
    ],
    whyUs:
      "Crews fall behind because of a production-planning and accountability-system gap, not a work-ethic problem. We build a reporting rhythm the crew lead owns, so you get visibility without becoming the site supervisor on every job.",
    faqs: [
      {
        question: "Why do coatings crews fall behind schedule?",
        answer: "Usually a production-planning and accountability-system gap: no clear daily production target per crew, and no early-warning signal when a job is falling behind.",
      },
      {
        question: "How do you keep a coatings crew accountable without micromanaging?",
        answer: "Clear daily/weekly production targets tied to the bid, plus a simple reporting rhythm the crew lead owns — not the owner checking every job site in person.",
      },
    ],
  },
  "marketing-lead-generation": {
    slug: "marketing-lead-generation",
    heroImage: "/images/service-marketing-leadgen.jpg",
    heroImageAlt: "Marketing and lead generation planning session for a coatings contractor",
    intro: [
      "Referrals feel free, but they cap growth at the owner's existing network. Most commercial coatings contractors run entirely on word of mouth — which works, until it doesn't scale past what the owner can personally generate.",
      "This program builds a basic, consistent marketing system aimed specifically at the buyers who actually hire commercial coatings contractors: facility managers, property managers, and general contractors — not a generic “get more leads” ad campaign with no defined target buyer.",
    ],
    whatsIncluded: [
      "A defined ideal-customer profile (facility managers, property managers, GCs)",
      "A consistent, trade-specific content and outreach system",
      "A referral system that doesn't rely on the owner's personal network alone",
      "Lead-tracking so you know which sources actually produce booked jobs",
      "Review of your current marketing spend and what it's actually returning",
      "A realistic marketing budget and cadence for your company's size",
    ],
    whoItsFor: [
      "Companies relying entirely on referrals for new business",
      "Owners who've tried ad spend without a clear ideal-customer target",
      "Anyone who wants predictable lead flow instead of feast-or-famine",
    ],
    whyUs:
      "A basic, consistent marketing system — not necessarily expensive — removes the growth ceiling that referral-only businesses hit. We build the system around facility managers, property managers, and GCs specifically, because that's who actually buys commercial coatings work.",
    faqs: [
      {
        question: "Why do coatings contractors rely only on referrals?",
        answer: "Referrals feel free, but they cap growth at the owner's existing network. A basic, consistent marketing system removes that ceiling.",
      },
      {
        question: "What marketing actually works for commercial coatings contractors?",
        answer: "Consistent, trade-specific content and outreach aimed at facility managers, property managers, and general contractors — not generic “get more leads” ad spend without a defined ideal-customer target.",
      },
    ],
  },
  "business-systems-scaling": {
    slug: "business-systems-scaling",
    heroImage: "/images/hero-strategy-session.jpg",
    heroImageAlt: "Business systems and scaling strategy session",
    intro: [
      "A coatings contracting business can't grow past the owner if the owner is still the sales team, the estimator, and the production manager. Working more hours isn't a scaling strategy — it's a ceiling.",
      "This program builds the documented systems that let the business run without the owner personally touching every bid, every crew, and every client conversation: the difference between working IN the business and working ON it.",
    ],
    whatsIncluded: [
      "Documentation of your sales, estimating, and production processes",
      "A hiring and delegation plan for the roles currently held by the owner",
      "Financial systems that give real visibility into job-level profitability",
      "A 90-day plan to hand off one owner-held function at a time",
      "Org-structure planning appropriate to your company's current size",
      "Ongoing review of what's actually been delegated versus what's stuck",
    ],
    whoItsFor: [
      "Owners who feel like the business can't run without them for a week",
      "Companies ready to hire but unsure what to hand off first",
      "Anyone whose revenue has plateaued despite steady demand",
    ],
    whyUs:
      "Working in a coatings business is running jobs and chasing bids day to day; working on it is building the sales, estimating, and production systems that let the business run without the owner doing everything personally. We build that transition in a defined order, not all at once.",
    faqs: [
      {
        question: "Why can't a coatings contracting business grow past the owner?",
        answer: "Because the owner is still the sales team, the estimator, and the production manager. Growth requires documented systems the owner can hand off, not just working more hours.",
      },
      {
        question: "What's the difference between working IN a coatings business and ON it?",
        answer: "Working in it is running jobs and chasing bids day to day; working on it is building the sales, estimating, and production systems that let the business run without the owner doing everything personally.",
      },
    ],
  },
  "one-on-one-coaching": {
    slug: "one-on-one-coaching",
    heroImage: "/images/about-founder.jpg",
    heroImageAlt: "One-on-one business coaching session",
    intro: [
      "Some owners want a direct hand on their specific numbers and decisions every week, not a peer group or a self-paced course. One-on-one coaching is weekly, private, and built entirely around your business — your bids, your crew schedule, your marketing spend, your actual bottleneck.",
      "Every session works from your real numbers: close rate, average job size, crew production, and marketing return. Nothing generic, nothing theoretical.",
    ],
    whatsIncluded: [
      "Weekly private coaching sessions built around your business specifically",
      "Direct review of your live bids, sales calls, and crew schedules",
      "A single coach who knows your business context week to week",
      "Direct access between sessions for time-sensitive decisions",
      "A tracked set of numbers reviewed on a set cadence",
      "Flexibility to shift focus between sales, estimating, ops, or marketing as needed",
    ],
    whoItsFor: [
      "Owners who want a direct, private coaching relationship rather than a group setting",
      "Companies facing a specific, urgent bottleneck",
      "Anyone who's tried generic business coaching and found it too broad for this trade",
    ],
    whyUs:
      "This coaching is built by someone with former-contractor experience in this exact trade, backed by Contractors Choice Agency's 20+ years in the space — not a general small-business coach applying the same framework to every industry.",
    faqs: [
      {
        question: "What's the difference between 1-on-1 coaching and the group mastermind?",
        answer: "1-on-1 coaching is weekly, private, and focused on your specific numbers and decisions; the mastermind is a peer group of other coatings contractor owners working the same systems together.",
      },
      {
        question: "How much does contractor business coaching cost?",
        answer: "Investment varies by program and is discussed on the free strategy call once we understand where your business is today — we don't publish a blanket number because the right program depends on company size and goals.",
      },
    ],
  },
  "group-mastermind": {
    slug: "group-mastermind",
    heroImage: "/images/hero-coach-consulting.jpg",
    heroImageAlt: "Group coaching mastermind session for coatings contractor owners",
    intro: [
      "The mastermind is a peer group of other commercial coatings and roof-coating contractor owners working the same sales, estimating, and operations systems together — not a generic small-business networking group.",
      "Every member is solving the same category of problems (bid follow-up, crew scheduling, referral dependence), which means the group's discussions stay specific to this trade instead of drifting into advice that doesn't apply to coatings contracting.",
    ],
    whatsIncluded: [
      "Regular group coaching sessions with other coatings contractor owners",
      "Shared frameworks for sales, estimating, and crew operations",
      "Peer accountability on the numbers each member is working to improve",
      "Access to the same trade-specific scripts and systems used in 1-on-1 coaching",
      "A community of owners solving the same category of problems",
    ],
    whoItsFor: [
      "Owners who want peer accountability alongside coaching",
      "Companies at a similar stage to other coatings contractors in the group",
      "Anyone who learns well from seeing how other owners solve the same problems",
    ],
    whyUs:
      "Every framework taught in the mastermind is the same trade-specific system used in 1-on-1 coaching, built for commercial and industrial coatings businesses specifically — not generic contractor coaching stretched across every trade.",
    faqs: [
      {
        question: "Do you work with contractors outside commercial coatings?",
        answer: "The programs are built specifically around commercial and industrial coatings/roof-coating businesses, so the frameworks, scripts, and benchmarks are trade-specific rather than generic contractor coaching.",
      },
      {
        question: "How is this different from generic business coaching?",
        answer: "The coaching is built by someone with former-contractor experience in this exact trade, backed by Contractors Choice Agency's 20+ years in the space — not a general small-business coach applying the same framework to every industry.",
      },
    ],
  },
};
