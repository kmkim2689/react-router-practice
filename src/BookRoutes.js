import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import BookLayout from './BookLayout';

function BookRoutes() {
  return (
    <>
        <Routes>
            <Route element={<BookLayout />}>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />}/>
                <Route path="new" element={<NewBook />}/>
            </Route>
            
        </Routes>
    </>
    
  );
}

export default BookRoutes;