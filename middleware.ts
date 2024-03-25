import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/apis/auth-middleware";
import { loggingMiddleware } from "./middlewares/apis/logging-middleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(request: Request) {
  if (request.url.includes("/api/notes")) {
    const logResult = loggingMiddleware(request);
    console.log("logged request", logResult.response);
  }
  const authResult = authMiddleware(request);
  if (!authResult.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  return NextResponse.next();
}
