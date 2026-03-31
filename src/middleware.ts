import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

/**
 * CONSTRUCTION MODE
 * ─────────────────
 * Set to `true`  → all visitors redirected to /construction
 * Set to `false` → normal site operation
 */
const CONSTRUCTION_MODE = true;

export async function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;
    const isDeveloperParam = searchParams.get('developer') === 'true';
    const isDeveloperCookie = request.cookies.get('developer_mode')?.value === 'true';
    const isDeveloper = isDeveloperParam || isDeveloperCookie;

    // ── Normal Supabase session handling ────────────────
    const { response, user, isAdmin } = await updateSession(request);

    // ── Construction mode gate ──────────────────────────
    if (CONSTRUCTION_MODE && !isDeveloper && !isAdmin) {
        
        // Always allowed paths (public routes needed for auth and vault)
        const isPublicAllowed =
            pathname === '/construction' ||
            pathname === '/login' ||
            pathname === '/join' ||
            pathname.startsWith('/auth') ||
            pathname.startsWith('/_next') ||
            pathname.startsWith('/api') ||
            pathname.startsWith('/favicon') ||
            pathname.includes('/vault') || // Keep Fort Knox vault accessible to VIPs with tokens
            /\.(ico|png|jpg|jpeg|svg|gif|webp|avif|mp4|webm|css|js|woff|woff2|ttf)$/.test(pathname);

        // Creator allowed paths (only if logged in)
        const isCreatorAllowed = user && (
            pathname.startsWith('/dashboard') || 
            pathname.startsWith('/@') // Allow /[username] portfolio paths assuming they start with @
        );

        if (!isPublicAllowed && !isCreatorAllowed) {
            const url = request.nextUrl.clone();
            url.pathname = '/construction';
            return NextResponse.redirect(url);
        }
    }

    // If developer mode is enabled via query param, set a cookie for future requests
    if (isDeveloperParam && !isDeveloperCookie) {
        response.cookies.set('developer_mode', 'true', {
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'lax',
        });
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
