import { connectDB } from "@/util/database";
import Footers from "../tag/Footers";
export default async function Home() {
  const client = await connectDB;
  const db = client.db("AnimalAnywhere");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="container">
      <div className="input-form-backgroud row">
        <div className="input-form col-md-12 mx-auto">
          <h4 className="mb-3">회원가입</h4>
          <div className="validation-form" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="name">이름</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">이름을 입력해주세요.</div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="nickname">별명</label>
                <input
                  type="text"
                  className="form-control"
                  id="nickname"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">별명을 입력해주세요.</div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">아이디(이메일주소)</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
              />
              <div className="invalid-feedback">이메일을 입력해주세요.</div>
            </div>

            <div className="mb-3">
              <label for="address">주소</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="서울특별시 강남구"
                required
              />
              <div className="invalid-feedback">주소를 입력해주세요.</div>
            </div>

            <div className="mb-3">
              <label for="address2">
                상세주소<span className="text-muted">&nbsp;(필수 아님)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="상세주소를 입력해주세요."
              />
            </div>

            <div className="row">
              <div className="col-md-8 mb-3">
                <label for="root">가입 경로</label>
                <select className="custom-select d-block w-100" id="root">
                  <option value="">선택</option>
                  <option>검색</option>
                  <option>지인</option>
                  <option>홍보</option>
                  <option>기타</option>
                </select>
                <div className="invalid-feedback">
                  가입 경로를 선택해주세요.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="code">자기소개</label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  추천인 코드를 입력해주세요.
                </div>
              </div>
            </div>

            <div className="btn btn-light text-dark me-2"></div>
            <div className="text-end">
              <button type="button" className="btn btn-light text-dark me-2">
                가입 완료
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
