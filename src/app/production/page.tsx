"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PortfolioGallery from "@/components/PortfolioGallery";
import "../landing.css";

export default function ProductionPage() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Mouse cursor tracking
    useEffect(() => {
        const mv = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", mv);
        return () => window.removeEventListener("mousemove", mv);
    }, []);

    return (
        <div className="landing-body pt-12 pb-24">
            <div className="landing-cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />



            {/* ── Interactive Portfolio Gallery ── */}
            <PortfolioGallery />

            {/* ── The In-House Synergy (bottom) ── */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                style={{
                    maxWidth: "1000px",
                    margin: "150px auto 100px",
                    padding: "140px 40px",
                    textAlign: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Creators Portfolios/@they_adore_tshego/Fashion Editorial/_MG_0085.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '24px',
                    border: '1px solid rgba(0, 255, 128, 0.15)',
                    boxShadow: '0 0 200px -60px rgba(0, 255, 128, 0.25), 0 0 80px -20px rgba(0, 255, 128, 0.15), inset 0 0 80px rgba(0, 255, 128, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        display: "block",
                        fontSize: "11px",
                        letterSpacing: "0.5em",
                        textTransform: "uppercase",
                        color: "#c9a86c",
                        marginBottom: "24px",
                    }}
                >
                    Our Model
                </motion.span>
                <h2 className="section-title" style={{ marginBottom: "30px" }}>The In-House Synergy</h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "20px" }}
                >
                    Every visual asset within the Orgnlfake portfolio is a product of our dedicated in-house studio.
                    We believe that true creative synergy cannot be outsourced. When a creator steps onto our set,
                    they aren&apos;t entering a workspace—they are entering a laboratory of ideas. The publishing rights
                    of our in-house material are shared between the house and the creator, ensuring that the talent
                    who put their soul into the frame has as much right to the final product as the person behind
                    the lens.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.8 }}
                    style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
                >
                    Our production style is raw, intentional, and deeply respectful of the individual. We use our
                    studio as a training ground where creators learn the technicalities of the industry—understanding
                    lighting, mastering angles, and developing the social confidence required for high-stakes campaigns.
                </motion.p>
            </motion.section>


        </div>
    );
}
