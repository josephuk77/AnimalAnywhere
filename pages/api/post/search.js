
import { connectDB } from "@/util/database";

export const dynamic = 'force-dynamic'

export default async function search(req,res) {



    if(req.method == 'POST'){
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('hospital_list').find({hospital_name:/req.body.search/}).toArray();

  res.status(200).redirect('/search_list');
    }
  
  

}