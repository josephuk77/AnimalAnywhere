import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request){


    const session = await getToken({ req : request })
  if (request.nextUrl.pathname.startsWith('/list')) {
    
    console.log('세션', session)
    if (session == null) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }if (request.nextUrl.pathname.startsWith('/qna')) {
    
    console.log('세션', session)
    if (session == null) {
      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
  }
    
}