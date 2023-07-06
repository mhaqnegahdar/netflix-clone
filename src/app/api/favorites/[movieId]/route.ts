import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismadb";

// Actions
import getCurrentUser from "@/actions/getCurrentUser";

// Types
import { FavoriteIdParams } from "@/types/params";

export async function POST(req: Request, { params }: FavoriteIdParams) {
  const currentUser = await getCurrentUser();

  try {
    //Check  existance of current user
    if (!currentUser)
      return NextResponse.json(
        { error: "Please login first!" },
        { status: 500 }
      );

    const { movieId } = params;

    // Check if Movie id is valid
    if (!movieId || typeof movieId !== "string")
      throw new Error("Invalid Movie id");

    // Add Movie id to favoriteIds list
    let favoriteIds = [...(currentUser?.favoriteIds || [])];

    favoriteIds.push(movieId);

    //Update favoriteIds
    const user = await prisma.user.update({
      where: { id: currentUser?.id },
      data: { favoriteIds },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function DELETE(req: Request, { params }: FavoriteIdParams) {
  const currentUser = await getCurrentUser();

  try {
    //Check  existance of current user
    if (!currentUser)
      return NextResponse.json(
        { error: "Please login first!" },
        { status: 500 }
      );

    const { movieId } = params;

    // Check if Movie id is valid
    if (!movieId || typeof movieId !== "string")
      throw new Error("Invalid Movie id");

    // Delete Movie id to favoriteIds list
    let favoriteIds = [...(currentUser?.favoriteIds || [])];

    favoriteIds = favoriteIds.filter(id => id !== movieId);

    //Update favoriteIds
    const user = await prisma.user.update({
      where: { id: currentUser?.id },
      data: { favoriteIds },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
