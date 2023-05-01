import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

// plugin 설치하고 rfce 단축키를 입력하면 알아서 함수형 컴포넌트를 자동 생성
function Book() {
    const { id } = useParams();
    // const { hello } = useOutletContext();
    return (
        <h1>Book {id}</h1>

    )
}

export default Book;
