import React, {Component} from 'react';
import { Link } from 'react-router';

var styles={
        height:'25px'
    };

class Main extends Component {
    
    
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"><img src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg" style={styles}/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/search" activeClassName="active">Search</Link></li>
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    };
};

export default Main;