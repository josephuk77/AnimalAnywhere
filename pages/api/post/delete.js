import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function hadler(req,res){
    if(req.method == "DELETE"){
        console.log(req.body)
        const client = await connectDB;
        const db = client.db("AnimalAnywhere");
        let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)}); 
        console.log(result);


        return res.status(200).json('삭제완료')

    }
}