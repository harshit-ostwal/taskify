import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function DELETE(req, res) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ Response: "Unauthorized" }, { status: 400 });
        }

        const taskDeletion = await prisma.task.deleteMany({
            where: {
                userId: session.user.id,
            },
        });

        if (taskDeletion.count === 0) {
            return NextResponse.json({ Response: "No Tasks Found To Delete." }, { status: 404 });
        }

        return NextResponse.json({ Response: "Tasks Deleted Successfully!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ Response: "Error Deleting Tasks. Please Try Again." }, { status: 500 });
    }
}