import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });
    let user = null;
    let isAdmin = false;

    // Check if we have valid Supabase configuration
    const isConfigured =
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-project-url' &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your-anon-key';

    if (isConfigured) {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll();
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                        supabaseResponse = NextResponse.next({
                            request,
                        });
                        cookiesToSet.forEach(({ name, value, options }) =>
                            supabaseResponse.cookies.set(name, value, options)
                        );
                    },
                },
            }
        );

        // Refresh session if expired and eagerly fetch user
        const { data } = await supabase.auth.getUser();
        user = data.user;

        // Check if user is an admin
        if (user && user.email) {
            const { data: adminData } = await supabase
                .from('admins')
                .select('id')
                .eq('email', user.email)
                .single();
            
            if (adminData) {
                isAdmin = true;
            }
        }
    }

    return { response: supabaseResponse, user, isAdmin };
}
