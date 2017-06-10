//Stateless Component
import React from 'react';
import SearchResultItem from './search_result_item';

const SearchResults = (props)=>{    
    const resultItems = props.results.map((result) => {
            return(<SearchResultItem item={result} key={result.etag}/>);
    });
            
    return (
        <div className="list-group">
            {resultItems}
        </div>
    );
};

export default SearchResults;