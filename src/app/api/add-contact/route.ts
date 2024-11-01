import { NextResponse } from 'next/server'
import { prisma } from '@/shared/api'

export async function POST(request: Request) {
	const data = await request.json()
	const result = await prisma.comment.create({ data })

	return NextResponse.json({
		data: `Thank you for your interest, ${result.name}!`
	})
}
