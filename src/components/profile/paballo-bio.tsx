"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Briefcase, Star, Target } from "lucide-react";

export function PaballoBio() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group mt-6"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="space-y-3">
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/80"
                    >
                        <MapPin className="w-3 h-3 text-pink-400" />
                        Johannesburg’s Creative Force
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-indigo-300 leading-tight"
                    >
                        Meet Paballo Lion
                    </motion.h2>
                </div>

                {/* Quote */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -left-2 -top-2 text-4xl text-white/10 font-serif">"</div>
                    <p className="text-lg md:text-xl font-medium text-white/90 italic leading-relaxed pl-4 border-l-2 border-pink-500/50">
                        Influence is not just about being seen; it’s about making people feel something. It is driven by passion, sustained by creativity, and elevated by versatility.
                    </p>
                </motion.div>

                {/* Philosophy & Strong Points */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                >
                    <p className="text-sm text-white/70 leading-relaxed">
                        Paballo’s philosophy centers on the belief that a true influencer is a chameleon—able to adapt to any brand's aesthetic while maintaining a fiercely authentic voice.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-sm group/item">
                            <Sparkles className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 group-hover/item:text-yellow-300" />
                            <p className="text-white/60 leading-relaxed"><strong className="text-white/90 font-semibold tracking-wide">Boundless Creativity:</strong> She doesn't just follow trends; she conceptualizes visually striking content that turns heads and starts conversations.</p>
                        </li>
                        <li className="flex gap-3 text-sm group/item">
                            <Target className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 group-hover/item:text-indigo-300" />
                            <p className="text-white/60 leading-relaxed"><strong className="text-white/90 font-semibold tracking-wide">Unmatched Versatility:</strong> Whether she is modeling gritty urban streetwear, showcasing high-end beauty glam, or creating relatable lifestyle content, she seamlessly molds herself to fit the narrative.</p>
                        </li>
                        <li className="flex gap-3 text-sm group/item">
                            <Star className="w-5 h-5 text-pink-400 shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 group-hover/item:text-pink-300" />
                            <p className="text-white/60 leading-relaxed"><strong className="text-white/90 font-semibold tracking-wide">Magnetic Passion:</strong> Every Reel and TikTok she posts is fueled by a genuine love for content creation, which translates into high engagement and a loyal community.</p>
                        </li>
                    </ul>
                </motion.div>

                {/* Bio Body */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 text-sm text-white/70 leading-relaxed"
                >
                    <p>
                        Currently dominating the digital space on both Instagram <span className="text-pink-300 font-medium">@lion.paballo</span> and TikTok <span className="text-indigo-300 font-medium">@paballo.lion</span>, Paballo is a powerhouse content creator proudly represented by the <strong className="text-white">ORGNL FAKE Agency</strong>.
                    </p>
                    <p>
                        Based in the vibrant heart of Johannesburg, Paballo draws daily inspiration from the city's dynamic energy. However, her reach and work ethic know no borders—she is highly adaptable and readily available for interprovincial travel gigs, bringing her unique creative spark wherever a campaign demands it.
                    </p>
                    <p>
                        Paballo specializes in premium paid promotions, using her deep influence to elevate the brands she partners with. Her track record speaks volumes, having built a powerhouse portfolio across the fashion, beauty, retail, and lifestyle sectors.
                    </p>
                </motion.div>

                {/* Brands */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-4 pt-6 border-t border-white/10"
                >
                    <h3 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        Brand Affiliations
                    </h3>
                    <p className="text-xs text-white/50 pb-1">She has proudly worked alongside industry-leading brands, including (but not limited to):</p>
                    <div className="grid gap-3">
                        <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block mb-1.5">Fashion & Streetwear</span>
                            <span className="text-xs text-white/80 leading-relaxed font-medium">Big Drip SA, Urban Culture Retail, Ghetto Lifestyle, Trendz SA, Ishuu Saucy, Blacked Store, Alta Gracia, Culture Collector.</span>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1.5">Beauty & Hair</span>
                            <span className="text-xs text-white/80 leading-relaxed font-medium">Extreme Glow SA, Emma Hair Studio, Darling, Hairpiece Company.</span>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1.5">Lifestyle & Accessories</span>
                            <span className="text-xs text-white/80 leading-relaxed font-medium">Lensmart, Montes Villa, Unique Magazine.</span>
                        </div>
                    </div>
                    <p className="text-xs font-medium text-white/40 italic text-center pt-3">...and many more!</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
