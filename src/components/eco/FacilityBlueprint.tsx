import React, { useState } from "react";
import {
  MapPin,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";

export function FacilityBlueprint() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section id="facility-blueprint" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              <MapPin className="size-3.5" /> Nuh District Jail, Haryana
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Interactive Schematic
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Land area mapping and physical interventions situated inside the correctional compound.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrochureOpen(true)}
              className="border-[#CDE5C2] text-[#12560E] bg-white hover:bg-[#EBF4E8] font-bold text-xs h-9 px-3 rounded-xl"
            >
              <BookOpen className="size-3.5 mr-1" /> Brochure
            </Button>
          </div>
        </div>

        {/* Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Static Map Panel */}
          <div className="lg:col-span-8 bg-[#182613] rounded-3xl p-4 sm:p-5 text-white border border-[#2A3E24] shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-3 text-[10px] sm:text-[11px] font-mono">
              <span className="text-[#B9F079] bg-white/10 px-2 py-0.5 rounded-md self-start xs:self-auto">
                Lat 28.107° N, Long 77.004° E
              </span>
              <span className="text-white/70 font-sans font-bold text-xs truncate">
                2025 Eco-Interventions
              </span>
            </div>

            {/* Static Map Image Container */}
            <div className="relative w-full bg-white rounded-2xl border border-white/15 overflow-hidden p-2 sm:p-4 flex items-center justify-center shadow-inner">
              <img
                src="/nuh-prison-land-area-map.png"
                alt="Land Area Mapping of Nuh District Jail for Kitchen Gardening at Pak Shala (Total 914 sq. meters)"
                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                loading="eager"
              />
            </div>
          </div>

          {/* Compact Inspector Card */}
          <div className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E2DDD2] shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EDE4]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                GREEN PRACTICES
              </span>
              <span className="text-xs font-bold text-[#52A638]">
                Active
              </span>
            </div>

            <h3 className="text-base font-extrabold text-[#1A1C19]">
              1.2-Acre Permaculture Kitchen Garden
            </h3>

            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                Recorded Field Impact
              </span>
              <p className="text-xs font-black text-[#12560E] mt-0.5">
                420 kg organic greens harvested per cycle
              </p>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed">
              Courtyard transformed into raised beds growing moringa, spinach, and gourds for daily barrack meals.
            </p>

            <ul className="space-y-1.5 pt-2 border-t border-[#F0EDE4]">
              <li className="text-xs text-[#3A4036] flex items-start gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#52A638] shrink-0 mt-0.5" />
                <span>Supplements inmate mess with fresh vitamins & iron</span>
              </li>
              <li className="text-xs text-[#3A4036] flex items-start gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#52A638] shrink-0 mt-0.5" />
                <span>Managed by 120+ active incarcerated trainees</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-[#12560E] hover:bg-[#0D3F0A] text-white text-xs font-bold h-9 rounded-xl"
              >
                <a href="#climate-actions" className="flex items-center justify-center gap-1.5">
                  <span>Audit 30 Actions</span>
                  <ArrowRight className="size-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
}
