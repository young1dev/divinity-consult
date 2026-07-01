export type ServiceSlug =
  | "qa-qc"
  | "asset-integrity"
  | "rope-access"
  | "ndt-conventional"
  | "ndt-advanced"
  | "inspection-engineering";

export interface Service {
  slug: ServiceSlug;
  n: string;
  t: string;
  short: string;
  long: string;
  capabilities: string[];
  industries: string[];
  image?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "qa-qc",
    n: "01",
    t: "QA / QC",
    short:
      "Independent quality assurance and quality control for fabrication, construction and maintenance activities.",
    long: "Independent QA/QC services supporting fabrication, construction and turnaround projects. Our inspectors ensure compliance with project specifications, codes and client requirements through systematic inspection, hold-point witnessing and documentation control.",
    capabilities: [
      "Welding procedure and welder qualification",
      "Vendor and workshop inspection",
      "Dimensional, visual and workmanship control",
      "Inspection and Test Plan (ITP) development and witnessing",
      "Manufacturing record book and final documentation review",
    ],
    industries: ["Oil & Gas", "Petrochemical", "Power", "Renewables"],
    image: "../images/services/ndt-advanced.jpg",
  },
  {
    slug: "asset-integrity",
    n: "02",
    t: "Asset Integrity",
    short: "Risk-based asset integrity management for static and rotating equipment.",
    long: "Asset integrity management services aligned with API and international standards. We support operators with risk-based inspection planning, corrosion management and integrity assessments to ensure safe, compliant and reliable operation throughout the asset lifecycle.",
    capabilities: [
      "Risk-Based Inspection (RBI) programs",
      "Integrity Operating Windows (IOW)",
      "Corrosion management frameworks",
      "Anomaly assessment and disposition",
      "Turnaround and campaign inspection planning",
    ],
    industries: ["Refining", "Upstream Oil & Gas", "LNG", "Chemicals"],
    image: "../images/services/ndt-advanced.jpg",
  },
  {
    slug: "rope-access",
    n: "03",
    t: "Rope Access",
    short: "IRATA-certified rope access for inspection, NDT and maintenance at height.",
    long: "IRATA-compliant rope access services providing safe and efficient access for inspection, non-destructive testing and maintenance. Rope access reduces cost, downtime and logistical complexity compared to traditional access methods.",
    capabilities: [
      "Close visual inspection at height",
      "Non-destructive testing on rope",
      "Mechanical and bolting works",
      "Coating inspection and remediation",
      "Confined space access and rescue support",
    ],
    industries: ["Offshore", "Wind", "Civil Structures", "Telecom"],
    image: "../images/services/ndt-advanced.jpg",
  },
  {
    slug: "ndt-conventional",
    n: "04",
    t: "NDT — Conventional",
    short: "Conventional non-destructive testing for defect detection and condition assessment.",
    long: "Conventional NDT services delivered by PCN and ASNT certified personnel. Testing is performed on-site or in workshop environments to applicable codes and client specifications.",
    capabilities: [
      "Ultrasonic Testing (UT) — thickness and flaw detection",
      "Magnetic Particle Testing (MT)",
      "Penetrant Testing (PT)",
      "Radiographic Testing (RT)",
      "Visual Testing (VT) and basic material verification",
    ],
    industries: ["Fabrication", "Pipelines", "Pressure Equipment", "Structural"],
    image: "../images/services/ndt-advanced.jpg",
  },
  {
    slug: "ndt-advanced",
    n: "05",
    t: "NDT — Advanced",
    short: "Advanced inspection techniques for complex degradation and critical components.",
    long: "Advanced non-destructive testing methods used to detect, size and characterise defects beyond the capability of conventional techniques. Suitable for high-risk assets, complex geometries and regulatory-critical inspections.",
    capabilities: [
      "Phased Array Ultrasonic Testing (PAUT)",
      "Time-of-Flight Diffraction (TOFD)",
      "Eddy Current Array (ECA)",
      "Long-Range Ultrasonic Testing (LRUT)",
      "Advanced corrosion mapping and automated UT",
    ],
    industries: ["Refining", "Petrochemical", "Power Generation", "Manufacturing"],
    image: "../images/services/ndt-advanced.jpg",
  },
  {
    slug: "inspection-engineering",
    n: "06",
    t: "Inspection Engineering",
    short: "Engineering analysis that converts inspection data into operational decisions.",
    long: "Inspection engineering services supporting integrity management and regulatory compliance. We translate inspection and NDT data into fitness-for-service assessments, remaining life calculations and practical repair or mitigation strategies.",
    capabilities: [
      "API 579 Fitness-for-Service assessments",
      "Remaining life and re-rating calculations",
      "Repair and alteration specifications",
      "Corrosion circuitisation and damage mechanism reviews",
      "Technical support for regulators and insurers",
    ],
    industries: ["Refining", "Upstream", "Chemicals", "Power"],
    image: "../images/services/ndt-advanced.jpg",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
