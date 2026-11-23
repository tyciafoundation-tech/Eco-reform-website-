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
    status: "Planned",
    title: "High-Albedo Cool Roof Coating",
    description: "Solar-reflective elastomeric paint proposed for concrete barrack roofs to bounce thermal radiation.",
    impactMetric: "Proposed Intervention: High-SRI reflective coating to curb surface heat gain",
    sopSteps: [
      "Surface power-washing of concrete barrack slabs",
      "Primer coat application sealing micro-cracks",
      "Two coats of elastomeric solar reflective coating planned for high-heat wards",
    ],
  },
  {
    id: 2,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Bamboo & Reed Window Screens",
    description: "External woven reed shades proposed for barrack windows to deflect radiant direct solar glare.",
    impactMetric: "Planned Activity: External shading to deflect radiant solar gain",
    sopSteps: [
      "Sourcing locally woven wild reed lattices",
      "Exterior bracket installation allowing air circulation",
      "Seasonal replacement protocol for custodial living blocks",
    ],
  },
  {
    id: 3,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Passive Cross-Ventilation Louvers",
    description: "Clerestory ventilation vents proposed to facilitate convective escape of hot air near ceilings.",
    impactMetric: "Proposed Target: Enhance natural convective air circulation across barracks",
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
    status: "Planned",
    title: "Thermal Veranda Breezeways",
    description: "Covered breezeways proposed to shield interior living cells from direct exterior wall heat.",
    impactMetric: "Proposed Intervention: Microclimate buffer shading along outer corridors",
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
    description: "Rooftop solar backup proposed to keep ceiling fans running during summer power outages.",
    impactMetric: "Proposed Target: Emergency power backup for critical ventilation during outages",
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
    description: "Hollow concrete pavers proposed to allow rain percolation while curbing radiant ground heat.",
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
    status: "Planned",
    title: "Rooftop Rainwater Catchment",
    description: "Proposed routing of barrack roof drains through sand-gravel filters into sumps for non-potable reuse.",
    impactMetric: "Proposed Target: Harvest and store monsoon runoff for compound reuse",
    sopSteps: [
      "PVC gutter attachment along barrack perimeter rooflines",
      "Multi-stage sand, gravel, and charcoal first-flush chambers",
      "Gravity feed into storage cisterns for non-potable custodial use",
    ],
  },
  {
    id: 8,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Planned",
    title: "Greywater Reed-Bed Biofilters",
    description: "Root-zone biofilter proposed for treating laundry and ablution runoff for garden reuse.",
    impactMetric:
      "Proposed Target: Explore the potential to treat and reuse up to 8,000 litres of greywater per day for garden irrigation, subject to technical assessment and implementation.",
    sopSteps: [
      "Diverting washing block wastewater through grease baffles",
      "Subsurface wetland trench planted with Typha and Canna indica reeds",
      "Treated effluent channeled to kitchen garden beds",
    ],
  },
  {
    id: 9,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Planned",
    title: "Push Aerators & Flow Restrictors",
    description: "Tamper-resistant aerators and regulated self-closing valves proposed to curb tap water wastage.",
    impactMetric: "Proposed Intervention: Regulated flow nozzles to curb custodial water wastage",
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
    status: "Planned",
    title: "Subsurface Drip Irrigation",
    description: "Low-pressure gravity drip laterals proposed to deliver water directly to plant root zones.",
    impactMetric: "Proposed Target: Root-zone drip lines to minimize evaporative water loss",
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
    description: "Direct percolation shafts proposed to channel surplus stormwater into local groundwater strata.",
    impactMetric: "Proposed Target: Deep groundwater replenishment for regional subsoil strata",
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
    title: "Water Tank Thermal Protective Covers",
    description:
      "Researched and developed practical XLPE-based protective covers for water tanks. Inmates were trained and actively participated in fabricating and installing covers on approximately 180 water tanks, with observed water temperature reduction.",
    impactMetric: "Verified Field Intervention: ~180 water tanks covered with XLPE sheets by inmates",
    sopSteps: [
      "Practical XLPE cover design and fabrication methodology researched and developed",
      "Inmates trained in preparing, measuring, and assembling protective covers",
      "Active inmate participation in installing protective covers across ~180 water tanks",
      "Observed water temperature reduction during high-heat periods",
    ],
  },
  {
    id: 13,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Planned",
    title: "Kitchen Source Segregation",
    description: "Dedicated color-coded mess bins proposed for separating vegetable peelings, food scraps, and dry packaging.",
    impactMetric: "Proposed Intervention: Source segregation of kitchen vegetable scraps and packaging",
    sopSteps: [
      "Green stainless bins for vegetable peels and meal scraps",
      "Blue bins for dry packaging cardboard and plastic containers",
      "Daily transfer protocol from mess kitchen to designated processing yard",
    ],
  },
  {
    id: 14,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Aerobic Vermicomposting Beds",
    description:
      "Composting infrastructure has been established on site with earthworms brought, vermicomposting beds set up, and a compost pit constructed. Regular kitchen-waste processing and daily compost production are not yet operational and remain under development.",
    impactMetric: "Infrastructure Established: Earthworms brought, beds & pit set up; regular daily processing not yet operational",
    sopSteps: [
      "Compost pit excavated and constructed on site",
      "Vermicomposting beds established with earthworms introduced",
      "Kitchen-waste segregation protocols under development",
      "Regular daily kitchen-waste processing and compost production pending operational rollout",
    ],
  },
  {
    id: 15,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Planned",
    title: "Zero Open-Burning Protocol",
    description: "Proposed administrative directive to eliminate open burning of leaf litter and waste within grounds.",
    impactMetric: "Proposed Intervention: Channel leaf litter into compost rather than open burning",
    sopSteps: [
      "Administrative directive prohibiting open leaf/trash fires",
      "Leaf litter channeled into compost carbon bulk supply",
      "Respiratory health protection for wardens and inmate dormitories",
    ],
  },
  {
    id: 16,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Planned",
    title: "Dry Recyclables Recovery & Baling",
    description: "Sorting and baling system proposed for clean cardboard and packaging materials for authorized recycling.",
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
    status: "Planned",
    title: "Bio-Enzyme Floor Cleaners",
    description: "Proposed fermentation of citrus fruit peels and jaggery into natural acidic sanitation cleaner.",
    impactMetric: "Proposed Intervention: Natural citrus enzyme cleaner to reduce chemical reliance",
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
    status: "Planned",
    title: "Biomedical & Sharps Segregation",
    description: "Standardized puncture-proof containers proposed in dispensary for clinical sharps and medical waste.",
    impactMetric: "Proposed Target: Standard biomedical waste protocol compliance inside dispensary",
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
    description:
      "Analyzed land and soil, consulted founder of Fertile Beeghas for technical guidance, secured Prison Department permission, developed vegetable beds, herbal beds, fruit beds, and mother beds, and arranged seeds and essential tools.",
    impactMetric: "Beds Prepared: Vegetable, herbal, fruit & mother beds prepared; seeds and tools arranged",
    sopSteps: [
      "Land and soil assessment conducted across the prison compound",
      "Technical guidance obtained from founder of Fertile Beeghas",
      "Formal departmental permission secured from Haryana Prison Department",
      "Establishment of vegetable beds, herbal beds, fruit beds, and mother beds",
      "Seeds and essential gardening tools arranged in preparation for full planting",
    ],
  },
  {
    id: 20,
    category: "green",
    categoryLabel: "Green Practices",
    status: "Planned",
    title: "Drought-Hardy Native Tree Canopy",
    description: "Planting native trees like Neem, Peepal, and Jamun proposed along perimeter boundaries for shade.",
    impactMetric: "Proposed Activity: Native tree plantation to provide long-term shade and windbreaks",
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
    status: "Planned",
    title: "High-Nutrition Moringa Planting",
    description: "Fast-growing drumstick trees proposed to provide bioavailable iron and vitamins for barrack diets.",
    impactMetric: "Proposed Intervention: Fast-growing moringa trees to supplement mess nutrition",
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
    status: "Planned",
    title: "Anti-Mosquito Botanical Belts",
    description: "Perimeter borders of Tulsi, Citronella, and Lemongrass proposed along drainage channels.",
    impactMetric: "Proposed Intervention: Aromatic herb borders to naturally deter vector insects",
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
    status: "Planned",
    title: "Heirloom Seed-Bank & Nursery",
    description: "Preserving and drying open-pollinated vegetable seeds proposed for continuous propagation.",
    impactMetric: "Proposed Activity: On-site nursery bed setup and seed preservation",
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
    status: "Planned",
    title: "Organic Botanical Pest Brews",
    description: "Neem-based natural sprays proposed as non-toxic alternatives to chemical insecticides.",
    impactMetric: "Proposed Target: Organic botanical sprays replacing hazardous chemical pesticides",
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
    status: "Active",
    title: "Climate Awareness & Environmental Learning",
    description:
      "Conducted climate awareness and environmental learning sessions with inmates and prison stakeholders to foster environmental understanding and heat defense.",
    impactMetric: "Active Implementation: Climate awareness & environmental learning sessions conducted",
    sopSteps: [
      "Interactive learning sessions covering heat stress, climate challenges, and ecology",
      "Engagement with custodial staff, leadership, and incarcerated cohorts",
      "Practical discussions on personal heat resilience and compound sustainability",
    ],
  },
  {
    id: 26,
    category: "education",
    categoryLabel: "Education",
    status: "Active",
    title: "Inmate Organic Farming Training",
    description:
      "Conducted hands-on organic farming training for inmates, engaging those who had previous farming experience, came from farming families, or were interested in pursuing farming after release.",
    impactMetric: "Active Implementation: Organic farming training conducted with farming cohorts",
    sopSteps: [
      "Engagement of inmates from agricultural backgrounds or interested in post-release farming",
      "Hands-on training in soil preparation, bed conditioning, and organic techniques",
      "Building practical agricultural knowledge and potential post-release livelihood skills",
    ],
  },
  {
    id: 27,
    category: "education",
    categoryLabel: "Education",
    status: "Planned",
    title: "Peer Eco-Ambassador Cohort",
    description: "Cohort of designated inmate peer monitors proposed to participate in daily water and waste checks.",
    impactMetric: "Proposed Activity: Inmate peer monitors to support daily water and hygiene checks",
    sopSteps: [
      "Selection of barrack monitors and eco-captains",
      "Daily checklist audits inspecting dripping spigots and light switches",
      "Coordination with custodial officers on maintenance needs",
    ],
  },
  {
    id: 28,
    category: "education",
    categoryLabel: "Education",
    status: "Planned",
    title: "Vocational Agroecology Certification",
    description: "Structured skills curriculum proposed to provide formal credentials in organic farming upon release.",
    impactMetric: "Proposed Model: Structured curriculum for post-release agricultural credentials",
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
    status: "Planned",
    title: "Ecotherapy Mindfulness",
    description: "Outdoor green space engagement proposed to support inmate mental wellbeing and alleviate confinement stress.",
    impactMetric: "Proposed Activity: Outdoor garden work supporting mental health & stress relief",
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
    status: "Active",
    title: "Prison Heat Action Plan",
    description:
      "Developed a site-specific Heat Action Plan for Nuh District Jail to mitigate extreme summer temperatures, improve hydration access, and protect health across the facility.",
    impactMetric: "Active Implementation: Nuh District Jail Heat Action Plan developed",
    sopSteps: [
      "Assessment of thermal exposure points and high-heat zones across barracks",
      "Formulation of immediate passive cooling, water tank insulation, and hydration protocols",
      "Coordination with prison administration on summer heat defense operational guidelines",
    ],
  },
];

