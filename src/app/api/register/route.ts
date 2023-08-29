import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:any) {
  await connectMongoDB();

try {
    const { firstname,lastname, email, password,mobile } = await req.json();
    const user = await User.findOne({ email });
    if(user){
      return NextResponse.json({ message:' user already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ firstname,lastname,mobile, email, password: hashedPassword });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
} catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
