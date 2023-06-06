'use client'

import { useEffect, useState } from "react"
import React from "react";
import { FaStar } from "react-icons/fa";


export default function Comment(props, { onChangeHandler }) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    console.log(rating);

    useEffect(() => {
        fetch('/api/comment/list?id=' + props.id).then(r => r.json())
            .then((result) => {
                setData(result);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <hr></hr>
            {
                data.length > 0 ?
                    data.map((a, i) =>
                        <>{[...Array(5)].map((star, i) => {
                        
                            return (
                                <label>
                                    
                                   
                                    <FaStar
                                        className="star"
                                        color={props.star>i? "#fcbe32" : "#e4e5e9"}
                                        size={40}
                                        
                                    />
                                </label>
                            );
                        })}
                           <p key={i}>작성자:{a.author}</p><p key={i}>{a.content}</p></>
                    )
                    : '댓글없음'
            }
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                className="rating"
                                type="radio"
                                name="star"
                                value={ratingValue}
                                onChange={(e) => onChangeHandler(e)}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#fcbe32" : "#e4e5e9"}
                                size={40}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            <input id="comment" onChange={(e) => { setComment(e.target.value) }} />

            <button onClick={() => {

                fetch('/api/comment/new', { method: 'POST', body: JSON.stringify({ comment: comment, id: props.id, star: rating }) });

            }}>댓글전송</button>
        </div>
    )
}