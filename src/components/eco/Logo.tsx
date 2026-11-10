import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  // Height configurations tailored to the 997x325 (3.07:1) official logo asset
  const heightClasses = {
    sm: "h-9 sm:h-10",
    md: "h-10 sm:h-12 md:h-14",
    lg: "h-12 sm:h-14 md:h-16",
    xl: "h-16 sm:h-20",
  };

  return (
    <a
      href="#hero"
      aria-label="Eco-Reform Home"
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <div className="overflow-hidden rounded-md inline-flex items-center">
        <img
          src="/images/logo-eco-reform.png"
          alt="Eco-Reform official logo"
          width={997}
          height={325}
          className={`${heightClasses[size]} w-auto object-contain shrink-0`}
          loading="eager"
          decoding="async"
        />
      </div>
    </a>
  );
}
