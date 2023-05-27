import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {

  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();
  console.log(result);
  
  return(
    <div className="list-bg">
      <ListItem result={result}/>
    </div>
  )

}