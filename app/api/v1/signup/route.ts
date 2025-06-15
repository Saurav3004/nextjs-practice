import { NextRequest, NextResponse } from "next/server";

export default function POST(req:NextRequest,res:NextResponse){
    const data = req.json()


    console.log(data)
    return res.json()
}