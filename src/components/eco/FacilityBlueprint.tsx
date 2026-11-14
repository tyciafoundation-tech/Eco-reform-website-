import React, { useState } from "react";
import {
  MapPin,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  Download,
  Layers,
  Ruler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SchematicZone {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  totalArea: string;
  image: string;
  alt: string;
  coordinates: string;
  tag: string;
  tagColor: string;
  headline: string;
  recordedImpact: string;
  recordedImpactLabel: string;
  description: string;
  breakdown: { label: string; area: string }[];
  bulletPoints: string[];
}

const schematics: SchematicZone[] = [
  {
    id: "pak-shala",
    title: "Pak Shala — Kitchen Garden Compound",
    shortTitle: "Pak Shala (914 sq.m)",
    subtitle: "Land Area Mapping of Nuh District Jail for Inmate Kitchen Gardening",
    totalArea: "914 sq. meters",
    image: "/images/nuh-prison-pak-shala-schematic.png",
    alt: "Pak Shala Land Area Mapping - Total 914 sq. meters for Kitchen Gardening at Nuh District Jail",
    coordinates: "Lat 28.107° N, Long 77.004° E • Pak Shala Zone",
    tag: "NUTRITION & GREEN CANOPY",
    tagColor: "bg-[#EBF4E8] text-[#12560E]",
    headline: "1.2-Acre Permaculture Kitchen Garden",
    recordedImpactLabel: "Recorded Field Impact",
    recordedImpact: "420 kg organic greens harvested per cycle",
    description:
      "Courtyard and peripheral buffer converted into raised vegetable beds growing moringa, spinach, and seasonal gourds for daily barrack mess nutrition.",
    breakdown: [
      { label: "Main Perimeter Bed", area: "480 sq.m (80m × 6m)" },
      { label: "West Kitchen Plot", area: "130 sq.m (10m × 13m)" },
      { label: "East Flank Garden", area: "304 sq.m (8m × 38m)" },
    ],
    bulletPoints: [
      "Supplements inmate mess with fresh daily vitamins & iron",
      "Managed by 120+ active incarcerated agricultural trainees",
    ],
  },
  {
    id: "factory-area",
    title: "Factory Area — Industrial Eco-Production Compound",
    shortTitle: "Factory Area (1,155 sq.m)",
    subtitle: "Inmate Vocational Training, Composting & Solid Waste Recovery Zone",
    totalArea: "1,155 sq. meters",
    image: "/images/nuh-prison-factory-area-schematic.png",
    alt: "Factory Area Land Area Mapping - Total 1,155 sq. meters for Industrial Eco-Production at Nuh District Jail",
    coordinates: "Lat 28.107° N, Long 77.004° E • Factory Sector",
    tag: "VOCATIONAL & CIRCULAR PRODUCTION",
    tagColor: "bg-[#EBF4E8] text-[#12560E]",
    headline: "Circular Waste & Vocational Production Hub",
    recordedImpactLabel: "Circular Resource Recovery",
    recordedImpact: "100% prison organic waste recycled on-site",
    description:
      "Industrial workshops and surrounding compounds retrofitted for vermicomposting, bio-char enrichment, circular recycling, and certified vocational training.",
    breakdown: [
      { label: "West Workshop Flank", area: "420 sq.m (12m × 35m)" },
      { label: "North Yard Canopy", area: "350 sq.m (50m × 7m)" },
      { label: "East Processing Unit", area: "385 sq.m (11m × 35m)" },
    ],
    bulletPoints: [
      "Accredited organic waste upcycling & bio-amendment production",
      "Vocational rehabilitation equipping inmates for green livelihoods",
    ],
  },
];

export function FacilityBlueprint() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentZone = schematics[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? schematics.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === schematics.length - 1 ? 0 : prev + 1));
  };

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
              Land area mapping and physical interventions situated inside the correctional compound. Slide between zones to inspect measurements.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-[#CDE5C2] text-[#12560E] bg-white hover:bg-[#EBF4E8] font-bold text-xs h-9 px-3 rounded-xl shadow-2xs"
            >
              <a
                href="/eco-reform-field-brochure.pdf"
                download="eco-reform-field-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <BookOpen className="size-3.5" />
                <span>Field Brochure</span>
                <Download className="size-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Slider Panel (Left) */}
          <div className="lg:col-span-8 bg-[#182613] rounded-3xl p-4 sm:p-5 text-white border border-[#2A3E24] shadow-md relative overflow-hidden flex flex-col justify-between">
            {/* Top Bar inside panel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
              {/* Zone selector pill buttons */}
              <div className="inline-flex items-center p-1 rounded-xl bg-white/10 border border-white/10 gap-1 self-start sm:self-auto">
                {schematics.map((zone, idx) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeSlide === idx
                        ? "bg-[#B9F079] text-[#12560E] shadow-xs"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {zone.shortTitle}
                  </button>
                ))}
              </div>

              {/* Coordinates and Fullscreen trigger */}
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono">
                <span className="text-[#B9F079] bg-white/10 px-2.5 py-1 rounded-lg">
                  {currentZone.coordinates}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#B9F079] transition-colors"
                  title="Expand Fullscreen"
                  aria-label="Expand Fullscreen"
                >
                  <Maximize2 className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Carousel Slides Container */}
            <div className="relative w-full bg-white rounded-2xl border border-white/15 overflow-hidden shadow-inner group">
              {/* Horizontal Slider Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {schematics.map((zone) => (
                  <div
                    key={zone.id}
                    className="min-w-full relative aspect-[16/11] sm:aspect-[16/10] max-h-[460px] p-2 sm:p-4 flex items-center justify-center cursor-pointer bg-white"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={zone.image}
                      alt={zone.alt}
                      className="w-full h-full object-contain select-none"
                      loading="eager"
                    />

                    {/* Subtle Click-to-Zoom Hint on Hover */}
                    <div className="absolute bottom-3 inset-x-4 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                        <ZoomIn className="size-3.5 text-[#B9F079]" />
                        <span>Click to view enlarged blueprint ({zone.totalArea})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Left Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 z-10"
                aria-label="Previous schematic"
              >
                <ChevronLeft className="size-5" />
              </button>

              {/* Carousel Right Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 z-10"
                aria-label="Next schematic"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Bottom Slider Pagination & Status Strip */}
            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                {schematics.map((zone, idx) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === idx ? "w-6 bg-[#B9F079]" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="ml-2 text-[11px] font-mono text-white/60">
                  Slide {activeSlide + 1} of {schematics.length}: {currentZone.shortTitle}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#B9F079] font-bold">
                <Ruler className="size-3.5" />
                <span>Total Measured Area: {currentZone.totalArea}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Inspector Card (Right Column) */}
          <div className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E2DDD2] shadow-xs space-y-3.5 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EDE4]">
              <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${currentZone.tagColor}`}>
                {currentZone.tag}
              </span>
              <span className="text-xs font-bold text-[#52A638] flex items-center gap-1">
                <span className="size-2 rounded-full bg-[#52A638] animate-pulse" />
                Active Model
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#1A1C19] leading-tight">
                {currentZone.headline}
              </h3>
              <p className="text-[11px] font-semibold text-[#12560E] mt-0.5">
                {currentZone.title} • {currentZone.totalArea}
              </p>
            </div>

            {/* Highlighted Field Metric */}
            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                {currentZone.recordedImpactLabel}
              </span>
              <p className="text-xs sm:text-sm font-black text-[#12560E] mt-0.5">
                {currentZone.recordedImpact}
              </p>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed">
              {currentZone.description}
            </p>

            {/* Area Breakdown Pill List */}
            <div className="pt-2 border-t border-[#F0EDE4] space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1A1C19] flex items-center gap-1">
                <Layers className="size-3 text-[#12560E]" /> Dimension Breakdown
              </span>
              <div className="grid grid-cols-1 gap-1 text-[11px]">
                {currentZone.breakdown.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF9F5] border border-[#E2DDD2]/70 text-[#3A4036]"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="font-bold text-[#12560E]">{item.area}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-1.5 pt-2 border-t border-[#F0EDE4]">
              {currentZone.bulletPoints.map((point) => (
                <li key={point} className="text-xs text-[#3A4036] flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[#52A638] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-[#12560E] hover:bg-[#0D3F0A] text-white text-xs font-bold h-9 rounded-xl shadow-xs"
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

      {/* Enlarged Schematic Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[calc(100vw-1.5rem)] sm:max-w-4xl md:max-w-5xl max-h-[92vh] overflow-y-auto p-0 border-[#E2DDD2] bg-[#FAF9F5] rounded-2xl sm:rounded-3xl">
          <div className="bg-[#12560E] text-white p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="size-3.5 text-[#B9F079] shrink-0" /> Nuh District Jail Architectural Blueprint
              </div>
              <DialogTitle className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
                {currentZone.title} (Total: {currentZone.totalArea})
              </DialogTitle>
              <DialogDescription className="text-white/80 mt-1 text-xs sm:text-sm leading-relaxed">
                {currentZone.subtitle}
              </DialogDescription>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              {/* Toggle slide inside modal */}
              <div className="inline-flex items-center p-1 rounded-xl bg-white/10 border border-white/20 gap-1 mr-2">
                {schematics.map((zone, idx) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeSlide === idx
                        ? "bg-[#B9F079] text-[#12560E]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {zone.shortTitle}
                  </button>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs font-bold h-9 px-3.5 rounded-xl"
              >
                <a
                  href={currentZone.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`${currentZone.id}-schematic.png`}
                  className="flex items-center gap-1.5"
                >
                  <Download className="size-3.5 text-[#B9F079]" />
                  <span>Download</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="p-3 sm:p-6 flex flex-col items-center justify-center bg-[#FAF9F5]">
            <div className="relative w-full max-h-[72vh] overflow-auto flex items-center justify-center rounded-xl bg-white p-2 sm:p-4 border border-[#E2DDD2] shadow-inner">
              <img
                src={currentZone.image}
                alt={currentZone.alt}
                className="w-full h-auto max-h-[68vh] object-contain mx-auto"
              />
            </div>

            <div className="w-full mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5A6255]">
              <div className="flex items-center gap-3">
                {currentZone.breakdown.map((item) => (
                  <span key={item.label} className="font-semibold text-[#1A1C19]">
                    {item.label}: <span className="text-[#12560E] font-bold">{item.area}</span>
                  </span>
                ))}
              </div>
              <span className="font-mono text-[11px] text-[#12560E]">
                Total: {currentZone.totalArea}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
