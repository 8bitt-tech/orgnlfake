"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function PaballoBio() {
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
                        Johannesburg&apos;s Creative Force
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
                        Meet Paballo Lion
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
                        &ldquo;Influence is not just about being seen; it&apos;s about making
                        people feel something. It is driven by passion, sustained by
                        creativity, and elevated by versatility.&rdquo;
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
                    Paballo&apos;s philosophy centers on the belief that a true influencer
                    is a chameleon—able to adapt to any brand&apos;s aesthetic while
                    maintaining a fiercely authentic voice.
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
                                Boundless Creativity:
                            </strong>{" "}
                            She doesn&apos;t just follow trends; she conceptualizes visually
                            striking content that turns heads and starts conversations.
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
                                Unmatched Versatility:
                            </strong>{" "}
                            Whether she is modeling gritty urban streetwear, showcasing
                            high-end beauty glam, or creating relatable lifestyle content,
                            she seamlessly molds herself to fit the narrative.
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
                                Magnetic Passion:
                            </strong>{" "}
                            Every Reel and TikTok she posts is fueled by a genuine love for
                            content creation, which translates into high engagement and a
                            loyal community.
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
                        Currently dominating the digital space on both Instagram{" "}
                        <span style={{ color: "#f9a8d4", fontWeight: 500 }}>
                            @lion.paballo
                        </span>{" "}
                        and TikTok{" "}
                        <span style={{ color: "#a5b4fc", fontWeight: 500 }}>
                            @paballo.lion
                        </span>
                        , Paballo is a powerhouse content creator proudly represented by
                        the{" "}
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
                        Based in the vibrant heart of Johannesburg, Paballo draws daily
                        inspiration from the city&apos;s dynamic energy. However, her reach
                        and work ethic know no borders—she is highly adaptable and readily
                        available for interprovincial travel gigs, bringing her unique
                        creative spark wherever a campaign demands it.
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.75)",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Paballo specializes in premium paid promotions, using her deep
                        influence to elevate the brands she partners with. Her track record
                        speaks volumes, having built a powerhouse portfolio across the
                        fashion, beauty, retail, and lifestyle sectors.
                    </p>
                </div>

                {/* Brand Affiliations */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "24px",
                    }}
                >
                    <h3
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#ffffff",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "8px",
                        }}
                    >
                        <Briefcase style={{ width: 16, height: 16, color: "#a78bfa" }} />
                        Brand Affiliations
                    </h3>
                    <p
                        style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.55)",
                            marginBottom: "12px",
                        }}
                    >
                        She has proudly worked alongside industry-leading brands, including
                        (but not limited to):
                    </p>

                    {/* Fashion */}
                    <div
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            marginBottom: "10px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#f472b6",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                display: "block",
                                marginBottom: "6px",
                            }}
                        >
                            Fashion &amp; Streetwear
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 500,
                                lineHeight: 1.6,
                            }}
                        >
                            Big Drip SA, Urban Culture Retail, Ghetto Lifestyle, Trendz SA,
                            Ishuu Saucy, Blacked Store, Alta Gracia, Culture Collector.
                        </span>
                    </div>

                    {/* Beauty */}
                    <div
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            marginBottom: "10px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#818cf8",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                display: "block",
                                marginBottom: "6px",
                            }}
                        >
                            Beauty &amp; Hair
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 500,
                                lineHeight: 1.6,
                            }}
                        >
                            Extreme Glow SA, Emma Hair Studio, Darling, Hairpiece Company.
                        </span>
                    </div>

                    {/* Lifestyle */}
                    <div
                        style={{
                            padding: "14px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            marginBottom: "10px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#a78bfa",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                display: "block",
                                marginBottom: "6px",
                            }}
                        >
                            Lifestyle &amp; Accessories
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 500,
                                lineHeight: 1.6,
                            }}
                        >
                            Lensmart, Montes Villa, Unique Magazine.
                        </span>
                    </div>

                    <p
                        style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.45)",
                            fontStyle: "italic",
                            textAlign: "center",
                            marginTop: "12px",
                        }}
                    >
                        ...and many more!
                    </p>
                </div>
            </div>
        </div>
    );
}
