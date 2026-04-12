import AnimatedPortfolioGrid from "@/components/AnimatedPortfolioGrid";
import dynamic from "next/dynamic";
import TheCollection from "@/components/TheCollection";

const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"), { ssr: false });

export default function PortfolioPage() {
    return (
        <main>
            <AnimatedPortfolioGrid />
            <PortfolioSection />
            <TheCollection />
        </main>
    );
}
