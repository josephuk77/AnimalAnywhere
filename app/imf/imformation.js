import { connectDB } from "@/util/database";
import Footers from "../tag/Footers";
import "imfo.css";
export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      <section>
        <div
          class="shadow-none p-3 bg-body-tertiary rounded"
          style="padding: 15px 30px; border-radius: 10px; font-weight: bold;"
        >
          <div class="p-3 mb-3 bg-warning-subtle text-emphasis-warning">
            <div class="tabs tabs-style-linetriangle">
              <nav>
                <ul>
                  <li>
                    <a href="#section-linetriangle-1">
                      <span>영업시간</span>
                    </a>
                  </li>
                  <li>
                    <a href="#section-linetriangle-2">
                      <span>응급실</span>
                    </a>
                  </li>
                  <li>
                    <a href="#section-linetriangle-3">
                      <span>주차장</span>
                    </a>
                  </li>
                  <li>
                    <a href="#section-linetriangle-4">
                      <span>위치</span>
                    </a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="병원을 입력하세요.."
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    검색
                  </button>
                </form>
              </nav>
            </div>
            <div class="position-relative">
              <div class="position-absolute top-30 start-50">
                <div class="btn-group">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    지역선택
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a id="Seoul" class="dropdown-item" href="#">
                        서울
                      </a>
                    </li>
                    <li>
                      <a id="rudrl" class="dropdown-item" href="#">
                        경기
                      </a>
                    </li>
                    <li>
                      <a id="rudtkd" class="dropdown-item" href="#">
                        경상도
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="map" id="inf">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.793095414915!2d126.87631921564743!3d37.53637433361191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e9825bc27f7%3A0x6662bd7a5253af53!2z7Jqw7ISx7JeQ7Y6g7YOA7Jq0!5e0!3m2!1sko!2skr!4v1613310853103!5m2!1sko!2skr"
              width="720"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            >
              z
            </iframe>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary"></strong>
              <h3 class="mb-0">Featured post</h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary"></strong>
              <h3 class="mb-0">Featured post</h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
