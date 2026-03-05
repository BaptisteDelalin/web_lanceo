import { NextResponse, type NextRequest } from "next/server";

// ---------------------------------------------------------------------------
// Rate limiter integre (Edge Runtime compatible — pas d'import externe)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset >= windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count < limit) {
    entry.count++;
    return true;
  }

  return false;
}

// ---------------------------------------------------------------------------
// Origins autorises
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://lanceo-access.fr",
  "https://www.lanceo-access.fr",
];

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.some(
    (allowed) => origin === allowed || origin.startsWith("http://localhost:")
  );
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // --- Headers de securite (toutes les routes) ---
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // --- Protections specifiques aux routes /api/* ---
  if (request.nextUrl.pathname.startsWith("/api")) {
    // 1. Verification de l'Origin
    const origin = request.headers.get("origin");

    if (origin && !isOriginAllowed(origin)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    // 2. Rate limiting (5 req / min par IP)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (!rateLimit(ip)) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  return response;
}

// ---------------------------------------------------------------------------
// Matcher — exclut les fichiers statiques
// ---------------------------------------------------------------------------
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
