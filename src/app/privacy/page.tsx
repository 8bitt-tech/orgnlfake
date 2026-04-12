import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Orgnlfake",
  description: "Privacy Policy for Orgnlfake creative agency platform.",
};

export default function PrivacyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#e5e7eb",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "80px 24px 120px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <Link
            href="/"
            style={{
              fontSize: "12px",
              color: "#6b7280",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            ← Back to Home
          </Link>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#ffffff",
              marginTop: "24px",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Effective Date: April 12, 2026
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            lineHeight: 1.8,
            fontSize: "0.95rem",
            color: "#d1d5db",
          }}
        >
          <p style={{ marginBottom: "24px" }}>
            At <strong style={{ color: "#fff" }}>Orgnlfake</strong>, we are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website{" "}
            <a
              href="https://orgnlfake.agency"
              style={{ color: "#f97316", textDecoration: "underline" }}
            >
              https://orgnlfake.agency
            </a>{" "}
            and use our services.
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>
              Personal Information You Provide:
            </strong>{" "}
            When you register for an account, submit a creator application, or
            contact us, we may collect your name, email address, phone number,
            date of birth, social media handles, and any other information you
            voluntarily provide.
          </p>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>
              Third-Party API Data:
            </strong>{" "}
            When you connect your social media accounts (e.g., YouTube,
            Instagram, TikTok), we access and store your publicly available
            profile information and analytics data (such as follower counts,
            engagement rates, and content performance metrics) as provided by
            those platforms&apos; APIs.
          </p>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>
              Automatically Collected Data:
            </strong>{" "}
            We may automatically collect certain information when you visit our
            website, including your IP address, browser type, operating system,
            referring URLs, and browsing behavior.
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            2. How We Use Your Information
          </h2>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "24px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              To create and manage your account and media kit.
            </li>
            <li style={{ marginBottom: "8px" }}>
              To display your public analytics and profile data within your
              media kit.
            </li>
            <li style={{ marginBottom: "8px" }}>
              To communicate with you regarding your account, applications, or
              inquiries.
            </li>
            <li style={{ marginBottom: "8px" }}>
              To improve our platform, services, and user experience.
            </li>
            <li style={{ marginBottom: "8px" }}>
              To comply with legal obligations and enforce our Terms of Service.
            </li>
          </ul>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            3. How We Share Your Information
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We do not sell your personal information. We may share your
            information with third-party service providers who assist us in
            operating our platform, subject to confidentiality obligations. We
            may also disclose your information if required by law or to protect
            our rights.
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            4. Data Security
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We implement reasonable administrative, technical, and physical
            security measures to protect your personal information. However, no
            method of transmission over the Internet or electronic storage is
            100% secure.
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            5. Your Rights
          </h2>
          <p style={{ marginBottom: "24px" }}>
            You have the right to access, correct, or delete your personal data
            at any time. You may also disconnect your third-party social media
            accounts from our Service. To exercise these rights, please contact
            us at{" "}
            <a
              href="mailto:info@orgnlfake.agency"
              style={{ color: "#f97316", textDecoration: "underline" }}
            >
              info@orgnlfake.agency
            </a>
            .
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            6. Third-Party Services
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Our Service integrates with third-party platforms. Your use of these
            integrations is also subject to those platforms&apos; own privacy
            policies:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "24px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                Google Privacy Policy
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                Meta Privacy Policy
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="https://www.tiktok.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                TikTok Privacy Policy
              </a>
            </li>
          </ul>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            7. Changes to This Policy
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date.
          </p>

          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            8. Contact Us
          </h2>
          <p style={{ marginBottom: "8px" }}>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#fff" }}>Email:</strong>{" "}
            <a
              href="mailto:info@orgnlfake.agency"
              style={{ color: "#f97316", textDecoration: "underline" }}
            >
              info@orgnlfake.agency
            </a>
          </p>
          <p>
            <strong style={{ color: "#fff" }}>Website:</strong>{" "}
            <a
              href="https://orgnlfake.agency"
              style={{ color: "#f97316", textDecoration: "underline" }}
            >
              https://orgnlfake.agency
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
