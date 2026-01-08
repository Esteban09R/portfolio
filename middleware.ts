import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname !== "/") return;

    const savedLang = req.cookies.get("lang")?.value;
    if (savedLang) {
        return NextResponse.redirect(new URL(`/${savedLang}`, req.url));
    }

    const langHeader = req.headers.get("accept-language") || "";
    const lang = langHeader.startsWith("es") ? "es" : "en";

    return NextResponse.redirect(new URL(`/${lang}`, req.url));
}
