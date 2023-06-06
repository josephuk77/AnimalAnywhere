import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment_h from "@/app/component/Comment_h";


export default async function Detail(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('hospital_list').findOne({_id: new ObjectId(props.params.id)}); 
    let star = await db.collection('comment').find({ parent : new ObjectId(props.params.id)}); 
    console.log(star);





    return(
        <div>
            <h4>상세페이지</h4>
            <h4>병원이름 :{result.hospital_name}</h4>
            <p>주소:{result.addr}</p>
            <p>도로명주소:{result.roadaddr}</p>
            <p>전화번호:{result.number}</p>
            
            
      
           <Comment_h id={result._id} star={star.star}/>
        </div>
    )
}