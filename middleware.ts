import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    '/',
    '/es/cv/:path*',
    '/en/cv/:path*',
  ],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Lógica para proteger los CVs en producción (solo localhost)
  if (pathname.startsWith("/es/cv") || pathname.startsWith("/en/cv")) {
    const host = req.headers.get("host") || "";
    const hostname = req.nextUrl.hostname;
    
    // Comprobación permisa para desarrollo/localhost
    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      host.includes("localhost") ||
      host.includes("127.0.0.1");

    if (!isLocal) {
      return new NextResponse("Acceso denegado fuera de localhost", {
        status: 404, // Retornamos 404 para ocultarlo completamente en producción
      });
    }
    // Si es localhost, permitimos seguir a la página del cv
    return NextResponse.next();
  }

  // 2. Lógica del proxy de idioma (solo en la raíz '/')
  if (pathname === "/") {
    const savedLang = req.cookies.get("lang")?.value;
    if (savedLang) {
      return NextResponse.redirect(new URL(`/${savedLang}`, req.url));
    }

    const langHeader = req.headers.get("accept-language") || "";
    const lang = langHeader.startsWith("es") ? "es" : "en";

    return NextResponse.redirect(new URL(`/${lang}`, req.url));
  }

  return NextResponse.next();
}
