import Search from '@/app/component/Search';
import { connectDB } from '@/util/database';

export default async function search(req) {
 
        const client = await connectDB;
        const db = client.db("AnimalAnywhere");
        let result = await db.collection('hospital_list').find({hospital_name:{ $regex: /^24시/ }}).toArray();
      

    return (
      <div>
          <Search></Search>
          <div className="list-bg">
        <Search></Search>
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
      </div>
    )
  }                            