"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";

type Testimonial = Database['public']['Tables']['testimonials']['Row'];

// Fallback data if Supabase fetch is empty or fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    model_name: "Tumi",
    social_handle: "@tumi_creates",
    testimonial_text: "Joining this agency completely transformed my career as a creator. The team doesn’t just find brand deals; they actively helped me build a sustainable long-term strategy. Their communication is flawless, and I finally feel like my creative vision is truly supported, valued, and monetized properly.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
    status: "approved",
  },
  {
    id: "2",
    model_name: "Mbalenthle",
    social_handle: "@mbalenthle.official",
    testimonial_text: "As a model, finding a team that genuinely prioritizes your well-being and career growth is rare. From elevating my portfolio to securing high-tier bookings, their professionalism is unmatched. I always feel safe, prepared, and confident walking onto any set knowing they have my back.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
    status: "approved",
  },
  {
    id: "3",
    model_name: "Morgan",
    social_handle: "@morgan_studios",
    testimonial_text: "The level of dedication this team brings to talent management is incredible. They handle all the heavy lifting—contract negotiations, scheduling, and administrative work—so I can focus entirely on producing great content. It’s a true partnership, and my brand has grown significantly since signing.",
    rating: 5,
    created_at: new Date().toISOString(),
    image_url: null,
    status: "approved",
  }
];

function StarRatingInput({ rating, onRate }: { rating: number; onRate: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform duration-150 hover:scale-125 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={star <= (hovered || rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            className={star <= (hovered || rating) ? "text-yellow-500" : "text-white/30"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewModal({ onClose, onSubmitted }: { onClose: () => void; onSubmitted: () => void }) {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setError("Please fill in your name and review.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) throw new Error("Not configured");

      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: insertError } = await supabase
        .from("testimonials")
        .insert({
          model_name: name.trim(),
          social_handle: handle.trim() || "@anonymous",
          testimonial_text: text.trim(),
          rating,
        } as Record<string, unknown>);

      if (insertError) throw insertError;

      setSuccess(true);
      setTimeout(() => {
        onSubmitted();
        onClose();
      }, 2500);
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeSlideIn 0.4s ease-out both" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-sans">Thank You!</h3>
            <p className="text-white/60 text-sm font-sans">Your review has been submitted and will appear once approved.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-white mb-1 font-sans">Leave a Review</h3>
            <p className="text-white/50 text-sm mb-6 font-sans">Share your experience with OrgnFake Creators</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating */}
              <div>
                <label className="block text-sm text-white/70 mb-2 font-sans">Your Rating</label>
                <StarRatingInput rating={rating} onRate={setRating} />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm text-white/70 mb-1.5 font-sans">Your Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Kim"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors font-sans"
                />
              </div>

              {/* Social Handle */}
              <div>
                <label className="block text-sm text-white/70 mb-1.5 font-sans">Social Handle</label>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="e.g. @sarah_k"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors font-sans"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-sm text-white/70 mb-1.5 font-sans">Your Review *</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none font-sans"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm font-sans">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-black font-semibold py-3 rounded-lg text-sm uppercase tracking-wider hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-sans"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                    Submitting...
                  </span>
                ) : (
                  "Submit Review"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchTestimonials = async () => {
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
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Get initials for the avatar if no image is provided
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  };

  return (
    <>
      <section className="bg-neutral-900/30 w-full min-h-screen flex flex-col items-center justify-center relative py-20">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="mx-auto max-w-6xl text-center mb-12 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] font-instrument-serif font-normal text-center w-full">
              Testimonials
            </h2>
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

          {/* Leave a Review Button */}
          <div className="flex justify-center mt-14 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
            <button
              onClick={() => setShowModal(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur font-sans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 group-hover:scale-110 transition-transform">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Leave a Review
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showModal && (
        <ReviewModal
          onClose={() => setShowModal(false)}
          onSubmitted={() => fetchTestimonials()}
        />
      )}
    </>
  );
}
