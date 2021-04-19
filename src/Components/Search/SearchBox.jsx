import React from 'react'
import './SearchBox.css';


const SearchBox = (props) => {
    return (
        <div className="text-center search my-2">
                <input type="text" onChange={(event) => props.username(event.target.value)} className="form-control text-center searchbox" placeholder="Username" aria-label="Username" />
                <button type="submit" onClick={props.data} className="btn btn-dark mx-2">Search</button>
        </div>
    )
}

export default SearchBox
