"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

// Mock data fallback matching your actual image paths
const mockCreators = [
  {
    id: 1,
    handle: '@barbiie.stallion',
    image: '/mediakits/9.jpg',
    avatar: '/media/photos/barbiie_stallion.jpg',
    followers: '299.7K',
    engagement: '9.5%',
    reach: '5.3M',
  },
  {
    id: 2,
    handle: '@patriciaboity',
    image: '/creators/patriciaboity/main.webp',
    avatar: '/creators/patriciaboity/avatar.webp',
    followers: '1.2M',
    engagement: '9.2%',
    reach: '23.3M',
  },
  {
    id: 3,
    handle: '@lion.paballo',
    image: '/creators/lion.paballo/cover.jpg', 
    avatar: '/media/photos/lion_paballo.jpg',
    followers: '125.6K',
    engagement: '8.5%',
    reach: '2.5M',
  },
  {
    id: 4,
    handle: '@momobabes21',
    image: '/mediakits/_MG_0048 2.jpg',
    avatar: '/images/profiles/momobabes21.jpg',
    followers: '64.0K',
    engagement: '8.1%',
    reach: '95.0K',
  }
];

export default function FeaturedInfluencersWidget() {
  const [displayCreators, setDisplayCreators] = useState<any[]>(mockCreators.slice(0, 4));
  const [hasSupabaseError, setHasSupabaseError] = useState(false);

  useEffect(() => {
    async function fetchCreators() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .limit(4);
        
        if (error) {
          console.warn("Supabase fetch info: using mock data fallback");
          setHasSupabaseError(true);
        } else if (data && data.length > 0) {
          setDisplayCreators(data);
        } else {
          // If no error but also no data, could be paused or empty
          setHasSupabaseError(true);
        }
      } catch (err) {
        console.error("Unexpected error fetching creators:", err);
        setHasSupabaseError(true);
      }
    }
    
    fetchCreators();
  }, []);

  return (
    <div className="w-full relative z-50 flex justify-center pointer-events-none" style={{ height: "200px" }}>
      <section className="absolute w-full flex flex-col items-center text-white scale-90 md:scale-100 pointer-events-auto" style={{ top: "10px" }}>
      
      {/* Supabase Error Banner Fallback (Removed for cleaner UI) */}

      {/* Responsive Grid: 2 columns (4 cards) on mobile, 3 columns (3 cards) on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-6xl px-4 md:px-8">
        {displayCreators.map((creator, index) => (
          <div 
            key={creator.id || index} 
            className={`verd-card-wrapper group ${index === 3 ? 'md:hidden' : ''}`}
          >
            <div className="verd-card-border"></div>
            <div className="verd-card-mask"></div>
            <i className="verd-cta-shimmer"></i>
            
            <div className="verd-card-content">
              {/* Main Image Area */}
              <div className="relative aspect-[4/5] sm:h-80 w-full">
                <img 
                  src={creator.image || creator.image_url || '/path-to-image1.jpg'} 
                  alt={creator.handle || creator.name || 'Creator'}
                  className="object-cover w-full h-full"
                />
                
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Avatar & Handle */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#C9A96E]/50 shrink-0">
                    <img src={creator.avatar || creator.avatar_url || '/path-to-avatar1.jpg'} alt="avatar" className="object-cover w-full h-full" />
                  </div>
                  <span className="font-semibold text-sm sm:text-lg text-[#F5F0EB] drop-shadow-md line-clamp-1">{creator.handle || creator.name}</span>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="flex justify-between sm:justify-around items-center bg-transparent backdrop-blur-md p-2 sm:p-4 border-t border-white/5">
                <div className="text-center px-0.5">
                  <p className="text-[10px] sm:text-xs text-[#D4A07A]/70 mb-0.5">🎵 TikTok</p>
                  <p className="font-bold text-xs sm:text-sm text-[#F5F0EB] truncate">{creator.followers || '0'}</p>
                </div>
                <div className="text-center px-0.5">
                  <p className="text-[10px] sm:text-xs text-[#D4A07A]/70 mb-0.5">📈 Eng</p>
                  <p className="font-bold text-xs sm:text-sm text-[#C9A96E] truncate">{creator.engagement || '0%'}</p>
                </div>
                <div className="text-center px-0.5">
                  <p className="text-[10px] sm:text-xs text-[#D4A07A]/70 mb-0.5">❤️ Likes</p>
                  <p className="font-bold text-xs sm:text-sm text-[#F5F0EB] truncate">{creator.reach || '0'}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Animated Influencers Button linking to the Talent/Creators page */}
      <div className="mt-6 mb-8 verd-project-cta-component" style={{ display: "inline-block", isolation: "isolate" }}>
        <Link href="/talent" className="verd-cta-btn">
          <i className="verd-cta-shimmer"></i>
          <span className="verd-cta-text">
            Influencers
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.4s var(--ease-out-expo)" }}>
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </span>
        </Link>
      </div>

      </section>
    </div>
  );
}
