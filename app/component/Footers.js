export default function Footers() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="btn btn-light text-dark me-2">
              맨위로 올라가기
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-light text-dark me-2">
              Q&A
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-light text-dark me-2">
              자랑해요
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-light text-dark me-2">
              병원후기,별점
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-light text-dark me-2">
              Github
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2023.06.08 by Animal anywhere
        </p>
      </footer>
    </div>
  );
}
