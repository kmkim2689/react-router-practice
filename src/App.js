import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';

function App() {
  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>content</h1>}/>
      </Routes> */}
      <nav>
        <ul>
          <li><Link replace to={`/`}>Home</Link></li>
          <li><Link to={`/books`}>Books</Link></li>
        </ul>
      </nav>
      <Routes>
      {/* Route 컴포넌트에서 actual path를 정의
      /는 root path임을 의미 */}
        <Route path="/" element={<Home />}/>
        <Route path="/books/*" element={<BookRoutes />}>
          {/* books 컴포넌트를 렌더링하기 위하여, path 속성 대신 index 속성을 사용 */}
        </Route>
        {/* 
        <Route path="/books" element={<BookList />}/>
        <Route path="/books/:id" element={<Book />}/>
        <Route path="/books/new" element={<NewBook />}/> */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
    
  );
}

export default App;
