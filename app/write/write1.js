import { connectDB } from '@/util/database';
import Footers from "../tag/Footers";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();         
  console.log(result);

  return (
   <div>
      
      
   </div>
  )
}