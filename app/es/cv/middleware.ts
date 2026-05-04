//if the user is localhost pass, else return 404
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = 'edge';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/es/cv")) {
    const host = req.headers.get("host") || "";
    const hostname = req.nextUrl.hostname;
    // Comprobación MUY permisiva para desarrollo/localhost
    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      host.includes("localhost") ||
      host.includes("127.0.0.1");

    if (!isLocal) {
      return new NextResponse("Acceso denegado fuera de localhost", {
        status: 404,
      });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/es/cv", "/es/cv/:path*"],
};
