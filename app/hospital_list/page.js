import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('hospital_list').find().toArray(); 
    console.log(result);

    return (
      <div className="list-bg">
        {
        result.map((a,i)=>{
          return(
            <div className="list-item">
              <Link href={'/detail_h/'+result[i]._id.toString()}><h4>{result[i].hospital_name}</h4></Link>
              <p>개업일{result[i].permission}</p>
            </div>
        
          )
        })
      }
      </div>
      
    )

  }