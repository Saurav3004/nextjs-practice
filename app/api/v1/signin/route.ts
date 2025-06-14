import {  NextRequest, NextResponse } from "next/server";

export default function POST(req:NextRequest){

    const data = req.json()

    console.log(data)
    
    NextResponse.json({
        message:"Sign up successfully"
    })
}