import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function POST(req:any) {
  try {
    await connectMongoDB();
    const userId = req.params.userId;
    const {
      firstname, lastname,
      mobile,
      image,
      email
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          firstname, lastname,
          mobile,
          image,
          email
        }
      },
      { new: true }
    );

    return NextResponse.json({ updatedUser });
  } catch (error) {
    console.log(error);
  }
}
