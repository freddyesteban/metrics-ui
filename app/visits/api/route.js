import { NextResponse } from "next/server"
import myStore from '../../../lib/store'

const visitsKey = "visits"

export async function GET() {
  const data = myStore.get(visitsKey)
  return NextResponse.json({ "data": data })
}

export async function POST() {
  const data = myStore.get(visitsKey)
  let newValue = 1
  if (data !== undefined) {
    newValue++
  }

  myStore.set(visitsKey, newValue)
  return NextResponse.json({ message: "created" }, { status: 201 })
}
