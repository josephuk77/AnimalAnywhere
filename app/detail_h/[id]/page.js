import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function Detail(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('hospital_list').findOne({_id: new ObjectId(props.params.id)}); 
    console.log(result);






    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.hospital_name}</h4>
            <p>{result.addr}</p>
            <p>{result.roadaddr}</p>

           

               
        </div>
    )
}