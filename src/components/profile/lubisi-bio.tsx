"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function LubisiBio() {
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
                        Curated Lifestyle
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
                        Meet Juanita Lubisi
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
                        &ldquo;True style is an extension of the soul. I curate my feed to reflect the beauty I find in everyday life.&rdquo;
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
                    Juanita operates on the philosophy of visual storytelling. Every post is carefully considered, creating a cohesive and aesthetically pleasing narrative that naturally draws viewers in.
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
                                Aesthetic Focus:
                            </strong>{" "}
                            A highly curated feed that maintains a consistent, premium look and feel.
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
                                Quality Driven:
                            </strong>{" "}
                            She prioritizes high-quality, striking imagery over frequent posting, making every update highly anticipated.
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
                        Showcasing her vision on Instagram{" "}
                        <span style={{ color: "#f9a8d4", fontWeight: 500 }}>
                            @miss_lubisi
                        </span>
                        , Juanita is a refined creator represented by the{" "}
                        <strong style={{ color: "#ffffff" }}>ORGNL FAKE Agency</strong>.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Perfect for fashion, beauty, and lifestyle brands seeking an elegant ambassador, she delivers content that elevates any campaign.
                    </p>
                </div>
            </div>
        </div>
    );
}
