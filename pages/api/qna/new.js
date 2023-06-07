import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import {getServerSession } from "next-auth";

export default async function hadler(req, res){
    let session = await getServerSession(req, res, authOptions)
    if (session){
        req.body.author = session.user.email;
    }
    if(req.method == 'POST'){
        if(req.body.title == "" || req.body.content==""){
            return res.status(500).json('공백 불가')
        }
        try {
            const client = await connectDB;
            const db = client.db("AnimalAnywhere");
            let result = await db.collection('qna').insertOne(req.body);
        
            return res.status(200).redirect('/qna');
        } catch (error) {
            alert("db 오류");
        }
       
        
       
  
    }
    

}