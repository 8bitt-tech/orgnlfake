"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function OmpBio() {
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
                        South Africa&apos;s Style Icon
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
                        Meet Ompabaletse
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
                        &ldquo;Elevated Everyday Elegance. Fashion isn&apos;t just about clothes; it&apos;s about curating a lifestyle that speaks before you even enter the room.&rdquo;
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
                    Ompabaletse&apos;s philosophy revolves around blending high-fashion aesthetics with authentic lifestyle storytelling, positioning herself as a premium yet approachable voice in the beauty and fashion space.
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
                                Polished Minimalist:
                            </strong>{" "}
                            She focuses on quality over quantity, producing editorial-style imagery and highly curated fashion-forward content.
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
                                Dynamic Transitions:
                            </strong>{" "}
                            A master of short-form video, her &quot;Outfit of the Day&quot; transitions merge trend-focused relatability with high-end aesthetic value.
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
                                Premium Appeal:
                            </strong>{" "}
                            With strong engagement across both platforms, her community looks to her for sophisticated inspiration that transcends seasonal trends.
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
                        Making waves on Instagram{" "}
                        <span style={{ color: "#f9a8d4", fontWeight: 500 }}>
                            @omp.abaletse
                        </span>{" "}
                        and capturing audiences on TikTok, Ompabaletse is a distinguished creator represented by the{" "}
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
                        Known for her exceptional eye for detail, she seamlessly bridges the gap between everyday lifestyle content and editorial elegance. Her content serves as a daily mood board for thousands seeking modern refinement.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Available for premium brand partnerships, Ompabaletse brings a touch of luxury and deep engagement to every collaboration, ensuring brand messages are delivered with unparalleled style.
                    </p>
                </div>
            </div>
        </div>
    );
}
