//Stateless Component
import React from 'react';

const NotFound = (props) => {
    return ( 
        <div className="jumbotron"> 
            <h1>Error 404 - Page Not Found</h1>
            <Link to="app"> Back to home</Link>
        </div> 
    );
}

export default NotFound;