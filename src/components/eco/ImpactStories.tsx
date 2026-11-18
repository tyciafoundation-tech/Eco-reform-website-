import React from "react";
import {
  ThermometerSun,
  Sprout,
  GraduationCap,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Recycle,
  Users,
  Flame,
  Truck,
} from "lucide-react";
import nuhJailPhoto from "@/images/district-jail-nuh-entrance.jpg";
import gardenFieldPhoto from "@/images/eco-reform-pilot-kitchen-garden-nuh.jpg";

interface FieldUpdateItem {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  photo?: string;
  photoAlt?: string;
  photoCaption?: string;
}

const fieldUpdates: FieldUpdateItem[] = [
  {
    id: "heat-adaptation",
    category: "Heat Adaptation",
    title: "Water Tank Protective Covers (~180 Tanks)",
    description:
      "Researched and developed a practical method for making protective XLPE-based water tank covers. Trained inmates who actively participated in fabricating and installing covers on approximately 180 water tanks across the facility, resulting in observed water temperature reduction during high-heat periods.",
    status: "Verified Groundwork",
    icon: ThermometerSun,
    photo: nuhJailPhoto,
    photoAlt: "Nuh District Jail main entrance - Pilot location for Eco-Reform interventions",
    photoCaption: "Field Facility: District Jail, Nuh (Haryana) — ~180 Water Tanks Covered",
  },
  {
    id: "kitchen-garden",
    category: "Nutritional Resilience",
    title: "Soil Assessment & Kitchen Gardening Spaces",
    description:
      "Analyzed available land and soil inside the prison with technical guidance from the founder of Fertile Beeghas, and obtained permission from the Prison Department. Developed designated kitchen gardening spaces including vegetable beds, herbal beds, fruit beds, and mother beds, with seeds and essential tools arranged.",
    status: "Beds Prepared",
    icon: Sprout,
    photo: gardenFieldPhoto,
    photoAlt: "Authentic field photograph of kitchen garden preparation and tools at Nuh District Jail",
    photoCaption: "Field Record: Ground preparation & bed layout at Nuh District Jail",
  },
  {
    id: "vermicomposting",
    category: "Organic Waste",
    title: "Vermicomposting Beds & Compost Pit",
    description:
      "Brought earthworms, established vermicomposting beds, and constructed a compost pit on site. The objective is to utilize prison kitchen waste to produce organic manure; regular daily compost production and waste processing are under development.",
    status: "Infrastructure Set Up",
    icon: Recycle,
  },
  {
    id: "inmate-training",
    category: "Capacity Building",
    title: "Inmate Organic Farming Training",
    description:
      "Conducted organic farming training for inmates, specifically engaging those with previous farming experience, those from farming families, or those interested in pursuing agriculture for post-release livelihoods.",
    status: "Training Conducted",
    icon: Users,
  },
  {
    id: "climate-planning",
    category: "Climate Planning",
    title: "Climate Awareness & Heat Action Plan",
    description:
      "Conducted climate awareness and environmental learning sessions with inmates, and formulated a site-specific Heat Action Plan for Nuh District Jail to mitigate thermal stress and improve hydration protocols.",
    status: "Plan Formulated",
    icon: Flame,
  },
  {
    id: "mobility-assessment",
    category: "Mobility & Logistics",
    title: "Carbon Footprint & Supply Mobility Assessment",
    description:
      "Assessed the prison's carbon footprint and daily vehicle movement, tracking frequent vegetable supply vans and trucks bringing food supplies, alongside court transit vans and ambulances. Identified vital opportunities to explore on-site food production and reduce external procurement transportation in the future.",
    status: "Assessment Completed",
    icon: Truck,
  },
];

export function ImpactStories() {
  return (
    <section id="impact" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            Field Evidence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
            Verified Field Impact
          </h2>
          <p className="text-xs sm:text-base text-[#5A6255]">
            Documented on-ground progress and actual interventions completed at Nuh District Jail, Haryana.
          </p>
        </div>

        {/* 6 Field Update Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {fieldUpdates.map((update) => {
            const Icon = update.icon;
            return (
              <div
                key={update.id}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] flex flex-col justify-between hover:border-[#A8CCA0] transition-all shadow-xs"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-white px-2.5 py-1 rounded-md border border-[#E2DDD2]">
                      {update.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#12560E] bg-[#EBF4E8] px-2.5 py-0.5 rounded-full border border-[#CDE5C2]">
                      <CheckCircle2 className="size-3 text-[#52A638] shrink-0" />
                      <span>{update.status}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-white text-[#12560E] border border-[#E2DDD2] shrink-0 shadow-2xs">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#1A1C19] leading-snug">
                        {update.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5346] leading-relaxed">
                    {update.description}
                  </p>

                  {/* Photo if available */}
                  {update.photo && (
                    <div className="pt-2">
                      <div className="relative rounded-xl overflow-hidden border border-[#E2DDD2] aspect-[16/10] bg-white shadow-xs">
                        <img
                          src={update.photo}
                          alt={update.photoAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs p-2 text-[11px] text-white font-medium">
                          {update.photoCaption}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-[#E2DDD2] flex items-center justify-between text-xs text-[#5A6255]">
                  <span className="font-semibold flex items-center gap-1.5 text-[#12560E]">
                    <ShieldCheck className="size-3.5" /> Eco-Reform Field Record
                  </span>
                  <span className="text-[11px] font-mono text-[#7A8275]">Nuh District Jail</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
