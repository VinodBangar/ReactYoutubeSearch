//Stateless Component
import React from 'react';
import HistoryResultItem from './history_result_item';

const HistoryResults = (props)=>{    
    const resultItems = props.results.map((result) => {
            return(<HistoryResultItem item={result} key={result.key}/>);
    });
            
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                History
            </div>
            <div className="panel-body">
                {resultItems}
            </div>
        </div>
    );
};

export default HistoryResults;