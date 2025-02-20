import { NextResponse } from "next/server";

export async function POST(request){
    const body = await request.text();
    console.log(body);
    return NextResponse.json({success:true});
}