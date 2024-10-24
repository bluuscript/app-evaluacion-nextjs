import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/model/db/route";
import User from "@/lib/model/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Correo Electrónico",
          type: "email",
          placeholder: "correo@gmail.com",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "••••••••",
        },
      },
      async authorize(credentials, req) {
        await connectDB();
        console.log(credentials);
        const userFound = await User.findOne({
          email: credentials?.email,
        }).select("+password");
        if (!userFound) throw new Error("Credenciales de usuario invalidas");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password,
        );
        if (!passwordMatch)
          throw new Error("Credenciales de usuario invalidas");
        console.log(userFound);

        return userFound;
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      //  console.log({account, token, user, profile});
      if (user) token.user = user;
      //    console.log(token)
      return token;
    },
    session({ session, token }) {
      console.log(session, token);
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
