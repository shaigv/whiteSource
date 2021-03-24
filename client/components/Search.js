
import React, { useState } from 'react';

const Search = (props) => {
    const [value, setValue] = useState("");

    const search=(value)=>{
        props.onValueChange(value);
        setValue("");
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search(value);
        }
    }


    return (
       


            <div className="ui action input">
                <input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Enter product id" />
                <button className="ui icon button" onClick={() =>  search(value)}>
                    <i className="search icon"></i>
                </button>
            </div>


    );

}

export default Search;