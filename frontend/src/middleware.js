import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { NextResponse } from "next/server"
 
// export default NextAuth(authConfig).auth;

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth?.user;
  const { pathname } = req.nextUrl;
   


console.log('Middleware Hello')
  if(pathname.startsWith('/dashboard')) {
    if(isLoggedIn) {
      return NextResponse.next();
    }else {
      return NextResponse.redirect(new URL('login-page', req.url))
    }
  } 

  if(pathname === 'login-page' && isLoggedIn) {
    return NextResponse.redirect(new URL('dashboard', req.url))
  }
   
  return NextResponse.next();
});
 
export const config = {
    matcher: [
        // Run middleware on everything EXCEPT these routes
        "/((?!api/auth|api|_next/static|_next/image|.*\\.png$).*)",
    ],
};