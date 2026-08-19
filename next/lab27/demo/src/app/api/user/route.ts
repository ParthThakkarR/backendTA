import {prisma} from '@/lib/prisma'
import { NextRequest,NextResponse } from 'next/server';

export async function GET(req:NextRequest){
try{
    const user = await prisma.student.findMany()
    return NextResponse.json(user)
}catch(err){
    return NextResponse.json(err)
}
}