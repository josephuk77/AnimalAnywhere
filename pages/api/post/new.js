import { connectDB } from "@/util/database";

export default async function hadler(req, res){
    if(req.method == 'POST'){
        if(req.body.title == "" || req.body.content==""){
            window.alert('제목을 입력하세요');
            return res.status(500).json('공백 불가')
        }
        try {
            const client = await connectDB;
            const db = client.db("AnimalAnywhere");
            let result = await db.collection('post').insertOne(req.body);
        
            return res.status(200).redirect('/list');
        } catch (error) {
            alert("db 오류");
        }
       
        
       
  
    }
    

}