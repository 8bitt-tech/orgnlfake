"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface TermsModalProps {
  isOpen: boolean;
  onAgree: () => void;
  onCancel: () => void;
}

export default function TermsModal({ isOpen, onAgree, onCancel }: TermsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onCancel}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              top: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 32px)",
              maxWidth: "500px",
              maxHeight: "calc(100vh - 48px)",
              background: "#0a0a0a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(249, 115, 22, 0.08)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px 12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  📋
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    Terms of Service
                  </h2>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Please read before continuing
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Terms Content */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 20px",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#d1d5db",
                minHeight: 0,
              }}
            >
              <p style={{ marginBottom: "16px" }}>
                By accessing or using{" "}
                <strong style={{ color: "#fff" }}>Orgnlfake</strong> located at{" "}
                <span style={{ color: "#f97316" }}>orgnlfake.agency</span>, you
                agree to be bound by these Terms of Service.
              </p>

              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                1. Description of Service
              </h3>
              <p style={{ marginBottom: "16px" }}>
                Orgnlfake provides a platform for content creators to build,
                host, and share digital media kits. Through our Service,
                creators can securely connect their third-party social media
                accounts to automatically display their public profile
                information and analytics to prospective clients and brands.
              </p>

              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                2. Account Registration
              </h3>
              <p style={{ marginBottom: "16px" }}>
                You must be at least 18 years old to create an account. You
                agree to provide accurate information and are responsible for
                the security of your login credentials.
              </p>

              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                3. Third-Party API Services
              </h3>
              <p style={{ marginBottom: "8px" }}>
                By linking your accounts, you also agree to:
              </p>
              <ul
                style={{
                  paddingLeft: "20px",
                  marginBottom: "16px",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  <a
                    href="https://www.youtube.com/t/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "underline" }}
                  >
                    YouTube Terms of Service
                  </a>
                </li>
                <li style={{ marginBottom: "4px" }}>
                  <a
                    href="https://www.facebook.com/terms.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "underline" }}
                  >
                    Meta&apos;s Terms of Service
                  </a>
                </li>
                <li style={{ marginBottom: "4px" }}>
                  <a
                    href="https://www.tiktok.com/legal/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "underline" }}
                  >
                    TikTok&apos;s Terms of Service
                  </a>
                </li>
              </ul>

              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                4. Intellectual Property
              </h3>
              <p style={{ marginBottom: "16px" }}>
                You retain all ownership rights to your content. By uploading
                content, you grant us a worldwide, non-exclusive, royalty-free
                license to host, store, and display your media kit publicly at
                your direction. The platform itself remains the exclusive
                property of Orgnlfake.
              </p>

              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                5. Disclaimer
              </h3>
              <p
                style={{
                  marginBottom: "16px",
                  fontSize: "0.78rem",
                  color: "#9ca3af",
                }}
              >
                THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; BASIS. WE
                DISCLAIM ALL WARRANTIES. WE ARE NOT RESPONSIBLE FOR LOST BRAND
                DEALS, SPONSORSHIPS, OR INCOME RESULTING FROM THE USE OF OUR
                SERVICE.
              </p>

              <p
                style={{
                  marginTop: "20px",
                  fontSize: "0.8rem",
                  color: "#6b7280",
                }}
              >
                For the full terms, visit{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  style={{ color: "#f97316", textDecoration: "underline" }}
                >
                  orgnlfake.agency/terms
                </Link>{" "}
                and our{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  style={{ color: "#f97316", textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                padding: "14px 20px 16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
                flexShrink: 0,
              }}
            >
              <button
                onClick={onCancel}
                style={{
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "transparent",
                  color: "#9ca3af",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                Cancel
              </button>
              <button
                onClick={onAgree}
                style={{
                  padding: "10px 28px",
                  borderRadius: "9999px",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 15px rgba(249, 115, 22, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(249, 115, 22, 0.5)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(249, 115, 22, 0.3)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
