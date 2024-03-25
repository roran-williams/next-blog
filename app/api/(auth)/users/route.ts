import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/lib/models/user";
import { Types } from "mongoose";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

const ObjectId = require("mongoose").Types.ObjectId;
export async function GET() {
 try {
   await connect();
   const users = await User.find();
   return new NextResponse(JSON.stringify(users), { status: 200 });
 }catch (error) {
   return new NextResponse(JSON.stringify(error), { status: 500 });
 }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connect();
    const newUser = new User(body);
    await newUser.save();
    return new NextResponse(JSON.stringify( {message:"user created", user: newUser}), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({message:"error creating user",error}), { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const {userId,newName} = body;
    await connect();
    if (!userId || !newName) {
      return new NextResponse(
        JSON.stringify({ message: "userId and Name are required" }),{status: 400}
      );
    }
    if(!Types.ObjectId.isValid(userId)){
      return new NextResponse(
        JSON.stringify({ message: "invalid userId" }),{status: 400}   
      )  
    }
    const updatedUser = await User.findOneAndUpdate(
        {_id:new ObjectId(userId)},
        {name:newName},
        {new:true}
    );
    if(!updatedUser){
      return new NextResponse(
        JSON.stringify({ message: "user not found" }),{status: 404}   
      );  
    }
    return new NextResponse(JSON.stringify( {message:"user updated", user: updatedUser}), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({message:"error updating user",error}), { status: 500 });
  }
}

export async function DELETE(request: Request) {
    try{
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        if(!userId){
            return new NextResponse(
              JSON.stringify({ message: "userId is required" }),{status: 400}
              
            )
        }

        if(!Types.ObjectId.isValid(userId)){
        return new NextResponse(JSON.stringify(
         {message: "invalid userId"}),{status: 400}
        ) ; 
        }
        await connect();
        const deletedUser = await User.findOneAndDelete(
            new Types.ObjectId(userId)
        ); 
        if(!deletedUser){
            return new NextResponse(
              JSON.stringify({ message: "user not found" }),{status: 404}  
            );
        }  
        return new NextResponse(JSON.stringify( {message:"user deleted", user: deletedUser}), { status: 200 });         

    }catch(error){
        return new NextResponse(JSON.stringify({message:"error deleting user",error}), { status: 500 });
    }
  
}