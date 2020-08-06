import React from 'react'

function SearchArea(props) {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook}>
                <input onChange={props.handleSearch} type="text"  placeholder="Enter your Book"/>
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchArea
