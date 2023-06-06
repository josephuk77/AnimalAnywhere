import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Comment from "@/app/component/Comment";

export default async function Detail(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)}); 
    console.log(result);

    




    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <div>
                <Link href={'/edit/'+result._id.toString()}>✏️&nbsp;&nbsp;&nbsp;</Link> 
            </div>
                <Comment id={result._id}/>
        </div>
    )
}