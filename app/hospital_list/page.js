import { connectDB } from "@/util/database";

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
              <h4>{result[i].hospital_name}</h4>
              <p>개업일{result[i].permission}</p>
            </div>
        
          )
        })
      }
      </div>
    )

  }