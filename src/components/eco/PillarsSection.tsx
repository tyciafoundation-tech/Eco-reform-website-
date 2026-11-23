import React, { useState } from "react";
import { Building2, Droplets, Sprout, CheckCircle2 } from "lucide-react";

export function PillarsSection() {
  const [tab, setTab] = useState<"pillars" | "pathway">("pillars");

  return (
    <section id="pathways" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              Three Pillars & Scale
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
              Holistic Action Model
            </h2>
            <p className="text-xs sm:text-base text-[#5A6255]">
              Targeting heat relief, decentralized water/waste circularity, and vocational skill pathways.
            </p>
          </div>

          <div className="p-1 rounded-xl bg-white border border-[#E2DDD2] flex items-center shadow-xs self-start md:self-auto w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setTab("pillars")}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all text-center touch-manipulation ${tab === "pillars"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "text-[#5A6255] hover:text-[#1A1C19]"
                }`}
            >
              Three Core Pillars
            </button>
            <button
              type="button"
              onClick={() => setTab("pathway")}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all text-center touch-manipulation ${tab === "pathway"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "text-[#5A6255] hover:text-[#1A1C19]"
                }`}
            >
              Replication Pathway
            </button>
          </div>
        </div>

        {/* Tab 1: Three Pillars */}
        {tab === "pillars" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Pillar I */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 01
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Building2 className="size-5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">
                  Resilient Infrastructure
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Tank Protective Covers:</strong> Approximately 180 thermal insulation covers installed on water tanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Heat Action Plan:</strong> Facility-specific thermal safety protocol and heat response planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Passive Cooling Options:</strong> Roof coatings and window shading under study as future retrofits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar II */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 02
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Droplets className="size-5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">
                  Water & Circular Waste
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Composting Infrastructure:</strong> Earthworms introduced, vermicomposting beds established, and compost pit constructed (regular kitchen-waste processing and daily compost production not yet started)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Soil & Garden Preparation:</strong> Soil assessment and land preparation completed for kitchen garden cultivation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Water Systems Planning:</strong> Planned rooftop rainwater harvesting and greywater filtration models under design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar III */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 03
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Sprout className="size-5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">
                  Wellbeing & Vocational Skills
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Climate Awareness:</strong> Climate awareness sessions conducted with incarcerated cohorts and facility staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Organic Farming Training:</strong> Practical organic farming training sessions conducted on ground</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Vocational Curriculum Pathway:</strong> Formal accredited vocational curriculum proposed and under development (not yet operational)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-xs">
              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 01 • Diagnostic Audit
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">20+ Hotspots Evaluated</p>
                <p className="text-[#5A6255]">Rapid thermal imaging, water balances, and waste audits in 14 days.</p>
              </div>

              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 02 • Fast Retrofit
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">Standard 30 Actions</p>
                <p className="text-[#5A6255]">Security-cleared materials installed using trained inmate cohorts.</p>
              </div>

              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 03 • National Policy
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">Directorate Integration</p>
                <p className="text-[#5A6255]">Replication manual for state prison departments and welfare funds.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
