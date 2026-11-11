import React from "react";
import { Phone, Linkedin, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Karan Kumar",
    role: "Founder, Eco-Reform",
    initials: "KK",
    photo: "/images/karan-kumar.jpeg",
    phone: "+91 88005 73488",
    phoneHref: "tel:+918800573488",
    linkedin:
      "https://www.linkedin.com/in/karan-kumar-61746b2b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    bio: "Karan Kumar is a social sector practitioner and Founder of Eco-Reform, an initiative working towards building climate-resilient and adaptive prisons in India. His work focuses on developing innovative, practical, and sustainable solutions to address climate challenges within correctional institutions, with particular emphasis on extreme heat, water management, waste management, and green infrastructure. He is passionate about advancing prison reform by integrating climate resilience with prisoner wellbeing and institutional sustainability.",
  },
  {
    name: "Shivani Kumari",
    role: "Co-Founder, Eco-Reform",
    initials: "SK",
    photo: "/images/shivani-kumari.png",
    phone: "+91 9997630733",
    phoneHref: "tel:+919997630733",
    linkedin:
      "https://www.linkedin.com/in/shivani-kumari-b91bb837b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    bio: "Shivani Kumari is a social development professional and Co-Founder of Eco-Reform. She is committed to advancing sustainable and inclusive approaches to prison reform, with a focus on integrating environmental responsibility, community engagement, and prisoner well-being. Through her work, she contributes to developing and strengthening interventions that promote healthier, greener, and more climate-adaptive correctional environments.",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
            Meet Team Eco-Reform
          </h2>
          <p className="text-xs sm:text-base text-[#5A6255]">
            Social sector practitioners leading climate-resilient, sustainable, and rehabilitative correctional transformation across India.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all space-y-4"
            >
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  {member.photo ? (
                    <div className="size-20 sm:size-24 rounded-full overflow-hidden border border-[#CDE5C2] ring-4 ring-[#EBF4E8] bg-white shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      aria-label={`${member.name} initials`}
                      className="size-20 sm:size-24 rounded-full bg-gradient-to-br from-[#12560E] to-[#1D7317] text-[#B9F079] font-black text-2xl flex items-center justify-center shrink-0 border border-[#CDE5C2] ring-4 ring-[#EBF4E8]"
                    >
                      {member.initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EBF4E8] text-[#12560E] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#1A1C19] leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Bio Description */}
                <p className="text-xs sm:text-sm text-[#4B5346] leading-relaxed bg-[#FAF9F5] p-3.5 sm:p-4 rounded-2xl border border-[#E2DDD2]">
                  {member.bio}
                </p>
              </div>

              {/* Contact & Social Actions */}
              <div className="pt-3 border-t border-[#F0EDE4] flex flex-wrap items-center justify-between gap-2.5 text-xs">
                <a
                  href={member.phoneHref}
                  className="inline-flex items-center gap-1.5 font-bold text-[#1A1C19] hover:text-[#12560E] bg-[#FAF9F5] hover:bg-[#EBF4E8] px-3 py-2 rounded-xl border border-[#E2DDD2] transition-colors"
                >
                  <Phone className="size-3.5 text-[#12560E] shrink-0" />
                  <span>{member.phone}</span>
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-white bg-[#12560E] hover:bg-[#0D3F0A] px-3.5 py-2 rounded-xl transition-colors"
                >
                  <Linkedin className="size-3.5 shrink-0" />
                  <span>LinkedIn</span>
                  <ExternalLink className="size-3 opacity-80 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

