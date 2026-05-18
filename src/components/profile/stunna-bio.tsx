"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function StunnaBio() {
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
                        Lifestyle & Fashion
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
                        Meet Pearl Nkosi
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
                        &ldquo;Fashion is the armor to survive the reality of everyday life. Travel opens your heart, broadens your mind, and fills your life with stories to tell.&rdquo;
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
                    Pearl seamlessly blends high-end fashion aesthetics with breathtaking travel diaries. Her platform is a visual feast, inspiring her audience to explore the world with style and unapologetic confidence.
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
                                Brand Ambassador:
                            </strong>{" "}
                            Known for her impeccable taste, Pearl consistently elevates any brand she partners with, turning campaigns into lifestyle aspirations.
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
                            Beyond just numbers, her engaged audience trusts her fashion, beauty, and travel recommendations.
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
                        Commanding a massive audience on Instagram{" "}
                        <span style={{ color: "#f9a8d4", fontWeight: 500 }}>
                            @stunna.grl.pearl
                        </span>{" "}
                        and growing fast on TikTok{" "}
                        <span style={{ color: "#a5b4fc", fontWeight: 500 }}>
                            @stunnap02
                        </span>
                        , Pearl is a premier talent ready for any challenge.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            marginBottom: "12px",
                        }}
                    >
                        With her incredible fashion sense and travel diaries, Pearl brings international appeal to campaigns. She is the ultimate collaborator for brands looking to inject glamour, sophistication, and lifestyle luxury into their marketing strategies.
                    </p>
                </div>
            </div>
        </div>
    );
}