export function ClimateActions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSopAction, setActiveSopAction] = useState<ClimateAction | null>(null);

  const verifiedCount = actionsData.filter((a) => a.status === "Verified").length;
  const activeCount = actionsData.filter((a) => a.status === "Active").length;
  const inProgressCount = actionsData.filter((a) => a.status === "In Progress").length;
  const plannedCount = actionsData.filter((a) => a.status === "Planned").length;

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
              Standardized interventions transforming correctional compounds into climate-resilient restorative spaces. All 30 actions are audited by actual implementation status at Nuh District Jail.
            </p>
          </div>

          {/* Audit Status Card (Dynamically Recalculated) */}
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
                <span className="font-extrabold text-[#1A1C19]">{verifiedCount}</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#CDE5C2]">
                <span className="text-[#12560E] font-bold">Active:</span>
                <span className="font-extrabold text-[#1A1C19]">{activeCount}</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#FDE047]">
                <span className="text-[#854D0E] font-bold">In Progress:</span>
                <span className="font-extrabold text-[#1A1C19]">{inProgressCount}</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#E2DDD2]">
                <span className="text-[#5A6255] font-bold">Planned:</span>
                <span className="font-extrabold text-[#1A1C19]">{plannedCount}</span>
              </div>
            </div>
            <p className="text-[10px] text-[#7A8275] mt-2 text-center">
              Distinguishes initiated & operational groundwork from the broader planned framework.
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
              All Statuses (30)
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
              Verified ({verifiedCount})
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
              Active ({activeCount})
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
              In Progress ({inProgressCount})
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
              Planned ({plannedCount})
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
