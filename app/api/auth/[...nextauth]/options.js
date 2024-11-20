import prisma from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const GITHUB_CLIENT_ID = process.env.NEXTAUTH_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.NEXTAUTH_GITHUB_CLIENT_SECRET;
const GOOGLE_CLIENT_ID = process.env.NEXTAUTH_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET;

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async jwt({ user, token, account }) {
            if (user && account) {

                const providerType = account.provider;

                const createUser = await prisma.user.upsert({
                    where: {
                        email_type: {
                            email: user.email,
                            type: providerType
                        }
                    },
                    update: {
                        name: user.name,
                        avatar: user.image,
                    },
                    create: {
                        name: user.name,
                        email: user.email,
                        avatar: user.image,
                        type: providerType,
                    },
                })

                token.userId = createUser.id;
            }

            return token;
        },
        async session({ session, token }) {
            if (token.userId) {

                const user = await prisma.user.findUnique({
                    where: {
                        id: token.userId,
                    },
                    include: {
                        tasks: true
                    }
                })

                if (user) {
                    session.user = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.avatar,
                        tasks: user.tasks || []
                    };
                }
            }
            return session;
        },
    },
    pages: {
        signIn: "/"
    },
    secret: process.env.NEXTAUTH_SECRET,
}