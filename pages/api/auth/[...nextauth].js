import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import crypto from 'crypto';

// تابع برای ایجاد رشتهٔ تصادفی و امن
const generateSecureRandom = () => {
  return crypto.randomBytes(32).toString('hex');
};
export const authOptions = {
  secret: generateSecureRandom(),
    session: { strategy: "jwt" },
    
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
          const { email, password } = credentials;
          
          try {
            await connectDB();
          } catch (error) {
            throw new Error("Error in connecting to DB!");
          }
  
  
          if (!email || !password) {
            throw new Error("Invalid Data!");
          }
          
          const user = await User.findOne({ email: email });
  
          if (!user) throw new Error("User doesnt exist!");
  
          const isValid = await verifyPassword(password, user.password);
  
          if (!isValid) throw new Error("Username or password is incorrect!");
          
          return { email };
        },
      }),
    ],

  };

export default NextAuth(authOptions)