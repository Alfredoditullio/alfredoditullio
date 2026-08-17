import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/routing";

/**
 * English is served from the root ("/about") and Spanish from a prefix
 * ("/es/about"). Requests without a locale prefix are rewritten to the
 * default locale segment internally, so the public URL never changes.
 */
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // The default locale is never exposed as a prefix: /en/about would be a
    // duplicate of /about, so send it to the canonical URL for good.
    if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
        const url = request.nextUrl.clone();
        const stripped = pathname.slice(defaultLocale.length + 1);
        url.pathname = stripped === "" ? "/" : stripped;
        return NextResponse.redirect(url, 308);
    }

    const hasLocalePrefix = locales.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );

    if (hasLocalePrefix) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    /**
     * Skip Next internals, static assets and metadata routes (sitemap.xml,
     * robots.txt, icons, opengraph images) — anything with a file extension.
     */
    matcher: [
        "/((?!_next/|assets/|api/|favicon\\.ico|icon|apple-icon|opengraph-image|sitemap\\.xml|robots\\.txt|llms.*\\.txt|.*\\.[\\w]+$).*)",
    ],
};
