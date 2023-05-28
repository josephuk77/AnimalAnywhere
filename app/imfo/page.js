import { connectDB } from "@/util/database";
import Footers from "../tag/Footers";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="container">
      <div>
        <div
          className="shadow-none p-3 bg-body-tertiary rounded"
          style={{
            padding: "30px 30px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          <div>
            <div className="tabs tabs-style-linetriangle">
              <nav>
                <ul>
                  <li>
                    <a href="#div-linetriangle-1">
                      <span>영업시간</span>
                    </a>
                  </li>
                  <li>
                    <a href="#div-linetriangle-2">
                      <span>응급실</span>
                    </a>
                  </li>
                  <li>
                    <a href="#div-linetriangle-3">
                      <span>주차장</span>
                    </a>
                  </li>
                  <li>
                    <a href="#div-linetriangle-4">
                      <span>위치</span>
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="병원을 입력하세요.."
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    검색
                  </button>
                </form>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="map" id="inf">
            <iframe
              src="https://www.naver.com/"
              width="720"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>

        <div className="col-6" style={{ float: "float:rigth" }}>
          <div className="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary"></strong>
              <h3 className="mb-0">병원이름(검색시)</h3>
              <div className="mb-1 text-muted">영업시간()</div>
              <p className="card-text mb-auto">정보 상세히()</p>
              <a href="#" className="stretched-link">
                (자세히 보기 아직 모르겠음)
              </a>
            </div>
          </div>
          <div className="position-relative">
            <div className="position-absolute top-30 start-50">
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  지역선택
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a id="Seoul" className="dropdown-item" href="#">
                      서울
                    </a>
                  </li>
                  <li>
                    <a id="rudrl" className="dropdown-item" href="#">
                      경기
                    </a>
                  </li>
                  <li>
                    <a id="rudtkd" className="dropdown-item" href="#">
                      경상도
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
