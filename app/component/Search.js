'use client'

import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

   
    return (
        <div>
        
                <input id="comment" onChange={(e)=>{setComment(e.target.value)}}/>
                <button onClick={()=>{
                    
                    fetch('/search_list',{method :'GET', body:JSON.stringify({search : comment})}).then(r=>r.json())
                    .then((result)=>{
                        setData(result);
                        console.log(data)
                    });
                    
                }}>검색</button>
                
            </div>
    )
}