"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function BarbiieBio() {
    return (
        <div
            className="no-reveal"
            style={{
                padding: "24px",
                borderRadius: "16px",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                marginTop: "24px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <div style={{ marginBottom: "24px" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "4px 12px",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.9)",
                            marginBottom: "12px",
                        }}
                    >
                        <MapPin style={{ width: 12, height: 12, color: "#f472b6" }} />
                        South Africa's Digital Muse
                    </div>
                    <h2
                        style={{
                            fontSize: "28px",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.2,
                            margin: 0,
                        }}
                    >
                        Meet Barbiie Stallion
                    </h2>
                </div>

                {/* Quote */}
                <div
                    style={{
                        borderLeft: "2px solid rgba(236,72,153,0.5)",
                        paddingLeft: "16px",
                        marginBottom: "24px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "17px",
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.9)",
                            fontStyle: "italic",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        &ldquo;True elegance is a mindset. It's about taking up space boldly, living authentically, and turning everyday moments into luxury experiences.&rdquo;
                    </p>
                </div>

                {/* Philosophy */}
                <p
                    style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.75)",
                        lineHeight: 1.7,
                        marginBottom: "16px",
                    }}
                >
                    Barbiie's philosophy revolves around empowering her audience through unapologetic confidence. She seamlessly blends high-fashion aesthetics with relatable authenticity, creating an aspirational yet accessible digital footprint.
                </p>

                {/* Strong Points */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                    <li
                        style={{
                            display: "flex",
                            gap: "12px",
                            fontSize: "14px",
                            marginBottom: "16px",
                        }}
                    >
                        <Sparkles
                            style={{
                                width: 20,
                                height: 20,
                                color: "#facc15",
                                flexShrink: 0,
                                marginTop: 2,
                            }}
                        />
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                            <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>
                                Premium Aesthetics:
                            </strong>{" "}
                            Known for her impeccable taste, Barbiie consistently delivers high-quality, visually stunning content that elevates any brand she partners with.
                        </p>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            gap: "12px",
                            fontSize: "14px",
                            marginBottom: "16px",
                        }}
                    >
                        <Target
                            style={{
                                width: 20,
                                height: 20,
                                color: "#818cf8",
                                flexShrink: 0,
                                marginTop: 2,
                            }}
                        />
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                            <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>
                                High-Converting Influence:
                            </strong>{" "}
                            Beyond just numbers, her engaged audience trusts her recommendations. From luxury beauty to lifestyle brands, her campaigns drive measurable impact.
                        </p>
                    </li>
                    <li
                        style={{
                            display: "flex",
                            gap: "12px",
                            fontSize: "14px",
                            marginBottom: "0",
                        }}
                    >
                        <Star
                            style={{
                                width: 20,
                                height: 20,
                                color: "#f472b6",
                                flexShrink: 0,
                                marginTop: 2,
                            }}
                        />
                        <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                            <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>
                                Trendsetter Persona:
                            </strong>{" "}
                            She doesn't follow the wave; she sets it. Her viral TikToks and curated Instagram grids are a blueprint for modern digital influence.
                        </p>
                    </li>
                </ul>

                {/* Bio Body */}
                <div style={{ marginBottom: "24px" }}>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            marginBottom: "12px",
                        }}
                    >
                        Commanding a massive audience of over 323K on Instagram{" "}
                        <span style={{ color: "#f9a8d4", fontWeight: 500 }}>
                            @barbiie.stallion
                        </span>{" "}
                        and nearly 300K on TikTok{" "}
                        <span style={{ color: "#a5b4fc", fontWeight: 500 }}>
                            @barbiiestallion
                        </span>
                        , Barbiie is a premier talent exclusively represented by the{" "}
                        <strong style={{ color: "#ffffff" }}>ORGNL FAKE Agency</strong>.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            marginBottom: "12px",
                        }}
                    >
                        With her roots in South Africa, Barbiie brings international appeal to local campaigns. She is the ultimate collaborator for brands looking to inject glamour, sophistication, and a massive reach into their marketing strategies.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Whether it's an exclusive product launch, a luxury travel vlog, or a high-fashion editorial spread, Barbiie Stallion delivers nothing short of excellence.
                    </p>
                </div>
            </div>
        </div>
    );
}
