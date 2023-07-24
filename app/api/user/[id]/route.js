import { NextResponse } from "next/server"
import {data} from "../data"

export async function GET(req , context) {
    const {id} = context.params
    let count = data.length
    let Getuser = data[id]
    console.log("from server")
    return NextResponse.json({ count: count, userData: Getuser})
}
