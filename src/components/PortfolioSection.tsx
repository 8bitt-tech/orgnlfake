"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, ChevronDown, Search } from 'lucide-react';

const categories = [
  { id: 1, title: 'Fashion Editorial', span: 'col-span-1 row-span-1', img: '/media/photos/1771871549700.jpeg' },
  { id: 2, title: 'Lifestyle Editorial', span: 'col-span-1 row-span-2', img: '/media/photos/505997536_10021452084637537_3772584361098111414_n.jpg' },
  { id: 3, title: 'Boudoir', span: 'col-span-1 row-span-1', img: '/media/photos/1771871554756.jpeg' },
  { id: 4, title: 'Lingerie / Swimwear', span: 'col-span-1 row-span-1', img: '/media/photos/1771871576699.jpeg' },
  { id: 5, title: 'Conceptual / Artistic Editorial', span: 'col-span-1 row-span-1', img: '/media/photos/510739738_23874207035602141_2899064520723821852_n_1.jpg' },
  { id: 6, title: 'Influencer / Social', span: 'col-span-1 row-span-1', img: '/media/photos/_MG_0033.jpg' },
  { id: 7, title: 'Cultural / Identity', span: 'col-span-1 row-span-1', img: '/media/photos/freepik__photo-a-20yearold-asian-woman-with-long-brown-hair__61285.jpeg' },
  { id: 8, title: 'Beauty', span: 'col-span-1 row-span-1', img: '/media/photos/freepik__photo-a-22yearold-black-woman-with-dreadlocks-wear__19197.png' },
];

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-sans text-[#FAF9F6] p-4 md:p-10">

      {/* Abstract Glowing Ethereal Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-r from-[#ff4500] to-[#ff0000] rounded-full blur-[150px] opacity-30 mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], x: [0, 100, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-gradient-to-l from-[#ff3300] to-[#cc0000] rounded-full blur-[180px] opacity-30 mix-blend-screen"
        />

        {/* Animated swoosh lines */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,20 50,50 T100,50"
            fill="none"
            stroke="url(#orange-gradient)"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff4500" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-full">

        {/* Left Side: Masonry Category Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              className={`${cat.span} relative group rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm cursor-pointer shadow-lg`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, zIndex: 20 }}
            >
              {/* Image Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold tracking-wide text-[#FAF9F6] drop-shadow-lg">
                  {cat.title}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_20px_rgba(255,69,0,0.5)] transition-all duration-500 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Video & Menu UI */}
        <div className="w-full lg:w-[450px] flex flex-col gap-6">

          {/* Glassmorphism Menu List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#FAF9F6] text-black rounded-xl p-4 shadow-[0_0_30px_rgba(255,69,0,0.2)]"
          >
            <div className="flex justify-between items-center border-b border-black/10 pb-3 mb-3 cursor-pointer group">
              <span className="font-semibold group-hover:text-[#ff4500] transition-colors">Fashion Editorial</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-3 mb-3 cursor-pointer group">
              <span className="font-semibold text-black/60 group-hover:text-[#ff4500] transition-colors">Lifestyle Editorial</span>
              <Search className="w-4 h-4 text-black/50" />
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-3 mb-3 cursor-pointer group">
              <span className="font-semibold text-black/60 group-hover:text-[#ff4500] transition-colors">Street Style Editorial</span>
              <span className="text-xs font-bold text-[#ff4500]">20</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer group">
              <span className="font-semibold text-black/60 group-hover:text-[#ff4500] transition-colors">Fitness / Sport</span>
              <span className="text-xs font-bold text-[#ff4500]">28</span>
            </div>
          </motion.div>

          {/* Featured Runway Video Layout 1 */}
          <VideoPlayerCard
            title="Runway Exclusives"
            videoSrc="/media/videos/0304.mp4"
            duration="0:07 / 0:15"
            delay={0.5}
          />

          {/* Featured Runway Video Layout 2 */}
          <VideoPlayerCard
            title="Behind the Scenes"
            videoSrc="/media/videos/0305.mp4"
            duration="0:03 / 0:12"
            delay={0.7}
          />

        </div>
      </div>
    </div>
  );
}

function VideoPlayerCard({ title, videoSrc, duration, delay }: { title: string; videoSrc: string; duration: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5 }}
      className="relative w-full h-[280px] rounded-2xl overflow-hidden group bg-black border border-white/10 shadow-[0_10px_30px_rgba(255,69,0,0.1)] cursor-pointer"
    >
      {/* Real Video Background */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
      />

      {/* Central Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] pointer-events-auto cursor-pointer"
        >
          <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
        </motion.div>
      </div>

      {/* Video Controls / Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/30 rounded-full mb-3 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff4500] to-[#ff8c00] w-1/3 rounded-full relative shadow-[0_0_10px_#ff4500]" />
          <div className="absolute top-1/2 -translate-y-1/2 left-[33%] w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white]" />
        </div>

        {/* Controls Layout */}
        <div className="flex items-center justify-between text-white/80 text-xs font-medium">
          <div className="flex items-center gap-3 pointer-events-auto cursor-pointer">
            <Pause className="w-4 h-4 hover:text-white transition-colors" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-4 pointer-events-auto">
            <Volume2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Maximize className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
