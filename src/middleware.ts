import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { CognitoJwtVerifier } from "aws-jwt-verify";

const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.USERPOOL_ID,
  tokenUse: "access",
  clientId: process.env.USERPOOL_CLIENT_ID,
});

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // console.log(request)
    // if (request.nextUrl.pathname.startsWith("/account")) {
    //     const jwt = request.headers.get("authorization")
    //     try {
    //         const result = await verifier.verify(jwt)
    //     }
    //     catch (err) {
    //         return NextResponse.redirect(new URL("/login", request.url))
    //     }
    // }

    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.redirect(new URL('/about-2', request.url))
    // }
    console.log(request.cookies)

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:path*', "/:path*"]
}