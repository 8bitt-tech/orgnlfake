import { createClient } from "@/lib/supabase/server";
import { CreatorCard } from "@/components/creators/creator-card";
import { CreatorSearch } from "@/components/creators/creator-search";
import { getCreatorPortfolioAssets, getCreatorScatterAssets } from "@/lib/portfolio-utils";

export const metadata = {
    title: "Content Creators | Orgnlfake",
    description: "Media Kits: Analytics, Portfolios, Affiliations, & Rates",
};

export default async function TalentPage() {
    const supabase = (await createClient()) as any;

    // Define the shape of the data we're selecting
    type CreatorRow = {
        id: string;
        username: string | null;
        avatar?: string;
        avatar_url?: string | null;
        media_assets: any;
        social_stats: any;
        tiktok_stats?: any;
        facebook_stats?: any;
        youtube_stats?: any;
        created_at?: string | null;
        updated_at?: string | null;
    };

    const { data: creators, error } = await supabase
        .from("profiles")
        .select("id, username, media_assets, social_stats")
        .eq("status", "active")
        .order("created_at", { ascending: false }) as { data: CreatorRow[] | null; error: unknown };

    let creatorsData: CreatorRow[] | null = creators;
    let isMockData = false;

    if (error || !creators || creators.length === 0) {
        console.warn("Error fetching creators, falling back to mock data:", error);
        isMockData = true;
        creatorsData = [
            {
                id: "creator-estoy-kiki",
                username: "estoy.kiki",
                avatar: "/Profile photos/@estoy.kiki.jpg",
                media_assets: [
                    "/Creators Portfolios/@estoy.kiki/lifestyle_1.jpg",
                    "/Creators Portfolios/@estoy.kiki/Fashion Editorial/fashion_1.jpg",
                    "/Creators Portfolios/@estoy.kiki/travel_1.jpg"
                ],
                social_stats: { followers: 3978, engagement_rate: "18.1%", total_reach: 7500 }
            },
            {
                id: "creator-gorg-fox",
                username: "gorg_fox.rsa",
                avatar: "/images/profiles/gorg_fox.rsa.jpg",
                media_assets: ["/mediakits/2025-08-19-at-01.29.jpg"],
                social_stats: { followers: 37000, engagement_rate: "6.2%", total_reach: 55000 }
            },
            {
                id: "creator-momobabes21",
                username: "momobabes21",
                avatar: "/images/profiles/momobabes21.jpg",
                media_assets: ["/mediakits/_MG_0048 2.jpg"],
                social_stats: { followers: 64000, engagement_rate: "8.1%", total_reach: 95000 }
            },
            {
                id: "creator-lion-paballo",
                username: "lion.paballo",
                avatar: "/media/photos/lion_paballo.jpg",
                media_assets: ["/mediakits/_MG_0048.jpg"],
                social_stats: { followers: 102000, engagement_rate: "5.4%", total_reach: 155000 },
                tiktok_stats: { followers: 125600, engagement_rate: "8.5%", total_reach: 2500000 },
                facebook_stats: { followers: 4800, engagement_rate: "3.2%", total_reach: 12000 }
            },
            {
                id: "creator-barbiie-stallion",
                username: "barbiie.stallion",
                avatar: "/media/photos/barbiie_stallion.jpg",
                media_assets: ["/mediakits/9.jpg"],
                social_stats: { followers: 323000, engagement_rate: "4.8%", total_reach: 500000 },
                tiktok_stats: { followers: 299700, engagement_rate: "9.5%", total_reach: 5300000 }
            },
            {
                id: "creator-boity-tlhasi",
                username: "boity_tlhasi",
                avatar: "/images/profiles/boity_tlhasi.jpg",
                media_assets: ["/mediakits/@boity_tlhasi.jpg"],
                social_stats: { followers: 2709, engagement_rate: "8.5%", total_reach: 4100 }
            },
            {
                id: "creator-koketso-m",
                username: "koketso_.m_",
                avatar: "/images/profiles/koketso_.m_.jpg",
                media_assets: [
                    "/Creators Portfolios/Koketso/gwekhjbeeher.jpg",
                    "/Creators Portfolios/Koketso/hbsdhshe.jpg",
                    "/Creators Portfolios/Koketso/hydtydrrr.jpg",
                    "/Creators Portfolios/Koketso/jhgsfjkhas.jpg",
                    "/Creators Portfolios/Koketso/jkhasfbsjhhd.jpg",
                    "/Creators Portfolios/Koketso/jyfydccfg.jpg",
                    "/Creators Portfolios/Koketso/khbsdkhbvds.jpg",
                    "/Creators Portfolios/Koketso/khzvb.jpg",
                    "/Creators Portfolios/Koketso/kokie-finalle.jpg",
                    "/Creators Portfolios/Koketso/kshgfhugd.jpg",
                    "/Creators Portfolios/Koketso/ugsdjhdhdh.jpg"
                ],
                social_stats: { followers: 15000, engagement_rate: "6.2%", total_reach: 22000 }
            },
            {
                id: "creator-zeloew",
                username: "zeloew",
                avatar: "/images/profiles/zeloew.jpg",
                media_assets: ["/mediakits/@zeloew.jpg"],
                social_stats: { followers: 9895, engagement_rate: "7.1%", total_reach: 14500 }
            },
            {
                id: "creator-luciazizipho",
                username: "luciazizipho",
                avatar: "/images/profiles/luciazizipho.jpg",
                media_assets: ["/mediakits/@luciazizipho.jpg"],
                social_stats: { followers: 17000, engagement_rate: "5.8%", total_reach: 25000 }
            },
            {
                id: "creator-thandeka-palesa",
                username: "thandeka_palesa",
                avatar: "/images/profiles/thandeka_palesa.jpg",
                media_assets: ["/Placeholders/greenplaceholder.png"],
                social_stats: { followers: 57000, engagement_rate: "4.5%", total_reach: 82000 }
            },
            {
                id: "creator-taunyane-tumisang",
                username: "taunyane_tumisang",
                avatar: "/images/profiles/taunyane_tumisang.jpg",
                media_assets: ["/mediakits/@taunyane_tumisang.jpg"],
                social_stats: { followers: 72000, engagement_rate: "4.2%", total_reach: 105000 }
            },
            {
                id: "creator-booysen",
                username: "_booysen",
                avatar: "/Profile photos/@_booysen.jpg",
                media_assets: ["/mediakits/@_booysen.jpg"],
                social_stats: { followers: 12500, engagement_rate: "6.5%", total_reach: 18000 }
            },
            {
                id: "creator-bellaswrld",
                username: "__bellaswrld",
                avatar: "/Profile photos/@__bellaswrld.jpg",
                media_assets: ["/mediakits/@__bellaswrld.jpg"],
                social_stats: { followers: 24000, engagement_rate: "5.8%", total_reach: 36000 }
            },
            {
                id: "creator-they-adore-tshego",
                username: "they_adore_tshego",
                avatar: "/Profile photos/@they_adore_tshego.jpg",
                media_assets: ["/mediakits/@they_adore_tshego.jpg"],
                social_stats: { followers: 41000, engagement_rate: "7.2%", total_reach: 62000 }
            },
            {
                id: "creator-anathii-peter",
                username: "anathii_peter",
                avatar: "/Profile photos/@anathii_peter.jpg",
                media_assets: ["/Placeholders/blueplaceholder.png"],
                social_stats: { followers: 17000, engagement_rate: "8.5%", total_reach: 25000 }
            },
            {
                id: "creator-patricia-boity",
                username: "patriciaboity",
                avatar: "/creators/patriciaboity/avatar.webp",
                media_assets: [
                    "/creators/patriciaboity/main.webp",
                    "/creators/patriciaboity/lifestyle1.webp",
                    "/creators/patriciaboity/fashion.webp",
                    "/creators/patriciaboity/beauty.webp"
                ],
                social_stats: { followers: 199000, engagement_rate: "5.4%", total_reach: 350000 },
                tiktok_stats: { followers: 1200000, engagement_rate: "9.2%", total_reach: 23300000 },
                facebook_stats: { followers: 258800, engagement_rate: "4.5%", total_reach: 750000 },
                youtube_stats: { followers: 4270, engagement_rate: "6.1%", total_reach: 12000 }
            },
            {
                id: "creator-omp-abaletse",
                username: "omp.abaletse",
                avatar: "/Creators Portfolios/omp.abaletse/avatar.jpg",
                media_assets: [
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428331655806271_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428345807401652_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428357115226198_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428365965206449_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428368339206705_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777161244_3883428376811729650_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777127734_3883149256877947884_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777127734_3883149271272802436_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777127734_3883149284853988532_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777127734_3883149313199106681_59900339471.jpg",
                    "/Creators Portfolios/omp.abaletse/omp.abaletse_1777127734_3883149325505176160_59900339471.jpg"
                ],
                social_stats: { followers: 151000, engagement_rate: "6.5%", total_reach: 200000 },
                tiktok_stats: { followers: 115100, engagement_rate: "10.5%", total_reach: 1500000 }
            },
            {
                id: "creator-cardenic",
                username: "cardenic",
                avatar: "/Creators Portfolios/cardenic/avatar.jpg",
                media_assets: ["/Creators Portfolios/cardenic/avatar.jpg"],
                social_stats: { followers: 2349, engagement_rate: "7.2%", total_reach: 5000 }
            },
            {
                id: "creator-miss-lubisi",
                username: "miss_lubisi",
                avatar: "/Creators Portfolios/miss_lubisi/avatar.jpg",
                media_assets: ["/Creators Portfolios/miss_lubisi/avatar.jpg"],
                social_stats: { followers: 8057, engagement_rate: "6.8%", total_reach: 18000 }
            },
            {
                id: "creator-simply-gugulethu",
                username: "simply._gugulethu",
                avatar: "/Creators Portfolios/simply_gugulethu/avatar.jpg",
                media_assets: ["/Creators Portfolios/simply_gugulethu/avatar.jpg"],
                social_stats: { followers: 1155, engagement_rate: "8.5%", total_reach: 2500 }
            },
            {
                id: "creator-kaarabo-o",
                username: "kaarabo.o__",
                avatar: "/Creators Portfolios/kaarabo.o__/avatar.jpg",
                media_assets: ["/Creators Portfolios/kaarabo.o__/avatar.jpg"],
                social_stats: { followers: 2644, engagement_rate: "8.5%", total_reach: 5000 }
            },
            {
                id: "creator-namedkeamokgetswe",
                username: "namedkeamokgetswe",
                avatar: "/Creators Portfolios/namedkeamokgetswe/avatar.jpg",
                media_assets: ["/Creators Portfolios/namedkeamokgetswe/avatar.jpg"],
                social_stats: { followers: 130000, engagement_rate: "7.5%", total_reach: 200000 }
            },
            {
                id: "creator-stunna-grl-pearl",
                username: "stunna.grl.pearl",
                avatar: "/Placeholders/blueplaceholder.png",
                media_assets: ["/Placeholders/blueplaceholder.png"],
                social_stats: { followers: 182500, engagement_rate: "5.5%", total_reach: 250000 },
                tiktok_stats: { followers: 4259, engagement_rate: "8.5%", total_reach: 50000 }
            }
        ];
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8 text-center" style={{ borderBottom: "1px solid #1a1a1a", paddingBottom: "60px", marginBottom: "60px" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <p style={{
                        fontSize: "11px",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.5em",
                        color: "#c9a86c",
                        marginBottom: "24px",
                    }}>
                        The Talent Board
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                        The Media Kit Hub
                    </h1>
                </div>

                {/* Search Bar */}
                <CreatorSearch className="max-w-2xl mx-auto" />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-sm text-muted-foreground">Featured Creators</span>
                <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* The mock data fallback note was removed for a cleaner UI */}

            {!creatorsData || creatorsData.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center border rounded-xl border-dashed p-8">
                    <h3 className="text-xl font-medium mb-2">No creators found</h3>
                    <p className="text-muted-foreground">Check back later for new featured creators.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {await Promise.all(creatorsData.map(async (creator) => {
                        // Dynamically load media assets from filesystem overriding mock
                        const { scatterImages } = await getCreatorScatterAssets(creator.username || "");
                        let previewImages = (scatterImages || [])
                            .filter(url => !url.match(/\.(mp4|mov|webm)$/i))
                            .slice(0, 3);
                        
                        // Fallback to category grid if no scatter images exist
                        if (previewImages.length === 0) {
                            const dynamicAssets = await getCreatorPortfolioAssets(creator.username || "");
                            previewImages = dynamicAssets
                                .filter(a => typeof a.url === 'string' && !a.url.toLowerCase().includes('placeholder') && !a.url.match(/\.(mp4|mov|webm)$/i))
                                .map(a => a.url)
                                .slice(0, 3);
                        }

                        const avatar = creator.avatar;

                        const socialStats = creator.social_stats as {
                            followers?: number;
                            engagement_rate?: string;
                            total_reach?: number;
                        } | null;

                        const tiktokStats = creator.tiktok_stats as {
                            followers?: number;
                            engagement_rate?: string;
                            total_reach?: number;
                        } | null;

                        const facebookStats = creator.facebook_stats as {
                            followers?: number;
                            engagement_rate?: string;
                            total_reach?: number;
                        } | null;

                        return (
                            <CreatorCard
                                key={creator.id}
                                username={creator.username || "Creator"}
                                avatar={avatar}
                                images={previewImages.length > 0 ? previewImages : ["/Placeholders/blueplaceholder.png"]}
                                socialStats={socialStats}
                                tiktokStats={tiktokStats}
                                facebookStats={facebookStats}
                            />
                        );
                    }))}
                </div>
            )}

            {/* Description Section */}
            <div className="mt-16 text-center" style={{ borderTop: "1px solid #1a1a1a", paddingTop: "60px", maxWidth: "800px", margin: "60px auto 0" }}>
                <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", lineHeight: 1.9, color: "#888", marginBottom: "20px" }}>
                    The Orgnlfake Talent Board is a living tapestry of South African culture. We believe that creativity has no single look, no single background, and no single story. Our roster is a collection of diverse voices—Models, Influencers, and Content Creators who have found a home where their individuality is their greatest asset. We have stripped away the gatekeeping of the 'fake' agency model to provide Brands with direct, data-backed access to our collective.
                </p>
                <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", lineHeight: 1.9, color: "#888", marginBottom: "20px" }}>
                    Every profile here is a comprehensive <strong style={{ color: "#e8e8e8" }}>Media Kit</strong> built on four unshakeable pillars: <strong style={{ color: "#e8e8e8" }}>Integrated Analytics</strong> that provide a real-time pulse on reach and engagement; a <strong style={{ color: "#e8e8e8" }}>Professional Portfolio</strong> of work shot right here in our studio; a history of <strong style={{ color: "#e8e8e8" }}>Brand Affiliations</strong> that prove industry experience; and transparent, creator-led <strong style={{ color: "#e8e8e8" }}>Rates</strong>.
                </p>
                <p style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", lineHeight: 1.9, color: "#888", marginBottom: "40px" }}>
                    Many of the faces you see here began their journey with us as beginners. Today, they stand as independent business partners. This isn't just a list of names; it's a directory of empowered partners ready to bring your brand to life with authenticity and data-driven precision.
                </p>
            </div>
            {/* Collaborate Section moved from Home */}
            <section id="contact" className="mt-20 pt-20 border-t border-[#1a1a1a]">
                <div className="contact-wrapper" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                <h2 className="section-title" style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", marginBottom: "10px" }}>Collaborate</h2>
                <p style={{ marginBottom: "40px", color: "var(--text-muted)" }}>Available for bookings worldwide.</p>
                <form>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px" }}>
                    <input type="text" placeholder="Name" style={{ width: "100%", background: "#111", border: "1px solid #222", padding: "20px", color: "white" }} />
                    <input type="email" placeholder="Email" style={{ width: "100%", background: "#111", border: "1px solid #222", padding: "20px", color: "white" }} />
                    </div>
                    <input type="text" placeholder="Subject / Category" style={{ width: "100%", background: "#111", border: "1px solid #222", padding: "20px", color: "white", marginBottom: "15px" }} />
                    <textarea rows={6} placeholder="Tell us about your vision..." style={{ width: "100%", background: "#111", border: "1px solid #222", padding: "20px", color: "white", marginBottom: "15px" }}></textarea>
                    <button type="button" style={{ background: "white", color: "black", border: "none", padding: "20px 50px", textTransform: "uppercase", fontWeight: 700, letterSpacing: "2px", cursor: "pointer", width: "100%" }}>Send Request</button>
                </form>
                </div>
            </section>
        </div>
    );
}
