'use client'

import Link from "next/link"

export default function ListItem(props){
    

    return (
        <div className="list-bg">
          <Link href={'/write'}>글 쓰기</Link>
          {
            props.result.map((a, i) => {
              return (
                <div className="list-item" key={i}>
                  <Link href={'/detail/'+ props.result[i]._id.toString()}><h4>{ props.result[i].title}</h4></Link>
                  <span onClick={(e)=>{
                    fetch('/api/post/delete',{
                        method:'DELETE',
                        body : props.result[i]._id
                    }).then((r)=>{
                        if(r.status == 200) {
                          return r.json()
                        } else {
                          //서버가 에러코드전송시 실행할코드
                          console.log('삭제실패')
                        }
                      })
                      .then((result)=>{ 
                        //성공시 실행할코드
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(()=>{
                            e.target.parentElement.style.display = 'none'
                        },1000)
                        console.log(result)
                      }).catch((error)=>{
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