import React, { useState } from "react";
import {
  Building2,
  Droplets,
  Trash2,
  Sprout,
  GraduationCap,
  Search,
  TrendingUp,
  ArrowRight,
  Layers,
  CheckCircle2,
  Clock,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type ActionStatus = "Active" | "In Progress" | "Planned" | "Verified";

export interface ClimateAction {
  id: number;
  category: "infrastructure" | "water" | "waste" | "green" | "education";
  categoryLabel: string;
  status: ActionStatus;
  title: string;
  description: string;
  impactMetric: string;
  sopSteps: string[];
}

const actionsData: ClimateAction[] = [
  {
    id: 1,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Verified",
    title: "High-Albedo Cool Roof Coating",
    description: "Solar-reflective elastomeric coating applied on concrete roofs to deflect solar heat gain.",
    impactMetric: "Surface solar reflectance testing; estimated passive cooling potential up to 3.5°C",
    sopSteps: [
      "Surface power-washing of concrete barrack slabs",
      "Primer coat application sealing micro-cracks",
      "Two coats of SRI >104 elastomeric solar reflective coating",
    ],
  },
  {
    id: 2,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Active",
    title: "Bamboo & Reed Window Screens",
    description: "Woven reed shades placed outside windows to block radiant solar gain.",
    impactMetric: "Deflects direct solar radiant glare along exterior barrack openings",
    sopSteps: [
      "Sourcing locally woven wild reed lattices",
      "Exterior bracket installation allowing air circulation",
      "Seasonal upkeep and maintenance by custodial participants",
    ],
  },
  {
    id: 3,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "In Progress",
    title: "Passive Cross-Ventilation Louvers",
    description: "Clerestory air release vents designed to facilitate convective escape of hot air.",
    impactMetric: "Designed to enhance night-time air change rate in sleeping barracks",
    sopSteps: [
      "Masonry perforation along upper ceiling perimeters",
      "Vandal-safe security mesh insertion",
      "Thermo-siphonic exhaust calibration across sleeping wards",
    ],
  },
  {
    id: 4,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "In Progress",
    title: "Thermal Veranda Breezeways",
    description: "Covered breezeways shielding interior living cells from direct exterior wall baking.",
    impactMetric: "Provides microclimate buffer shading along exterior barrack walkways",
    sopSteps: [
      "Lightweight awning anchoring along outer verandas",
      "Creates a secondary microclimate thermal buffer",
      "Protects transit walkways from direct solar exposure",
    ],
  },
  {
    id: 5,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Solar Inverter Backups",
    description: "Rooftop solar packs keeping ceiling fans running during summer power outages.",
    impactMetric: "Proposed Target: Backup circulation power during peak summer grid blackouts",
    sopSteps: [
      "5kW rooftop solar bank installation over dispensary and ward cores",
      "Battery bank synchronization for nighttime circulation",
      "Custodial electrical technician maintenance training",
    ],
  },
  {
    id: 6,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Permeable Courtyard Pavements",
    description: "Hollow concrete pavers allowing rain percolation while curbing radiant ground heat.",
    impactMetric: "Proposed Target: Direct rainwater percolation into subsoil and radiant heat curb",
    sopSteps: [
      "Excavation of non-porous asphalt surfaces in assembly yard",
      "Installation of hollow-core grass pavers with sand sub-base",
      "Direct stormwater percolation into local subsoil strata",
    ],
  },
  {
    id: 7,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "In Progress",
    title: "Rooftop Rainwater Catchment",
    description: "Barrack roof drains routed through sand-gravel filter chambers into sumps.",
    impactMetric: "Proposed Capacity: Rainwater catchment network designed to harvest monsoon runoff",
    sopSteps: [
      "PVC gutter attachment along barrack perimeter rooflines",
      "Multi-stage sand, gravel, and charcoal first-flush chambers",
      "Gravity feed into existing storage cisterns for non-potable use",
    ],
  },
  {
    id: 8,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "In Progress",
    title: "Greywater Reed-Bed Biofilters",
    description: "Root-zone biofilter treating laundry and ablution runoff for garden reuse.",
    impactMetric:
      "Proposed Target: Explore the potential to treat and reuse up to 8,000 litres of greywater per day for garden irrigation, subject to technical assessment and implementation.",
    sopSteps: [
      "Diverting washing block wastewater through grease baffles",
      "Subsurface wetland trench planted with Typha and Canna indica reeds",
      "Treated effluent channeled to permaculture and kitchen garden beds",
    ],
  },
  {
    id: 9,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Active",
    title: "Push Aerators & Flow Restrictors",
    description: "Tamper-resistant brass aerator caps regulating flow rates across washblocks.",
    impactMetric: "Operational: Regulates tap flow rates to curb daily water wastage",
    sopSteps: [
      "Fitting self-closing mechanical timed valves in ablution rows",
      "Replacing unrestricted open spigots with tamper-resistant low-flow nozzles",
      "Regular water-marshal leak inspection rounds",
    ],
  },
  {
    id: 10,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "In Progress",
    title: "Subsurface Drip Irrigation",
    description: "Root-zone drip lines for kitchen gardens operating without fossil pumps.",
    impactMetric: "Water Efficiency Target: Gravity-fed drip laterals minimizing evaporative loss",
    sopSteps: [
      "Connecting elevated water cisterns to low-pressure drip laterals",
      "Emitters placed directly at crop roots minimizing evaporation",
      "Garden supervisors monitor pressure flow valves daily",
    ],
  },
  {
    id: 11,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Planned",
    title: "Deep Aquifer Recharge Pits",
    description: "Direct percolation shafts directing surplus storm runoff past clay strata.",
    impactMetric: "Proposed Target: Deep aquifer groundwater replenishment in water-stressed region",
    sopSteps: [
      "Drilling recharge bores with slotted casing pipes",
      "Graded boulder and gravel filtration pits catching runoff overflow",
      "Recharges Mewat's stressed deep groundwater aquifers",
    ],
  },
  {
    id: 12,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Verified",
    title: "Tank Thermal Covers & Leak Audits",
    description: "XLPE thermal sheet protective insulation on water tanks and regular leak audit routines.",
    impactMetric: "Verified Implementation: Protective XLPE covers installed on overhead tanks",
    sopSteps: [
      "Installation of XLPE reflective insulation sheets on overhead water tanks",
      "Mechanical weighted float gauges installed with visual markers",
      "Shift-wise leak logbooks and immediate washer replacements",
    ],
  },
  {
    id: 13,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active",
    title: "Kitchen Source Segregation",
    description: "Stainless mess bins separating organic vegetable scraps and dry packaging materials.",
    impactMetric: "Operational: Daily source segregation of organic kitchen peelings initiated",
    sopSteps: [
      "Green stainless bins for vegetable peels and meal scraps",
      "Blue bins for dry packaging cardboard and plastic containers",
      "Direct daily transfer from kitchen mess to designated processing area",
    ],
  },
  {
    id: 14,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Aerobic Vermicomposting Beds",
    description: "Raised brick pits with earthworms under development to process organic kitchen waste.",
    impactMetric: "Proposed Model: On-site vermicomposting beds under development to process kitchen waste",
    sopSteps: [
      "Layering dried leaves, pre-composted vegetable waste, and cow dung",
      "Inoculation with Eisenia fetida red wiggler worm colonies",
      "Moisture monitoring and bi-weekly turning by trained cohorts",
    ],
  },
  {
    id: 15,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active",
    title: "Zero Open-Burning Protocol",
    description: "Directive prohibiting open burning of leaf litter and trash within jail grounds.",
    impactMetric: "Operational: Eliminates toxic smoke plumes; channels foliage to composting",
    sopSteps: [
      "Strict administrative directive prohibiting open leaf/trash fires",
      "Leaf litter channeled into compost carbon bulk supply",
      "Respiratory health protection for wardens and inmate dormitories",
    ],
  },
  {
    id: 16,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Dry Recyclables Baling",
    description: "Sorting clean cardboard and packaging materials for organized recycling collection.",
    impactMetric:
      "Proposed Target: Develop a recyclable waste recovery system with the potential to generate revenue for the Inmate Welfare Fund. Estimated monthly revenue will be reported after implementation and financial verification.",
    sopSteps: [
      "Inmates sort and flatten cardboard cartons and paper supplies",
      "Manual lever baler compresses sorted plastics and clean paper",
      "Authorized recyclers collect bales with audited welfare deposits",
    ],
  },
  {
    id: 17,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Bio-Enzyme Floor Cleaners",
    description: "Fermenting citrus fruit peels with jaggery and water to produce natural acidic sanitation cleaner.",
    impactMetric: "Pilot testing of natural citrus enzyme cleaner to reduce reliance on chemical phenyl",
    sopSteps: [
      "Fermentation barrels populated with citrus scraps, jaggery, and water",
      "90-day anaerobic fermentation produces natural acidic enzyme cleaner",
      "Safe, fragrant, non-toxic cleaner for stone barrack floors",
    ],
  },
  {
    id: 18,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active",
    title: "Hazardous & Medical Segregation",
    description: "Puncture-proof yellow disposal containers for dispensary clinical sharps and blades.",
    impactMetric: "Operational: Standard biomedical waste protocol compliance inside dispensary",
    sopSteps: [
      "Yellow puncture-proof containers in dispensary for syringes & blades",
      "Autoclave protocol before authorized hospital pickup",
      "Zero medical sharps contamination in regular prison waste streams",
    ],
  },
  {
    id: 19,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Kitchen Gardening Initiative (Pak Shala)",
    description: "Raised garden plots prepared at Pak Shala demonstration compound to cultivate fresh seasonal vegetables.",
    impactMetric: "Implementation Prepared: Permission secured; seeds and essential gardening tools arranged",
    sopSteps: [
      "Raised planting beds enriched with compost and organic amendments",
      "Seasonal crop planning: bottle gourd, spinach, fenugreek, and brinjal",
      "Planned cultivation engaging incarcerated agricultural trainees",
    ],
  },
  {
    id: 20,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Drought-Hardy Native Tree Canopy",
    description: "Planting native trees like Neem, Peepal, and Jamun along perimeter boundaries to create shade.",
    impactMetric: "Ongoing Plantation: Native tree saplings planted along perimeter grounds",
    sopSteps: [
      "Planting fast-growing native hardy trees along outer wall borders",
      "Deep basin mulching with shredded prison paper and leaf waste",
      "Each sapling adopted and nurtured by designated participants",
    ],
  },
  {
    id: 21,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "High-Nutrition Moringa Groves",
    description: "Fast-growing drumstick trees providing bioavailable iron and vitamins for barrack diets.",
    impactMetric: "Ongoing: Moringa trees planted to supplement nutrition in custodial mess",
    sopSteps: [
      "High-density moringa planting in central courtyard perimeter",
      "Weekly leaf harvesting incorporated into standard dal rations",
      "Addresses dietary micronutrient and iron needs",
    ],
  },
  {
    id: 22,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Anti-Mosquito Botanical Belts",
    description: "Border plantings of Tulsi, Citronella, and Lemongrass along drains to naturally deter vectors.",
    impactMetric: "Ongoing: Aromatic herb borders planted to naturally deter mosquitoes",
    sopSteps: [
      "Aromatic herb borders planted along ablution perimeter trenches",
      "Natural essential oils repel mosquitoes and vector insects",
      "Fresh tulsi leaves harvested for daily herbal tea rations",
    ],
  },
  {
    id: 23,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Heirloom Seed-Bank & Nursery",
    description: "Preserving and drying open-pollinated vegetable seeds for self-sufficient ongoing propagation.",
    impactMetric: "Preparation: Nursery bed setup and seed preservation for seasonal planting",
    sopSteps: [
      "Selecting hardiest heirloom parent plants each harvest cycle",
      "Seed desiccation, labelling, and airtight glass jar storage",
      "Surplus native seeds preserved for successive planting cycles",
    ],
  },
  {
    id: 24,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Botanical Pest Brews",
    description: "Neem-based botanical sprays tested as non-toxic alternatives to chemical pesticides.",
    impactMetric: "Tested: Organic neem-based sprays replacing hazardous chemical pesticides",
    sopSteps: [
      "Boiling neem foliage with garlic, green chilies, and cow urine",
      "Fermented liquid strained and diluted for foliar garden spraying",
      "Zero toxic poison exposure risk for custodial participants",
    ],
  },
  {
    id: 25,
    category: "education",
    categoryLabel: "Education",
    status: "Verified",
    title: "Staff-Inmate Climate Classes",
    description: "Climate awareness sessions conducted to promote environmental understanding among prison stakeholders.",
    impactMetric: "165 Certified Civic Climate Stewards – Individuals trained or certified through climate awareness and stewardship programmes",
    sopSteps: [
      "Classroom modules covering heat defense, water audits, and soil science",
      "Joint warden-inmate discussion panels building mutual trust",
      "Bi-lingual pictorial guides designed for varied literacy backgrounds",
    ],
  },
  {
    id: 26,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "Agricultural Training Cohort",
    description: "Engaging incarcerated individuals in hands-on agricultural and kitchen gardening activities.",
    impactMetric: "120+ Agricultural Trainees – Individuals engaged in agricultural and kitchen gardening activities",
    sopSteps: [
      "Cohort formation for hands-on garden bed preparation",
      "Daily checklist audits inspecting running taps and soil moisture",
      "Weekly debrief with prison coordinators on garden progress",
    ],
  },
  {
    id: 27,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "Peer Eco-Ambassador Cohort",
    description: "Designated inmate monitors participating in daily water-saving and waste segregation checks.",
    impactMetric: "Inmate peer ambassadors participating in daily water and hygiene checks",
    sopSteps: [
      "Appointment of barrack climate monitors and eco-captains",
      "Daily checklist audits inspecting dripping spigots and light switches",
      "Coordination with custodial officers on maintenance needs",
    ],
  },
  {
    id: 28,
    category: "education",
    categoryLabel: "Education",
    status: "Planned",
    title: "Vocational Farm Certificates",
    description: "Vocational training curriculum being developed for organic farming and nursery management.",
    impactMetric: "Proposed Model: Vocational curriculum under development for sustainable post-release livelihoods",
    sopSteps: [
      "Vocational coursework structure in organic agriculture and compost management",
      "Hands-on skill testing covering irrigation, composting, and nursery care",
      "Linkage pathways with agroecological nurseries for community reentry",
    ],
  },
  {
    id: 29,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "Ecotherapy Mindfulness",
    description: "Outdoor green space engagement to support mental wellbeing and reduce confinement stress.",
    impactMetric: "Active Engagement: Daily morning garden work supporting mental health & stress relief",
    sopSteps: [
      "Morning grounding and soil work in prepared garden compounds",
      "Feedback collection on wellbeing and anxiety reduction",
      "Promotes calming connection with nature in custodial settings",
    ],
  },
  {
    id: 30,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "Correctional Climate Resilience SOPs",
    description: "Synthesizing Nuh Jail field records into standard operating procedures for institutional prison resilience.",
    impactMetric: "Documentation: Compiling field data and standard operating manuals for prison directorates",
    sopSteps: [
      "Compiling heat mitigation records, water management, and garden layouts",
      "Drafting open-access SOP handbook for state correctional departments",
      "Engagement with national correctional administration stakeholders",
    ],
  },
];

export function ClimateActions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSopAction, setActiveSopAction] = useState<ClimateAction | null>(null);

  const filteredActions = actionsData.filter((action) => {
    const matchesCategory =
      selectedCategory === "all" || action.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || action.status === selectedStatus;
    const matchesSearch =
      searchQuery.trim() === "" ||
      action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      action.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      action.impactMetric.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusBadgeStyle = (status: ActionStatus) => {
    switch (status) {
      case "Verified":
        return "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]";
      case "Active":
        return "bg-[#EBF4E8] text-[#12560E] border-[#CDE5C2]";
      case "In Progress":
        return "bg-[#FEF9C3] text-[#854D0E] border-[#FDE047]";
      case "Planned":
        return "bg-[#F4F3ED] text-[#5A6255] border-[#E2DDD2]";
    }
  };

  return (
    <section id="climate-actions" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Implementation Status Audit */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              Standardized Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              30 Climate Actions Audit
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Standardized interventions transforming correctional compounds into climate-resilient restorative spaces. All 30 actions are audited by verified implementation status.
            </p>
          </div>

          {/* Audit Status Card */}
          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs min-w-[300px]">
            <div className="flex items-center justify-between text-xs font-bold text-[#1A1C19] mb-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-[#12560E]" /> Implementation Status Audit
              </span>
              <span className="text-[11px] font-mono text-[#5A6255]">30 Actions</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-[#E2DDD2]">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#BAE6FD]">
                <span className="text-[#0369A1] font-bold">Verified:</span>
                <span className="font-extrabold text-[#1A1C19]">3</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#CDE5C2]">
                <span className="text-[#12560E] font-bold">Active:</span>
                <span className="font-extrabold text-[#1A1C19]">5</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#FDE047]">
                <span className="text-[#854D0E] font-bold">In Progress:</span>
                <span className="font-extrabold text-[#1A1C19]">18</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#E2DDD2]">
                <span className="text-[#5A6255] font-bold">Planned:</span>
                <span className="font-extrabold text-[#1A1C19]">4</span>
              </div>
            </div>
            <p className="text-[10px] text-[#7A8275] mt-2 text-center">
              Distinguishes operational achievements from ongoing and planned interventions.
            </p>
          </div>
        </div>

        {/* Filters Row: Categories & Status */}
        <div className="space-y-3 mb-6">
          {/* Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8275] shrink-0 mr-1">
              Domain:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "all"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              All 30 Actions
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("infrastructure")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "infrastructure"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              Infrastructure (6)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("water")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "water"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              Water (6)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("waste")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "waste"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              Waste (6)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("green")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "green"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              Green Practices (6)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("education")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === "education"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              Education (6)
            </button>
          </div>

          {/* Status Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8275] shrink-0 mr-1">
              Status:
            </span>
            <button
              type="button"
              onClick={() => setSelectedStatus("all")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedStatus === "all"
                  ? "bg-[#1A1C19] text-white"
                  : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
              }`}
            >
              All Statuses
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("Verified")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedStatus === "Verified"
                  ? "bg-[#0369A1] text-white"
                  : "bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]"
              }`}
            >
              Verified (3)
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("Active")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedStatus === "Active"
                  ? "bg-[#12560E] text-white"
                  : "bg-[#EBF4E8] text-[#12560E] border border-[#CDE5C2]"
              }`}
            >
              Active (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("In Progress")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedStatus === "In Progress"
                  ? "bg-[#854D0E] text-white"
                  : "bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047]"
              }`}
            >
              In Progress (18)
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("Planned")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedStatus === "Planned"
                  ? "bg-[#5A6255] text-white"
                  : "bg-[#F4F3ED] text-[#5A6255] border border-[#E2DDD2]"
              }`}
            >
              Planned (4)
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 w-full max-w-sm">
          <div className="relative">
            <Search className="size-4 text-[#7A8275] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search actions or metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E2DDD2] bg-[#FAF9F5] text-xs text-[#1A1C19] placeholder-[#7A8275] focus:outline-none focus:ring-1 focus:ring-[#12560E]"
            />
          </div>
        </div>

        {/* 30 Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredActions.map((action) => (
            <div
              key={action.id}
              className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] hover:border-[#A8CCA0] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    #{String(action.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadgeStyle(
                      action.status
                    )}`}
                  >
                    {action.status}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#1A1C19] mb-1">
                  {action.title}
                </h3>

                <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                  {action.description}
                </p>
              </div>

              <div>
                <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2DDD2] mb-3 text-[11px] font-semibold text-[#12560E] flex items-start gap-1.5">
                  <TrendingUp className="size-3.5 text-[#52A638] shrink-0 mt-0.5" />
                  <span className="leading-snug">{action.impactMetric}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSopAction(action)}
                  className="w-full min-h-[36px] py-1.5 px-3 rounded-xl bg-[#FAF9F5] hover:bg-[#EBF4E8] text-xs font-bold text-[#12560E] flex items-center justify-center gap-1 transition-colors border border-[#E2DDD2] touch-manipulation"
                >
                  <span>View Field SOP</span>
                  <ArrowRight className="size-3 shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOP Dialog Modal */}
      {activeSopAction && (
        <Dialog open={!!activeSopAction} onOpenChange={() => setActiveSopAction(null)}>
          <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md border-[#E2DDD2] bg-[#FAF9F5] p-4 sm:p-5 rounded-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                  Action #{String(activeSopAction.id).padStart(2, "0")}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadgeStyle(
                    activeSopAction.status
                  )}`}
                >
                  {activeSopAction.status}
                </span>
              </div>
              <DialogTitle className="text-base font-extrabold text-[#1A1C19]">
                {activeSopAction.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#5A6255]">
                {activeSopAction.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 my-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#E2DDD2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8275] block mb-1">
                  Reported Metric / Target:
                </span>
                <p className="font-semibold text-[#12560E]">
                  {activeSopAction.impactMetric}
                </p>
              </div>

              <div>
                <span className="font-extrabold text-[#1A1C19] block mb-2">
                  Standard Operating Procedure (SOP):
                </span>
                <ol className="space-y-2 list-decimal list-inside text-[#3A4036]">
                  {activeSopAction.sopSteps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveSopAction(null)}
              className="w-full text-xs font-bold border-[#E2DDD2]"
            >
              Close SOP
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
