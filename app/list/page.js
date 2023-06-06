import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
import { getServerSession } from 'next-auth'

export const dynamic = 'force-dynamic'

export default async function List() {

  let session = await getServerSession(authOptions);


  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();

  
  
  return(
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  )

}