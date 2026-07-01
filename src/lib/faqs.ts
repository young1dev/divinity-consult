// src/lib/faqs.ts

export type FAQScope =
  | "global"
  | "qa-qc"
  | "asset-integrity"
  | "rope-access"
  | "ndt-conventional"
  | "ndt-advanced"
  | "inspection-engineering";

export interface FAQ {
  scope: FAQScope;
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  // ===== GLOBAL (Homepage / All services) =====
  {
    scope: "global",
    q: "What industries does Divinity Consult serve?",
    a: "We support onshore and offshore oil and gas, power generation, marine, infrastructure, and industrial facilities requiring regulated inspection and integrity management.",
  },
  {
    scope: "global",
    q: "Are your inspection services compliant with international standards?",
    a: "Yes. All services are delivered in accordance with applicable ISO, API, ASME, and client-specific standards using certified personnel and calibrated equipment.",
  },
  {
    scope: "global",
    q: "Can rope access replace scaffolding for inspection?",
    a: "In most cases, yes. Rope access provides safe access to complex structures while significantly reducing cost, downtime, and environmental impact compared to traditional access methods.",
  },

  // ===== QA / QC =====
  {
    scope: "qa-qc",
    q: "What is included in QA/QC inspection services?",
    a: "Our QA/QC services include welding procedure qualification, vendor inspection, dimensional control, inspection test plan development, and final documentation review.",
  },
  {
    scope: "qa-qc",
    q: "Do you provide independent third-party inspection?",
    a: "Yes. We operate independently of contractors and fabricators, issuing factual and traceable inspection reports without commercial influence.",
  },

  // ===== ASSET INTEGRITY =====
  {
    scope: "asset-integrity",
    q: "What is asset integrity management?",
    a: "Asset integrity management ensures that equipment and structures perform their required function safely and effectively throughout their lifecycle, from design to decommissioning.",
  },
  {
    scope: "asset-integrity",
    q: "Do you provide Risk-Based Inspection (RBI)?",
    a: "Yes. We develop and manage RBI programs in accordance with API 580 and API 581 to optimize inspection scope, frequency, and risk reduction.",
  },

  // ===== ROPE ACCESS =====
  {
    scope: "rope-access",
    q: "Are your rope access technicians certified?",
    a: "All rope access technicians are IRATA Level 1–3 certified, medically fit, and trained for inspection, NDT, and maintenance tasks at height.",
  },
  {
    scope: "rope-access",
    q: "Is rope access safe for inspection work?",
    a: "Yes. Rope access has an excellent safety record when performed by certified teams under approved procedures and rescue plans.",
  },

  // ===== NDT CONVENTIONAL =====
  {
    scope: "ndt-conventional",
    q: "What conventional NDT methods do you offer?",
    a: "We provide UT, MT, PT, VT, RT, hardness testing, ferrite testing, and positive material identification using certified personnel.",
  },

  // ===== NDT ADVANCED =====
  {
    scope: "ndt-advanced",
    q: "When is advanced NDT required?",
    a: "Advanced NDT methods such as PAUT, TOFD, and ECA are required for critical welds, complex geometries, and applications demanding higher probability of detection and sizing accuracy.",
  },
  {
    scope: "ndt-advanced",
    q: "Do you support advanced NDT with engineering assessment?",
    a: "Yes. Advanced NDT data can be supported by fitness-for-service evaluations, remaining life calculations, and regulatory-facing technical reports.",
  },

  // ===== INSPECTION ENGINEERING =====
  {
    scope: "inspection-engineering",
    q: "What is Fitness-for-Service (FFS) assessment?",
    a: "Fitness-for-Service assessment evaluates whether equipment with flaws or damage can continue operating safely in accordance with API 579 / ASME FFS-1.",
  },
];