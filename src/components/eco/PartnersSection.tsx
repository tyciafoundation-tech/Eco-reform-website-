import React from "react";
import { ShieldCheck, Sprout, CheckCircle2, Compass, Users } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="partners" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
            Institutional Partners
          </h2>
          <p className="text-xs sm:text-base text-[#5A6255]">
            Bridging correctional administration with environmental philanthropy and youth climate ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Partner 1: Department of Prisons, Haryana */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">Department of Prisons, Haryana</h3>
                    <p className="text-xs font-bold text-[#12560E]">Government Host • Nuh District Jail</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto shrink-0 h-10 px-2 py-1 bg-[#141713] rounded-xl flex items-center justify-center border border-[#3A4036]/20 shadow-2xs">
                  <img
                    src="/images/haryana-prisons-logo.jpg"
                    alt="Department of Prisons Haryana Logo"
                    className="h-8 w-auto max-w-[80px] object-contain rounded-sm"
                  />
                </div>
              </div>

              <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                Granting institutional access, custodial collaboration, and administrative validation of the 30 Climate Actions Blueprint.
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Compound access & warden-inmate participation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Systemic endorsement of cool-roof and garden SOPs</span>
              </li>
            </ul>
          </div>

          {/* Partner 2: Rainmatter Foundation */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                    <Sprout className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">Rainmatter Foundation</h3>
                    <p className="text-xs font-bold text-[#12560E]">Catalytic Philanthropic Partner • Zerodha</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto shrink-0 h-10 px-2.5 py-1 bg-white rounded-xl flex items-center justify-center border border-[#E2DDD2] shadow-2xs">
                  <img
                    src="/images/rainmatter-foundation-logo.png"
                    alt="Rainmatter Foundation Logo"
                    className="h-6 w-auto max-w-[115px] object-contain"
                  />
                </div>
              </div>

              <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                Providing vital catalytic funding, mentorship, and ecosystem backing to scale regenerative prison models nationwide.
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Catalytic funding for eco-infrastructure retrofits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Ecosystem network support for nationwide replication</span>
              </li>
            </ul>
          </div>

          {/* Partner 3: Climate Chakraview */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                    <Compass className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">Climate Chakraview</h3>
                    <p className="text-xs font-bold text-[#12560E]">Youth Climate Action • Festival & Ecosystem Partner</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto shrink-0 h-9 px-2.5 py-1 bg-[#141713] rounded-xl flex items-center justify-center border border-[#3A4036]/20 shadow-2xs">
                  <img
                    src="/images/climate-chakraview-logo.jpg"
                    alt="Climate Chakraview Logo"
                    className="h-6 w-auto max-w-[110px] object-contain"
                  />
                </div>
              </div>

              <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                Championing grassroots youth climate movements, immersive festivals, and cross-sector coalitions navigating complex ecological crises.
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Youth-led climate consciousness & grassroots mobilization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Collaborative ecosystem scaling frontline ecological initiatives</span>
              </li>
            </ul>
          </div>

          {/* Partner 4: ComMutiny - The Youth Collective */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">ComMutiny – The Youth Collective</h3>
                    <p className="text-xs font-bold text-[#12560E]">National Coalition • Enabling Ecosystem Partner</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto shrink-0 h-9 px-2.5 py-1 bg-[#141713] rounded-xl flex items-center justify-center border border-[#3A4036]/20 shadow-2xs">
                  <img
                    src="/images/commutiny-youth-collective-logo.jpg"
                    alt="ComMutiny The Youth Collective Logo"
                    className="h-6 w-auto max-w-[110px] object-contain"
                  />
                </div>
              </div>

              <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                Facilitating the 5th Space to nurture youth leadership, empowering civil society collectives to co-create sustainable social and environmental transformation.
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Youth-centric institutional capacity & leadership development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Cross-sector alliances advancing climate justice and action</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
