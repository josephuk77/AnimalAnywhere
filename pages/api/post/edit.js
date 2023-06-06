import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function hadler(req, res){
    if(req.method == 'POST'){
        console.log(req.body);
        
        let editpost = {title : req.body.title, content: req.body.content}
        const db = (await connectDB).db('AnimalAnywhere')
        
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)},
            {$set : editpost}

        )
        res.status(200).redirect('/detail/'+req.body._id)
    }
}