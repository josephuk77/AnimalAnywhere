'use client'

import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=>{
        fetch('/api/comment/list?id='+props.id).then(r=>r.json())
        .then((result)=>{
            setData(result);
            console.log(data)
        })
    },[])
    return (
        <div>
            <hr></hr>
            { 
           data.length > 0 ?
           data.map((a,i)=>
             <p key={i}>{a.content}</p>
           )
           : '댓글없음'
        }
                <input id="comment" onChange={(e)=>{setComment(e.target.value)}}/>
                <button onClick={()=>{
                    
                    fetch('/api/comment/new',{method :'POST', body:JSON.stringify({comment : comment, id : props.id})});
                    
                }}>댓글전송</button>
            </div>
    )
}