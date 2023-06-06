import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'
import { redirect } from "next/dist/server/api-utils";

export default async function handler(req, res){
    if (req.method == 'POST'){
        let hash = await bcrypt.hash(req.body.password,10);
        console.log(hash);
        console.log(req.body);
        req.body.password = hash;
        req.body.role = 'user';
        let db = (await connectDB).db('AnimalAnywhere');

        const checkExisting = await db.collection('user_cred').findOne({email:req.body.email});
        console.log(checkExisting);
        if (checkExisting) {
            
            res.status(400);
            return res.redirect('/register?message=alreadyuse').json('이미 사용중인 아이디 입니다.');
          }

        await db.collection('user_cred').insertOne(req.body);

        res.status(200).redirect('/');

    }
}