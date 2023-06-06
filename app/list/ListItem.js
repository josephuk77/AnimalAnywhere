'use client'

import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

export default function ListItem({result},{session}) {
  console.log(session);  

  return (
    <div className="list-bg">
      <Link href={'/write'}>글 쓰기</Link>
      
      {
        result.map((a, i) => {
          return (
            <div className="list-item" key={i}>
              <Link href={'/detail/' + result[i]._id.toString()}><h4>{result[i].title}</h4></Link>
              
              <Link href={'/edit/'+result[i]._id.toString()}>✏️&nbsp;&nbsp;&nbsp;</Link> 
              <span onClick={(e) => {
                fetch('/api/post/delete', {
                  method: 'DELETE',
                  body: result[i]._id
                }).then((r) => {
                  if (r.status == 200) {
                    return r.json()
                  } else {
                    //서버가 에러코드전송시 실행할코드
                    alert('작성자만 삭제가능 합니다');
                    return '실패';
                  }
                })
                  .then((result) => {
                    if(result!='실패'){
                    //성공시 실행할코드
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = 'none'
                      }, 1000)
                      console.log(result)
                    
                    }
                  }).catch((error) => {
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error)
                  })
              }}>🗑️</span>
              <p>1월 1일</p>
            </div>

          )
        })
      }
    </div>
  )
}