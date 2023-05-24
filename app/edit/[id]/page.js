import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function edit(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)}); 
    console.log(result);
    await db.collection('post').updateOne({},{title : ''}); 

    return(
        <div>
            <h4>글 수정</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <button type="sumit">버튼</button>
            </form>
        </div>
    )
}