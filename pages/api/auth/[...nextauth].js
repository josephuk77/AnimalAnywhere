import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";

const NAVER_CLIENT_ID ='00e2k5nMUxMbYwBcK9_I';
const NAVER_CLIENT_SECRET='fQ3vQfKpQe';

export const authOptions = {
    providers: [
        GithubProvider({
          clientId: '8efdba5c09c55b5a9ff0',
          clientSecret: '375df547a458d298e2c15b3e19ddc0f0935bfd07',
        }),
        NaverProvider({
          clientId: process.env.NAVER_CLIENT_ID,
          clientSecret: process.env.NAVER_CLIENT_SECRET
        })
      ],
  secret : 'dltmddnr@0820',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 