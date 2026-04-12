import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Orgnlfake",
  description: "Terms of Service for Orgnlfake creative agency platform.",
};

export default function TermsPage() {
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
            Terms of Service
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
            Welcome to <strong style={{ color: "#fff" }}>Orgnlfake</strong>{" "}
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or
            using our website located at{" "}
            <a
              href="https://orgnlfake.agency"
              style={{ color: "#f97316", textDecoration: "underline" }}
            >
              https://orgnlfake.agency
            </a>{" "}
            (the &quot;Service&quot;), you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms,
            please do not use our Service.
          </p>

          {/* Section 1 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            1. Description of Service
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Orgnlfake provides a platform for content creators to build, host,
            and share digital media kits. Through our Service, creators can
            securely connect their third-party social media accounts to
            automatically display their public profile information and analytics
            (e.g., follower counts, engagement rates) to prospective clients and
            brands.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            2. Account Registration and Security
          </h2>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>Eligibility:</strong> You must be
            at least 18 years old (or the age of legal majority in your
            jurisdiction) to create an account.
          </p>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>Account Information:</strong> You
            agree to provide accurate, current, and complete information during
            registration and keep your account information updated.
          </p>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>Security:</strong> You are
            responsible for maintaining the confidentiality of your account login
            credentials. You are solely responsible for all activities that occur
            under your account. You must notify us immediately of any
            unauthorized use of your account.
          </p>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            3. Third-Party API Services
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Our Service allows you to connect your social media accounts via
            Application Programming Interfaces (APIs) provided by third parties
            (e.g., YouTube, Meta, TikTok). By linking your accounts, you
            acknowledge and agree to the following:
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#fff" }}>Third-Party Terms:</strong> Your
            use of these third-party integrations is also governed by their
            respective Terms of Service.
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "16px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              By connecting your YouTube account, you agree to be bound by the{" "}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                YouTube Terms of Service
              </a>
              .
            </li>
            <li style={{ marginBottom: "8px" }}>
              By connecting your Meta (Instagram/Facebook) account, you agree to{" "}
              <a
                href="https://www.facebook.com/terms.php"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                Meta&apos;s Terms of Service
              </a>
              .
            </li>
            <li style={{ marginBottom: "8px" }}>
              By connecting your TikTok account, you agree to{" "}
              <a
                href="https://www.tiktok.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                TikTok&apos;s Terms of Service
              </a>
              .
            </li>
          </ul>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>API Data Accuracy:</strong> We
            display the analytics data exactly as it is provided to us by the
            third-party platforms. We are not responsible for any delays,
            inaccuracies, or errors in the data provided by these external APIs.
          </p>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>API Access:</strong> We reserve
            the right to modify, suspend, or discontinue any third-party API
            integration at any time if the third-party platform changes their
            terms, limits our access, or for any other reason.
          </p>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            4. User Conduct and Responsibilities
          </h2>
          <p style={{ marginBottom: "12px" }}>
            You agree not to use the Service to:
          </p>
          <ul
            style={{
              paddingLeft: "24px",
              marginBottom: "24px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              Violate any applicable local, state, national, or international
              law or regulation.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Misrepresent your identity, affiliation, or falsely artificially
              inflate your social media statistics.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Distribute viruses, malware, or any other harmful computer code.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Attempt to reverse engineer, scrape, or bypass any security
              measures or API limitations on our Service.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Upload any content to your media kit that is illegal, defamatory,
              harassing, explicitly obscene, or infringes on the intellectual
              property rights of others.
            </li>
          </ul>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            5. Intellectual Property
          </h2>
          <p style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#fff" }}>Your Content:</strong> You retain
            all ownership rights to the content, text, and images you upload to
            your media kit. By uploading content, you grant us a worldwide,
            non-exclusive, royalty-free license to host, store, and display your
            media kit publicly at your direction.
          </p>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "#fff" }}>Our Platform:</strong> The
            Service, including its code, design, layout, and branding, is the
            exclusive property of Orgnlfake. You may not copy, modify, or
            distribute our intellectual property without our prior written
            consent.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            6. Termination
          </h2>
          <p style={{ marginBottom: "12px" }}>
            We reserve the right to suspend or terminate your account and access
            to the Service at our sole discretion, without prior notice or
            liability, for any reason, including but not limited to a breach of
            these Terms or a violation of our third-party API partners&apos;
            policies.
          </p>
          <p style={{ marginBottom: "24px" }}>
            You may terminate your account at any time by deleting it from your
            account dashboard or contacting us directly.
          </p>

          {/* Section 7 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            7. Disclaimer of Warranties
          </h2>
          <p
            style={{
              marginBottom: "24px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              letterSpacing: "0.02em",
              color: "#9ca3af",
            }}
          >
            THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND
            &quot;AS-AVAILABLE&quot; BASIS. WE DISCLAIM ALL WARRANTIES, EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. We do not guarantee that the Service will be
            uninterrupted, error-free, or completely secure. We are not
            responsible for lost brand deals, sponsorships, or income resulting
            from the use or inability to use our Service.
          </p>

          {/* Section 8 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            8. Limitation of Liability
          </h2>
          <p
            style={{
              marginBottom: "24px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              letterSpacing: "0.02em",
              color: "#9ca3af",
            }}
          >
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ORGNLFAKE,
            ITS DIRECTORS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
            WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR GOODWILL,
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
          </p>

          {/* Section 9 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            9. Governing Law
          </h2>
          <p style={{ marginBottom: "24px" }}>
            These Terms shall be governed by and construed in accordance with the
            laws of South Africa, without regard to its conflict of law
            provisions.
          </p>

          {/* Section 10 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            10. Changes to the Terms
          </h2>
          <p style={{ marginBottom: "24px" }}>
            We reserve the right to modify or replace these Terms at any time.
            We will provide notice of any material changes by posting the
            updated Terms on this page and updating the &quot;Effective
            Date.&quot; Your continued use of the Service after any such changes
            constitutes your acceptance of the new Terms.
          </p>

          {/* Section 11 */}
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "40px",
              marginBottom: "12px",
            }}
          >
            11. Contact Us
          </h2>
          <p style={{ marginBottom: "8px" }}>
            If you have any questions about these Terms, please contact us at:
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
