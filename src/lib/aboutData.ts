// src/lib/aboutData.ts

export interface CoreValue {
  n: string;
  t: string;
  d: string;
}

export interface TimelineEvent {
  y: string;
  t: string;
}

export const VALUES: CoreValue[] = [
  {
    n: "01",
    t: "Independent",
    d: "We operate with complete technical independence. Our inspection findings, reports, and recommendations are issued solely in the interest of asset integrity, safety, and regulatory compliance — free from contractor or commercial influence.",
  },
  {
    n: "02",
    t: "Certified",
    d: "All inspections are performed by personnel holding recognised international certifications, including PCN, ASNT, IRATA, and FROSIO. Qualifications are current, traceable, and aligned with project-specific requirements.",
  },
  {
    n: "03",
    t: "Operationally Responsive",
    d: "We support planned campaigns, shutdowns, and unplanned inspections with rapid mobilisation. Rope access and inspection teams are deployed efficiently across onshore and offshore environments to minimise operational downtime.",
  },
  {
    n: "04",
    t: "Engineering-Led",
    d: "Inspection data is translated into actionable insight. Our services extend beyond detection to include integrity assessment, fitness-for-service evaluation, and practical engineering recommendations.",
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    y: "2014",
    t: "Divinity Consult established by rope access technicians and NDT inspectors to deliver independent inspection services.",
  },
  {
    y: "2017",
    t: "Approved IRATA member company and awarded initial offshore inspection framework contracts.",
  },
  {
    y: "2019",
    t: "Inspection engineering capability expanded to include risk-based inspection (RBI) and fitness-for-service assessments in accordance with API and international standards.",
  },
  {
    y: "2022",
    t: "Advanced NDT services introduced, including phased array ultrasonic testing (PAUT), time-of-flight diffraction (TOFD), and engineering critical assessments (ECA).",
  },
  {
    y: "2025",
    t: "Inspection and integrity services delivered across multiple regions with a multidisciplinary team of certified inspectors, engineers, and rope access technicians.",
  },
];