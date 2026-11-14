import React, { useState } from "react";
import { Menu, X, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { BrochureModal } from "./BrochureModal";

const navItems = [
  { label: "Overview", href: "#hero" },
  { label: "Crisis", href: "#crisis" },
  { label: "Model", href: "#model" },
  { label: "Blueprint", href: "#facility-blueprint" },
  { label: "30 Actions", href: "#climate-actions" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <>
      {/* Top Banner Announcement Pill */}
      <div className="bg-[#12560E] text-white text-[10px] sm:text-[11px] py-1 px-3 sm:px-4 font-semibold border-b border-[#0D3F0A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-[#B9F079] text-[#12560E] uppercase tracking-wider shrink-0">
              Nuh Pilot Active
            </span>
            <span className="text-white/90 text-[10px] sm:text-[11px] truncate hidden xs:inline sm:inline">
              Validated by Prisons Dept., Haryana & Rainmatter
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-white/80 font-medium shrink-0">
            <span className="hidden xs:inline">Section 12A & </span>80G Certified
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E2DDD2] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-12 sm:h-14 md:h-15 px-3 sm:px-6">
          {/* Sleek Logo */}
          <div className="flex items-center py-1">
            <Logo size="sm" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-bold text-[#4B5346] hover:text-[#12560E] hover:bg-[#EBF4E8] rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="inline-flex items-center gap-1.5 text-xs font-bold border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] h-8 sm:h-8.5 px-3 rounded-xl shadow-2xs"
            >
              <a
                href="/eco-reform-field-brochure.pdf"
                download="eco-reform-field-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="size-3.5 text-[#52A638]" />
                <span>Field Brochure</span>
                <Download className="size-3 text-[#12560E] opacity-75" />
              </a>
            </Button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden p-2 sm:p-2.5 rounded-xl text-[#1A1C19] hover:bg-[#EBF4E8] border border-[#E2DDD2] touch-manipulation"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E2DDD2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-bold text-[#1A1C19] hover:bg-[#EBF4E8] rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E2DDD2] flex flex-col gap-2.5">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full justify-center border-[#CDE5C2] text-[#12560E] font-bold"
                >
                  <a
                    href="/eco-reform-field-brochure.pdf"
                    download="eco-reform-field-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <BookOpen className="size-4 mr-1" />
                    <span>Download Field Brochure</span>
                    <Download className="size-3.5" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </>
  );
}
