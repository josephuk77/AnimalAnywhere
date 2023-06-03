import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res){
    if (req.methode == 'POST'){
        let hash = await bcrypt.hash(req.body.password,10);
        console.log(hash);
        let db = (await connectDB).db('AnimalAnywhere');
        await db.collection('user_cred').insertOne(req.body);
    }
}