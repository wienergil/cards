import React from 'react';
import './search-box.styles.css';

const SearchBox = (props) => (
    <div>    
        <input className = 'search'
        type="search" 
        placeholder={props.placeholder} 
        onChange={props.handleChange}
        />
    </div>
)
    
export default SearchBox;