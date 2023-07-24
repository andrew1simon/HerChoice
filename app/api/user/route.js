import { NextResponse } from "next/server"
import {data} from "./data"

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    return NextResponse.json(id)
}
export async function POST(req) {
    let user = await req.json()
    data.push(user)
    return NextResponse.json(user)
}