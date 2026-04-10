"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";

type Testimonial = Database['public']['Tables']['testimonials']['Row'];

// Fallback data if Supabase fetch is empty or fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    model_name: "Sarah Kim",
    social_handle: "@sarahk_official",
    testimonial_text: "The orbital experience exceeded every expectation. Seeing Earth from space is truly life-changing. The crew was professional, the training was thorough, and every moment was unforgettable.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
  },
  {
    id: "2",
    model_name: "Marcus Johnson",
    social_handle: "@marcus_j",
    testimonial_text: "Our lunar mission was absolutely spectacular. The accommodations were luxurious, the views were breathtaking, and the entire experience felt safe and well-organized. Worth every penny.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
  },
  {
    id: "3",
    model_name: "Elena Petrov",
    social_handle: "@elena_pt",
    testimonial_text: "An experience that redefined what's possible. The training prepared us perfectly, and the crew's expertise made us feel secure throughout. I'll cherish these memories forever.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        if (supabaseUrl && supabaseKey && supabaseUrl !== 'your-project-url') {
          const supabase = createClient<Database>(supabaseUrl, supabaseKey);
          
          const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false });
            
          if (!error && data && data.length > 0) {
            setTestimonials(data);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error("Error fetching testimonials from Supabase:", error);
      }
      
      // Fallback
      setTestimonials(fallbackTestimonials);
      setLoading(false);
    }

    fetchTestimonials();
  }, []);

  // Get initials for the avatar if no image is provided
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  };

  return (
    <section className="bg-neutral-900/30 w-full min-h-screen flex flex-col items-center justify-center relative py-20">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] font-instrument-serif font-normal">
            What Our Travelers Say
          </h2>
          <p className="mt-4 text-white/80 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] font-sans">
            Hear from those who&apos;ve experienced the journey of a lifetime
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id} 
                className="flex-1 min-w-[300px] max-w-sm relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur animate-on-scroll flex flex-col items-center text-center"
                style={{ animation: `fadeSlideIn 1s ease-out ${0.1 + (idx * 0.1)}s both` }}
              >
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-sans">
                  &quot;{testimonial.testimonial_text}&quot;
                </p>
                <div className="flex flex-col items-center justify-center gap-3 mt-auto">
                  {testimonial.image_url ? (
                    <img 
                      src={testimonial.image_url} 
                      alt={testimonial.model_name} 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-white font-sans">{getInitials(testimonial.model_name)}</span>
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium text-white font-sans">
                      {testimonial.model_name}
                    </div>
                    <div className="text-xs text-white/60 font-sans mt-0.5">
                      {testimonial.social_handle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
