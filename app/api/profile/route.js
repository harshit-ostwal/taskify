import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ Response: "Unauthorized" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id,
                email_type: {
                    email: session.user.email,
                    type: session.user.type
                }
            },
            include: {
                tasks: true
            }
        });

        if (!user) {
            return NextResponse.json({ Response: "User Not Found?" }, { status: 400 });
        }

        return NextResponse.json({ Response: { user } }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ Response: "Profile Server Error?" }, { status: 500 });
    }
}

export async function PATCH(req, res) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ Response: "Unauthorized" }, { status: 400 });
        }

        const { name } = await req.json();

        const profileUpdate = await prisma.user.update({
            where: {
                id: session.user.id,
                email_type: {
                    email: session.user.email,
                    type: session.user.type
                }
            },
            data: {
                name
            }
        });

        if (!profileUpdate) {
            return NextResponse.json({ Response: "Profile Update Failed!" }, { status: 400 });
        }

        return NextResponse.json({ Response: "Profile Updated!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ Response: "Profile Update Server Error?" }, { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ Response: "Unauthorized" }, { status: 400 });
        }

        await prisma.task.deleteMany({
            where: {
                userId: session.user.id,
            },
        });

        const profileUpdate = await prisma.user.delete({
            where: {
                id: session.user.id,
            },
        });

        if (!profileUpdate) {
            return NextResponse.json({ Response: "Profile Deletion Failed!" }, { status: 400 });
        }

        return NextResponse.json({ Response: "User And Tasks Deleted Successfully!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ Response: "Profile Deletion Server Error?" }, { status: 500 });
    }
}