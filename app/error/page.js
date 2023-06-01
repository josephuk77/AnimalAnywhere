import { connectDB } from "@/util/database";
import LoginBtn from "../tag/LoginBtn";

export const revalidate = 60; //60초동안 이 페이지 캐싱

export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div class="alert alert-danger " role="alert">
      <LoginBtn></LoginBtn>
      <h4 class="alert-heading">잘못된 접근입니다</h4>
      <p>
        animal anywherer 에서 허용하지 않는 접근입니다 이전 페이지로
        돌아가주세요
      </p>
      {/* <hr> */}
      <p class="mb-0">인터넷 상태와 로그인 여부를 확인해주세요</p>
    </div>
  );
}
