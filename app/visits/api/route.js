import { NextResponse } from "next/server"
import myStore from '@/lib/store'

const visitsKey = "visits"

export async function GET() {
  const data = myStore.get(visitsKey)
  return NextResponse.json({ "data": data })
}

export async function POST(request) {
  const newVisit = await request.json();
  const existingVisits = myStore.get(visitsKey)

  let pageName = newVisit.page
  if (existingVisits === undefined) {
    let newEntry = {}
    newEntry[pageName] = 1
    myStore.set(visitsKey, newEntry)
  } else {
    if (pageName in existingVisits) {
      existingVisits[pageName]++
    } else {
      existingVisits[pageName] = 1
    }

    myStore.set(visitsKey, existingVisits)
  }

  return NextResponse.json({ message: "created" }, { status: 201 })
}
