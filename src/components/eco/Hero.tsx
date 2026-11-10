import React, { useState } from "react";
import {
  ArrowRight,
  Compass,
  FileText,
  ShieldCheck,
  Sprout,
  CheckCircle2,
  Sparkles,
  Recycle,
  ThermometerSun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";
import heroBg from "@/images/eco-reform-pilot-kitchen-garden-nuh.jpg";

interface MetricCard {
  metric: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconAriaLabel: string;
}

const impactMetrics: MetricCard[] = [
  {
    metric: "1.2 Acres",
    title: "Living Farm Canopy",
    description: "420kg fresh greens/cycle",
    icon: Sprout,
    iconAriaLabel: "Farm canopy acreage metric",
  },
  {
    metric: "250 kg/day",
    title: "Mess Waste Composted",
    description: "100% kitchen diversion",
    icon: Recycle,
    iconAriaLabel: "Waste composted metric",
  },
  {
    metric: "Up to 13°C",
    title: "Summer Water-Tank Covers",
    description: "Temperature reduction during summer",
    icon: ThermometerSun,
    iconAriaLabel: "Summer water-tank temperature reduction metric",
  },
];

export function Hero() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-12 md:pb-24 overflow-hidden isolate">
      {/* Desktop/Tablet Background Image (Hidden on Phone Screens) */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Authentic field photograph of kitchen gardening and climate adaptation at Nuh District Jail"
          className="w-full h-full object-cover object-[80%_25%] scale-[1.01]"
          loading="eager"
          decoding="async"
        />
        {/* Directional gradient mask: gentle cream wash on the left for text contrast, open on the right for the authentic field work */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 md:via-[#FAF9F5]/65 to-[#FAF9F5]/20 lg:to-transparent" />
        {/* Vertical fades to seamlessly merge into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/60 via-transparent to-[#FAF9F5]" />
        {/* Subtle eco ambient tint */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#B9F079]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#EBF4E8] border border-[#CDE5C2] text-[#12560E] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-4 sm:mb-6 shadow-2xs max-w-full">
          <span className="size-2 rounded-full bg-[#52A638] animate-pulse shrink-0" />
          <span className="truncate sm:whitespace-normal">Climate-Resilient Adaptive Prisons • Prioritising Wellbeing</span>
        </div>

        {/* Large Vibrant Headline */}
        <div className="max-w-4xl space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1A1C19] tracking-tight leading-[1.08] sm:leading-[1.03]">
            Where Second Chances <br />
            <span className="bg-gradient-to-r from-[#12560E] via-[#2E7D32] to-[#7CA123] bg-clip-text text-transparent">
              Transform Prisons.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-[#3D4539] font-medium leading-relaxed max-w-2xl pt-1">
            TYCIA Foundation's flagship model turning high-heat, high-density prisons into
            climate-adaptive, regenerative spaces.
          </p>
        </div>

        {/* Phone View: Dedicated Standalone Visual Block */}
        <div className="block md:hidden mb-7">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2DDD2] bg-white shadow-sm">
            <div className="aspect-[16/10] w-full relative overflow-hidden">
              <img
                src={heroBg}
                alt="Kitchen gardening bed preparation at Nuh District Jail pilot site"
                className="w-full h-full object-cover object-[65%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#12560E]/90 text-white backdrop-blur-md shadow-xs">
                  <Sparkles className="size-3 text-[#B9F079]" />
                  <span>Nuh Pilot Site • Kitchen Gardening</span>
                </span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold leading-tight drop-shadow-sm">
                  Agroecology & Kitchen Garden Bed Preparation
                </p>
                <p className="text-[10px] text-white/80 mt-0.5 line-clamp-1">
                  Nuh District Jail, Haryana • TYCIA Foundation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fully Optimized for Mobile Stack and Touch */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#12560E] hover:bg-[#0D3F0A] text-white font-extrabold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-2xl shadow-md transition-transform hover:scale-[1.02] justify-center"
          >
            <a href="#facility-blueprint" className="flex items-center justify-center gap-2.5">
              <Compass className="size-4 shrink-0 text-[#B9F079]" />
              <span>Explore Model</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setBrochureOpen(true)}
            className="w-full sm:w-auto border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs sm:text-sm md:text-base h-12 sm:h-14 px-5 sm:px-7 rounded-2xl shadow-2xs justify-center"
          >
            <FileText className="size-4 mr-2 text-[#52A638] shrink-0" />
            <span>Field Brochure</span>
          </Button>
        </div>

        {/* 3 Impact Metric Cards in Balanced Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
          {impactMetrics.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="size-9 sm:size-10 rounded-full bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-3"
                    aria-label={card.iconAriaLabel}
                  >
                    <Icon className="size-4 sm:size-5" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12560E] tracking-tight">
                    {card.metric}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#1A1C19] mt-1">
                    {card.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#5A6255] mt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation and Support Strip */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F3ED]/90 backdrop-blur-md border border-[#E2DDD2] flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs shadow-2xs">
          <span className="font-extrabold uppercase tracking-wider text-[#5A6255] text-[10px] sm:text-[11px] shrink-0">
            VALIDATED & SUPPORTED BY:
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-bold text-[#1A1C19] text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#12560E] shrink-0" />
              <span>Haryana Prisons Dept.</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Sprout className="size-4 text-[#52A638] shrink-0" />
              <span>Rainmatter Foundation (Zerodha)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#7CA123] shrink-0" />
              <span>Fertile Beeghas</span>
            </span>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
}
