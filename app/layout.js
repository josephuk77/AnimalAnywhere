import Link from 'next/link'
import './globals.css'
import { Inter, Righteous } from 'next/font/google'
import LoginBtn from './component/LoginBtn'
import LogoutBtn from './component/LogoutBtn'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.104.2" />
        <title>Animal anywhere</title>
        <script
          type="text/javascript"
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charset="utf-8"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        ></link>
      </head>
      <body className={inter.className}>
        <div className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#home" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/qna" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#speedometer2" />
                    </svg>
                    Q&A(로그인시)
                  </a>
                </li>
                <li>
                  <a href="/list" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#table" />
                    </svg>
                    자랑해요(로그인시)
                  </a>
                </li>
                <li>
                  <a href="/hospital_list" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#table" />
                    </svg>
                    병원정보
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#people-circle" />
                    </svg>
                    병원후기,별점
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form
              className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="검색어를 입력하세요.."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
            {
              session
                ? <span>{session.user.name} <LogoutBtn /> </span>
                : <><LoginBtn ></LoginBtn><Link className="btn btn-light text-dark me-3" href={'/register'}>회원가입</Link></>
            }
            </div>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>
        {children}
      </body>
    </html>
   
   

  )
}
