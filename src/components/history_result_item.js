import React from 'react';

const HistoryResultItem = ({item:item})=>{
    
    const styles= {
        margin:'10px 5px',
        padding:'5px'
    }
    
    return (
            <div className="video-list media panel" style={styles} >
                <div className="media-left">
                    {item.value}
                </div>
            </div>
    );
};

export default HistoryResultItem;