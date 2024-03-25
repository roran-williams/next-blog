import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Note from "@/lib/models/notes";
import {Types} from "mongoose";
import User from "@/lib/models/user";

export async function GET(request:Request,context:{params:any}){
    const noteId = context.params.note;
    try{
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "userId is required" }), { status: 400 });
    }
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ error: "invalid userId" }), { status: 400 });
    }
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

      return new NextResponse(JSON.stringify(note),{status:200});
    }catch(error){
        return new NextResponse(
            JSON.stringify({ message: "error fetching note",error }),
            { status: 500 }
          );

    }

}