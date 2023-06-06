
import { connectDB } from '@/util/database';



export default async function Home() {

  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();         


  return (
   <div>
      <h4>안녕</h4>

   </div>
  )
}
