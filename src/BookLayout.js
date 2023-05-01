import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BookLayout() {
  return (
    <>
        <Link to="/books/1">book 1</Link>
        <br/>
        <Link to="/books/2">book 2</Link>
        <br/>
        <Link to="/books/new">New Book</Link>
        {/* 현재 라우트가 어디에 있든 무조건 렌더링하기 위한 컴포넌트 : outlet */}
        <Outlet context={{ hello : "World" }} />
    </>
  )
};

export default BookLayout;