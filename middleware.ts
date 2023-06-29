export { default } from "next-auth/middleware";
import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/"],
};

// export async function middleware(request: NextRequest) {
//   const user = await getCurrentUser();

//   if (request.nextUrl.pathname.startsWith("/auth") && user !== null) {
//     return NextResponse.rewrite(new URL("/", request.url));
//   }
// }
