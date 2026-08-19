import { PrismaClient } from "@/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req:NextRequest){
    try{
        const user = await prisma.user.findMany();
        return NextResponse.json(user)
    }
    catch(err){
        return NextResponse.json(err)
    }
}