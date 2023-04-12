import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions={
    providers:[
        GoogleProvider({
            clientId:"924985086613-9raidgplp0u615paaiil0im80emq0ljf.apps.googleusercontent.com",
            clientSecret:"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"
        }),
        FacebookProvider({
            clientId:"1326182381287404",
            clientSecret:"b8f2ce86c4de02259e0b6d9c9fa34c41"
        })
    ],
    secret:"IoBIG5YFnH"
}

export default NextAuth(authOptions);