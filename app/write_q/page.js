export default function Write(){
    
    
    return(
        <div>
            <h4>글 작성</h4>
            <form action="/api/qna/new" method="POST">
                <input name="title" placeholder="글 제목"/>
                <input name="content" placeholder="글 내용"/>
                <button type="sumit">버튼</button>
            </form>
        </div>
    )
}