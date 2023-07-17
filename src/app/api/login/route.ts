import { signJwtAccessToken } from "@/lib/jwt"
import prisma from "@/lib/prisma"
import * as bcrypt from 'bcryptjs'

type requestBody = {
    username: string
    password: string
}

export async function POST(request: Request) {
    const body: requestBody = await request.json()

    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    })

    if(user && (await bcrypt.compare(body.password, user.password))){
        const { password, ...userWithoutPass} = user
        const accessToken = signJwtAccessToken(userWithoutPass)
        const result = {
            accessToken,
            ...userWithoutPass
        }
        return new Response(JSON.stringify(result))
    } else return new Response(JSON.stringify({msg: 'wrong credentials'}))
}