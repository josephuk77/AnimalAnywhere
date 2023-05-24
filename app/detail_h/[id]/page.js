import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import axios from 'axios';

export default async function Detail(props){

    const client = await connectDB;
    const db = client.db("AnimalAnywhere");
    let result = await db.collection('hospital_list').findOne({_id: new ObjectId(props.params.id)}); 
    console.log(result);

    try {
        const response = await axios.get('https://api.kakao.com/v1/api/endpoint', {
          headers: {
            Authorization: 'f5719fcabf7f10e3adf37f78f899b025',
          },
        });
    
        // 응답 처리
        console.log(response.data);
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: '카카오 API 요청 실패' });
      }
    




    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.hospital_name}</h4>
            <p>{result.addr}</p>
            <p>{result.roadaddr}</p>

           

               
        </div>
    )
}