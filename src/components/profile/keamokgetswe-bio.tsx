"use client";

import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function KeamokgetsweBio() {
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
                        <Sparkles size={14} style={{ color: "rgba(255,255,255,0.7)" }} />
                        <span>Beauty & Body Positivity</span>
                    </div>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "white", marginBottom: "8px" }}>
                        Kea (yamkiee)
                    </h2>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "14px",
                        }}
                    >
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <MapPin size={14} />
                            South Africa
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <Briefcase size={14} />
                            Content Creator
                        </span>
                    </div>
                </div>

                {/* Main Bio */}
                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 500, color: "white", marginBottom: "12px" }}>
                        Brand Philosophy
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6, marginBottom: "16px" }}>
                        Keamokgetswe is a powerful voice for beauty, fashion, and body positivity. Through vibrant styling and confident storytelling, she creates content that inspires self-love and self-expression.
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6 }}>
                        Her platform is a sanctuary for positive energy and fierce aesthetics. She seamlessly integrates fashion trends with empowering messages, making her a trusted figure in the lifestyle and beauty space.
                    </p>
                </div>

                {/* Core Strengths */}
                <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 500, color: "white", marginBottom: "16px" }}>
                        Core Strengths
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div
                            style={{
                                padding: "12px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                <Star size={16} style={{ color: "rgba(255,255,255,0.9)" }} />
                                <span style={{ color: "white", fontWeight: 500, fontSize: "14px" }}>Body Positivity</span>
                            </div>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Empowering aesthetics</span>
                        </div>
                        <div
                            style={{
                                padding: "12px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                <Target size={16} style={{ color: "rgba(255,255,255,0.9)" }} />
                                <span style={{ color: "white", fontWeight: 500, fontSize: "14px" }}>High Reach</span>
                            </div>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Massive community</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Gradients */}
            <div
                style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-20%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
