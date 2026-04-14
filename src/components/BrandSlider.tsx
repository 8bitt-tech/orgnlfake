"use client";

import React from "react";
import "./BrandSlider.css";

const ALL_LOGOS = [
  "300878282_1867217103448933_7163320389078011465_n.jpg",
  "363274508_6549548101804058_300255831225314521_n.jpg",
  "435676185_819803636849251_8651659396247034867_n.jpg",
  "581126749_18062582504552984_1742657295106621245_n.jpg",
  "Screenshot 2026-04-13 at 22.02.15.png",
  "Screenshot 2026-04-13 at 22.03.43.png",
  "Screenshot 2026-04-13 at 22.05.26.png",
  "Screenshot 2026-04-13 at 22.06.18.png",
  "Screenshot 2026-04-13 at 22.07.24.png",
  "Screenshot 2026-04-13 at 22.22.12.png",
  "Screenshot 2026-04-13 at 22.23.10.png",
  "Screenshot 2026-04-13 at 22.33.36.png",
  "Screenshot 2026-04-13 at 22.34.49.png",
  "Screenshot 2026-04-13 at 22.35.36.png",
  "Screenshot 2026-04-13 at 22.45.29.png",
  "Screenshot 2026-04-13 at 22.46.04.png",
  "Screenshot 2026-04-13 at 22.47.53.png"
];

const ROW_1 = ALL_LOGOS.slice(0, 9);
const ROW_2 = ALL_LOGOS.slice(9);

export default function BrandSlider() {
  return (
    <div className="logo-slider-section">
      <div className="logo-slider-header no-reveal">
        <p className="logo-slider-tagline">Trusted Partnerships</p>
        <h2 className="logo-slider-title">
          Brands We&apos;ve <em>Collaborated</em> With
        </h2>
        <div className="logo-slider-divider" />
      </div>

      <div className="logo-slider-container">
        {/* ROW 1: Moves Left */}
        <div className="marquee-brands">
          <div className="track-brands move-left">
            {[...ROW_1, ...ROW_1].map((logo, idx) => (
              <div className="logo-placeholder" key={`row1-${idx}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brands/${encodeURIComponent(logo)}`}
                  alt={`Brand Logo ${(idx % ROW_1.length) + 1}`}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="marquee-brands">
          <div className="track-brands move-right">
            {[...ROW_2, ...ROW_2].map((logo, idx) => (
              <div className="logo-placeholder" key={`row2-${idx}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brands/${encodeURIComponent(logo)}`}
                  alt={`Brand Logo ${(idx % ROW_2.length) + 10}`}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
