import { connectDB } from '@/util/database';
import Footers from "../tag/Footers";
import { useEffect } from 'react';

export default async function Component() {
  useEffect(() => {
    $('#summernote').summernote({
      placeholder: '내용을 입력해주세요',
      tabsize: 2,
      height: 300
    });
  }, []);

  return (
    <div>
      {/* Your component JSX code */}
      <textarea id="summernote"></textarea>
    </div>
  );
}
export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();         
  console.log(result);

  return (
   <div>
      <div style="padding-top: 5rem;">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">Animal anywhere</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">

              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="검색" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">검색</button>
              </form>
            </div>
        </nav>

       <h1 style="text-align : center" bold ><b>동물병원 후기를 작성합니다</b></h1> 
  

        <div role="main" className="container">
            <form name="form" method="POST" action="/bulletin_wr01">
                <div className="pt-1">
                    <input type="text" name="title" placeholder="제목을 입력하세요" style="border-radius:5px; width:100%; padding:5px;"/>
                </div>
                <div className="pt-1">
                    <textarea id="summernote" name="contents"></textarea>
                </div>    
                <script>
                    Component();
                  </script>                     
                <div className="pt-1 text-right">
                    <button className="btn btn btn-success" type="submit" style="width:10%; padding:5px;">완료</button>
                </div>    
            </form>
          </div>   
          <Footers />     
      </div>
      
   </div>
  )
}
