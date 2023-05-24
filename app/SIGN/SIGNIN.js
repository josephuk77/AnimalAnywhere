import { connectDB } from "@/util/database";

export default async function Signin() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      <h4>안녕</h4>
    </div>
  );
}
