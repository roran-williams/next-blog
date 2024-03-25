import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Note from "@/lib/models/notes";
import {Types} from "mongoose";
import User from "@/lib/models/user";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "userId is required" }), { status: 400 });
    }
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ error: "invalid userId" }), { status: 400 });
    }
    await connect();
    const user = await User.findById(userId);
    if (!user) {
    return new NextResponse(JSON.stringify({ error: "user not found" }), { status: 404 }); 
    }

    const notes = await Note.find({user:new Types.ObjectId(userId)});

    return new NextResponse(JSON.stringify(notes ), { status: 200 });
  }
  catch (error) {
        return new NextResponse(JSON.stringify({ error: "error fetching notes" }), { status: 500 });
      }
    }

  export async function POST(request: Request) {
    try {
      const {searchParams} = new URL(request.url);
      const userId = searchParams.get("userId");
      const body = await request.json();
      const {title, description} = body;
      if(!userId){
        return new NextResponse(
          JSON.stringify({ message: "userId is required" }),{status: 400}  
        )  
      }
      if(!Types.ObjectId.isValid(userId)){
       return new NextResponse(
        JSON.stringify({ message: "invalid userId" }),{status: 400} 
       ) 
      }
      await connect();
      const user = await User.findById(userId);
      if(!user){
        return new NextResponse(
          JSON.stringify({ message: "user not found" }),{status: 404}  
        )  
      }
      const newNote = new Note({
        title,
        description,
        user:new Types.ObjectId(userId),
      });
      await newNote.save();
      return new NextResponse(
        JSON.stringify({ message: "Note created" }),{status: 201}  
        

      );
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: "error creating note" }), { status: 500 });
    }
  }

  export async function PATCH(request: Request) {
    try {
      const body = await request.json();
      const { noteId, title, description } = body;
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get("userId");
  
      if (!noteId) {
        return new NextResponse(
          JSON.stringify({ message: "noteId is required" }),
          { status: 400 }
        );
      }
  
      if (!Types.ObjectId.isValid(noteId)) {
        return new NextResponse(
          JSON.stringify({ message: "invalid noteId" }),
          { status: 400 }
        );
      }
  
      if (!userId) {
        return new NextResponse(
          JSON.stringify({ message: "userId is required" }),
          { status: 400 }
        );
      }
  
      if (!Types.ObjectId.isValid(userId)) {
        return new NextResponse(
          JSON.stringify({ message: "invalid userId" }),
          { status: 400 }
        );
      }
  
      await connect();
      const user = await User.findById(userId);
  
      if (!user) {
        return new NextResponse(
          JSON.stringify({ message: "user not found" }),
          { status: 404 }
        );
      }
  
      const note = await Note.findOne({ _id: noteId, user: userId });
  
      if (!note) {
        return new NextResponse(
          JSON.stringify({
            message: "note not found or not belong to the user"
          }),
          { status: 404 }
        );
      }
  
      const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        { title, description },
        { new: true }
      );
  
      return new NextResponse(
        JSON.stringify({ message: "Note updated", note: updatedNote }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "error updating note" }),
        { status: 500 }
      );
    }
  }
  
  export async function DELETE(request:Request){
    try{
      const {searchParams} = new URL(request.url);
      const noteId = searchParams.get("noteId");
      const userId = searchParams.get("userId");
      if (!noteId) {
        return new NextResponse(
          JSON.stringify({ message: "noteId is required" }),
          { status: 400 }
        );
      }
  
      if (!Types.ObjectId.isValid(noteId)) {
        return new NextResponse(
          JSON.stringify({ message: "invalid noteId" }),
          { status: 400 }
        );
      }
      if (!userId) {
        return new NextResponse(
          JSON.stringify({ message: "userId is required" }),
          { status: 400 }
        );
      }
  
      if (!Types.ObjectId.isValid(userId)) {
        return new NextResponse(
          JSON.stringify({ message: "invalid userId" }),
          { status: 400 }
        );
      }

      await connect();
      const user = await User.findById(userId);
  
      if (!user) {
        return new NextResponse(
          JSON.stringify({ message: "user not found" }),
          { status: 404 }
        );
      }

      const note = await Note.findOne({ _id: noteId, user: userId });
  
      if (!note) {
        return new NextResponse(
          JSON.stringify({
            message: "note not found or not belong to the user"
          }),
          { status: 404 }
        );
      }
      await Note.findByIdAndDelete(noteId);
      return new NextResponse(
        JSON.stringify({ message: "Note deleted successfully"}),
        { status: 200 }
      );

  
    }catch(error){
      return new NextResponse(
        JSON.stringify({ message: "error deleting note",error }),
        { status: 500 }
      );
    }
  }