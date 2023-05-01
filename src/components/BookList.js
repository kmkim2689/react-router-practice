import React from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  return (
    <>
      <h1>BookList</h1>
      {/* to에 절대경로를 넘겨주어야 url 상의 오류가 나지 않음에 유의한다.
      /books/1이 아니라 books/1로 하면 현재 위치를 기준으로 url이 설정되므로 url은 /books/books/1이 된다. */}
      

    </>
  )
}

export default BookList;