import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if (req.method == 'POST') {
        if (session) {

            req.body = JSON.parse(req.body)
            let commentinsert = {
                content: req.body.comment,
                parent: new ObjectId(req.body.id),
                author: session.user.email,
                star: req.body.star
            }
            let db = (await connectDB).db('AnimalAnywhere');
            let result = await db.collection('comment').insertOne(commentinsert);
            res.status(200).json('저장완료')
        }else(
            res.status(403).json('로그인하고 사용하세요')
        )
    }
} 