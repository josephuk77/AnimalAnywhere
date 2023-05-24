import { connectDB } from "@/util/database";

export default async function hadler(req, res){
    if(req.method == 'POST'){
        const client = await connectDB;
        const db = client.db("AnimalAnywhere");
        let result = await db.collection('post').find().toArray(); 
    
        return res.status(200).json(result);
    }
}