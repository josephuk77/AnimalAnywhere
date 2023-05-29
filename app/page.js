import { connectDB } from '@/util/database';
import LoginBtn from './tag/LoginBtn';

export const revalidate = 60;  //60초동안 이 페이지 캐싱

export default async function Home() {

  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();         
  console.log(result);

  return (
   <div>
      <LoginBtn></LoginBtn>
      <h4>안녕</h4>
   </div>
  )
}
