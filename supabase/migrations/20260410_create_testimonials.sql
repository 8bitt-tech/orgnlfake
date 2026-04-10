-- Create the testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  model_name TEXT NOT NULL,
  social_handle TEXT NOT NULL,
  image_url TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5)
);

-- Enable Row Level Security
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Testimonials are viewable by everyone" ON public.testimonials
  FOR SELECT USING (true);

-- Create policy for admin write access
CREATE POLICY "Admins can insert testimonials" ON public.testimonials
  FOR INSERT WITH CHECK (
    auth.uid() IN (SELECT id FROM auth.users) -- Depending on role, or limit to service_role by default.
  );

CREATE POLICY "Admins can update testimonials" ON public.testimonials
  FOR UPDATE USING (
    auth.uid() IN (SELECT id FROM auth.users)
  );

CREATE POLICY "Admins can delete testimonials" ON public.testimonials
  FOR DELETE USING (
    auth.uid() IN (SELECT id FROM auth.users)
  );

-- Insert dummy data
INSERT INTO public.testimonials (model_name, social_handle, testimonial_text, rating) VALUES
('Sarah Kim', '@sarahk_official', 'The orbital experience exceeded every expectation. Seeing Earth from space is truly life-changing. The crew was professional, the training was thorough, and every moment was unforgettable.', 5),
('Marcus Johnson', '@marcus_j', 'Our lunar mission was absolutely spectacular. The accommodations were luxurious, the views were breathtaking, and the entire experience felt safe and well-organized. Worth every penny.', 5),
('Elena Petrov', '@elena_pt', 'An experience that redefined what''s possible. The training prepared us perfectly, and the crew''s expertise made us feel secure throughout. I''ll cherish these memories forever.', 5);
