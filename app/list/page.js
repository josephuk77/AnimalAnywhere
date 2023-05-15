import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {

  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {
        result.map((a, i) => {
          return (
            <div className="list-item">
              <Link href={'/detail/'+result[i]._id.toString()}><h4>{result[i].title}</h4></Link>
              <p>1월 1일</p>
            </div>

          )
        })
      }
    </div>
  )

}