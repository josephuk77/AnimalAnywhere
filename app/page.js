import { connectDB } from "@/util/database";
import Footers from "./component/Footers";


export default async function Home() {

  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection('post').find().toArray();         


  return (
    <div>
    <main className="container">
      
      {/* <!-- <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Animal anywhere 인사</h1>
        <p class="lead my-3">
          Animal anywhere는 반려인을 위한,애완동물을 위해 의료서비스를
          제공하고자 노력하는 Animal anywhere입니다!
        </p>
        
      </div>
    </div> --> */}
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Animal anywhere 인사</h1>
          <p className="lead my-3">
            Animal anywhere는 반려인을 위한,애완동물을 위해 의료서비스를
            제공하고자 노력하는 Animal anywhere입니다!
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Q&A
              </strong>
              <h3 className="mb-0">최근 게시물</h3>
              <p className="card-text mb-auto">
                이 부분에 Q&A 최근 게시글 삽입
              </p>
              <a href="#" className="stretched-link">
                자세히..
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                자랑게시글
              </strong>
              <h3 className="mb-0">최근게시글</h3>
              <p className="mb-auto">최근게시글 여기다가</p>
              <a href="#" className="stretched-link">
                자세히..
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footers />
  </div>
  )
}
