import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth((req) => {
  if (req) {
    console.log(req); // do something with the request
  }
  return {
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    callbacks: {
      async signIn({}){

      }
    }
  };
});
