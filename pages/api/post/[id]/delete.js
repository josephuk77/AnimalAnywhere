import { connectDB } from "@/util/database";

export default async function hadler(req,res){
    if(req.method == "DELETE"){
        console.log(req.body._id)
        const client = await connectDB;
        const db = client.db("AnimalAnywhere");
        let result = await db.collection('post').deleteOne({_id: new ObjectId(rops.params.id)}); 
        console.log(result);

        return req.status(500).redirect('/list')
    }
}