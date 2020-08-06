import React, { useState } from 'react'
import SearchArea from './SearchArea'
import BookList from './BookList'
import request from 'superagent'

function Books() {

    const[state, setState] = useState({
        books: [],
        searchField: ''
    });

    function searchBook(e){
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: state.searchField})
        .then((data) =>{
            setState({
                books: [...data.body.items]
            })
        })
    }


     function handleSearch(e){
         const {name, value} = e.target
         setState(prevState => {
            return { ...prevState, searchField: value }
          })
            
         console.log(state.searchField);
     }

    return (
        <div>
            <SearchArea 
                searchBook={searchBook}
                handleSearch={handleSearch}
            />
            <BookList  books={state.books}/>
        </div>
    )
}

export default Books
