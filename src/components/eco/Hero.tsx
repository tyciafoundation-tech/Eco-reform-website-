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
  Users,
  MapPin,
  Maximize2,
  ZoomIn,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  const [mapModalOpen, setMapModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-2 pb-6 sm:pt-3 sm:pb-8 md:pt-4 md:pb-10 overflow-hidden isolate">
      {/* Desktop/Tablet Background Image (Hidden on Phone Screens) */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBg}
          alt="Authentic field photograph of kitchen gardening and climate adaptation at Nuh District Jail"
          className="w-full h-full object-cover object-[80%_25%] scale-[1.01]"
          loading="eager"
          decoding="async"
        />
        {/* Directional gradient mask: gentle cream wash for text contrast, soft ambient feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 md:via-[#FAF9F5]/75 to-[#FAF9F5]/35 lg:to-transparent" />
        {/* Vertical fades to seamlessly merge into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/70 via-transparent to-[#FAF9F5]" />
        {/* Subtle eco ambient tint */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#B9F079]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Top Grid: Left = Headline & Actions; Right = Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-5 sm:mb-6">
          {/* Left Column: Tagline, Headline, Paragraph, Actions */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-3 sm:space-y-4">
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] border border-[#CDE5C2] text-[#12560E] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-2xs max-w-full">
              <span className="size-2 rounded-full bg-[#52A638] animate-pulse shrink-0" />
              <span className="truncate sm:whitespace-normal">Climate-Resilient Adaptive Prisons • Prioritising Wellbeing</span>
            </div>

            {/* Large Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[54px] font-black text-[#1A1C19] tracking-tight leading-[1.08] sm:leading-[1.04]">
                Where Second Chances <br />
                <span className="bg-gradient-to-r from-[#12560E] via-[#2E7D32] to-[#7CA123] bg-clip-text text-transparent">
                  Transform Prisons.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#3D4539] font-medium leading-relaxed max-w-xl">
                TYCIA Foundation's flagship model turning high-heat, high-density prisons into
                climate-adaptive, regenerative spaces.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-0.5">
              <Button
                asChild
                size="default"
                className="w-full sm:w-auto bg-[#12560E] hover:bg-[#0D3F0A] text-white font-extrabold text-xs sm:text-sm h-10 sm:h-11 px-5 sm:px-6 rounded-xl shadow-md transition-transform hover:scale-[1.02] justify-center"
              >
                <a href="#facility-blueprint" className="flex items-center justify-center gap-2">
                  <Compass className="size-4 shrink-0 text-[#B9F079]" />
                  <span>Explore Model</span>
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="w-full sm:w-auto border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-5 rounded-xl shadow-2xs justify-center"
              >
                <a
                  href="/eco-reform-field-brochure.pdf"
                  download="eco-reform-field-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <FileText className="size-4 text-[#52A638] shrink-0" />
                  <span>Field Brochure</span>
                  <Download className="size-3 text-[#12560E] shrink-0 opacity-80" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: India Climate Pressure Map Card */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              onClick={() => setMapModalOpen(true)}
              className="group relative bg-white/95 backdrop-blur-md rounded-2xl border border-[#E2DDD2] p-2.5 sm:p-3 shadow-sm hover:shadow-lg hover:border-[#12560E]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Header inside the Card */}
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-[#EBF4E8] text-[#12560E]">
                    <MapPin className="size-3" />
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#1A1C19] leading-tight">
                      Prisons Under Pressure
                    </h3>
                    <p className="text-[10px] font-semibold text-[#12560E]">
                      National Climate Crisis Mapping
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-full group-hover:bg-[#12560E] group-hover:text-white transition-colors">
                  <Maximize2 className="size-2.5" />
                  <span className="hidden sm:inline">Click to</span> Expand
                </span>
              </div>

              {/* Map Image Frame (Uncropped, aspect preserved, object-contain so NO part of India map is cut) */}
              <div className="relative w-full aspect-[4/4.8] max-h-[300px] sm:max-h-[340px] lg:max-h-[350px] bg-[#FAF9F5] rounded-xl border border-[#E2DDD2] overflow-hidden flex items-center justify-center p-1.5 group-hover:border-[#A8CCA0] transition-colors">
                <img
                  src="/images/india-prisons-climate-crisis-map.png"
                  alt="National Map: Prisons under pressure - Addressing Climate Crisis in Indian Prisons"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute bottom-2 inset-x-3 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#12560E] transition-all">
                    <ZoomIn className="size-3 text-[#B9F079]" />
                    <span>Click to view full uncropped map</span>
                  </div>
                </div>
              </div>

              {/* Footer strip in card */}
              <div className="mt-1.5 px-1 flex items-center justify-between text-[10px] sm:text-[11px] text-[#5A6255]">
                <span className="font-medium truncate">Documenting heat, flood & infrastructure risks</span>
                <span className="text-[#12560E] font-bold shrink-0 ml-2 group-hover:underline flex items-center gap-0.5">
                  View Fullscreen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Impact Metric Cards in Balanced Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
          {impactMetrics.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all flex items-center gap-3"
              >
                <div
                  className="size-8 sm:size-9 rounded-xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] shrink-0"
                  aria-label={card.iconAriaLabel}
                >
                  <Icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-black text-[#12560E] tracking-tight leading-none">
                    {card.metric}
                  </div>
                  <p className="text-xs font-bold text-[#1A1C19] truncate mt-0.5">
                    {card.title}
                  </p>
                  <p className="text-[10px] text-[#5A6255] truncate">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation and Support Strip */}
        <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#F4F3ED]/90 backdrop-blur-md border border-[#E2DDD2] flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 text-xs shadow-2xs">
          <span className="font-extrabold uppercase tracking-wider text-[#5A6255] text-[10px] sm:text-[11px] shrink-0">
            VALIDATED & SUPPORTED BY:
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-bold text-[#1A1C19] text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <img
                src="/images/haryana-prisons-logo.jpg"
                alt=""
                className="size-4.5 object-contain rounded-full border border-black/20"
              />
              <span>Haryana Prisons Dept.</span>
            </span>
            <span className="flex items-center gap-1.5">
              <img
                src="/images/rainmatter-foundation-logo.png"
                alt=""
                className="h-3.5 w-auto object-contain"
              />
              <span>Rainmatter Foundation (Zerodha)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#7CA123] shrink-0" />
              <span>Fertile Beeghas</span>
            </span>
            <span className="flex items-center gap-1.5">
              <img
                src="/images/climate-chakraview-logo.jpg"
                alt=""
                className="h-3.5 w-auto object-contain rounded-xs"
              />
              <span>Climate Chakraview</span>
            </span>
            <span className="flex items-center gap-1.5">
              <img
                src="/images/commutiny-youth-collective-logo.jpg"
                alt=""
                className="h-3.5 w-auto object-contain rounded-xs"
              />
              <span>ComMutiny</span>
            </span>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />

      {/* Map Lightbox Dialog (Expanded View on Click) */}
      <Dialog open={mapModalOpen} onOpenChange={setMapModalOpen}>
        <DialogContent className="max-w-[calc(100vw-1.5rem)] sm:max-w-4xl md:max-w-5xl max-h-[92vh] overflow-y-auto p-0 border-[#E2DDD2] bg-[#FAF9F5] rounded-2xl sm:rounded-3xl">
          <div className="bg-[#12560E] text-white p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="size-3.5 text-[#B9F079] shrink-0" /> National Field Evidence
              </div>
              <DialogTitle className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
                Prisons Under Pressure: Addressing Climate Crisis in Indian Prisons
              </DialogTitle>
              <DialogDescription className="text-white/80 mt-1 text-xs sm:text-sm leading-relaxed">
                National survey documenting acute climate risks, extreme weather events, and infrastructural vulnerabilities across Indian prisons.
              </DialogDescription>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs font-bold h-9 px-3.5 rounded-xl"
              >
                <a
                  href="/images/india-prisons-climate-crisis-map.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="india-prisons-climate-crisis-map.png"
                  className="flex items-center gap-1.5"
                >
                  <Download className="size-3.5 text-[#B9F079]" />
                  <span>Download Map</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="p-3 sm:p-6 flex flex-col items-center justify-center bg-[#FAF9F5]">
            <div className="relative w-full max-h-[72vh] overflow-auto flex items-center justify-center rounded-xl bg-white p-2 sm:p-4 border border-[#E2DDD2] shadow-inner">
              <img
                src="/images/india-prisons-climate-crisis-map.png"
                alt="Detailed Map: Prisons under pressure - Addressing Climate Crisis in Indian Prisons"
                className="w-full h-auto max-h-[68vh] object-contain mx-auto"
              />
            </div>
            
            <p className="text-[11px] sm:text-xs text-[#5A6255] text-center mt-3">
              Source: TYCIA Foundation & Project Second Chance • Mapping 20+ acute custodial vulnerabilities across India.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
