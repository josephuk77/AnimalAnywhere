import { connectDB } from "@/util/database";
import Footers from "../tag/Footers";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use href="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                동물병원 후기
              </a>
            </li>
            <li>
              <a className="nav-link px-2 link-dark">
                영수증 인증샷을 통해 진짜 후기를 볼 수 있어요!
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="병원이름"
              aria-label="Search"
            />
          </form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <a href="#1">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </a>
          </svg>
        </div>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image
                    href="#"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>

                <div className="card-body">
                  <p className="card-text">후기 내용</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="your-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          자세히
                        </button>
                      </a>

                      <a href="your-author-link-url" target="_blank">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          작성자: ()
                        </button>
                      </a>
                    </div>
                    <small className="text-muted">작성일</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example" className="position-relative">
        <ul className="pagination position-absolute top-0 start-50 translate-middle-x">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="position-relative">
        <a href="your-link-url" className="position-absolute top-0 end-0">
          <button type="button" className="btn btn-outline-success">
            작성
          </button>
        </a>
      </div>
      <Footers />
    </div>
  );
}
