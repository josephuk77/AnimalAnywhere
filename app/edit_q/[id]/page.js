import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function edit(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('qna').findOne({_id: new ObjectId(props.params.id)}); 
    console.log(result);
  

    return(
        <div>
            <h4>글 수정</h4>
            <form action="/api/qna/edit" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <input style={{display : 'none'}} name="_id" defaultValue={result._id.toString()} />
                <button type="sumit">수정 완료</button>
            </form>
        </div>
    )
}