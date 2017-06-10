import Router,{Link} from 'react-router';
import React from 'react';

const Header=()=>{
	
	return (	
		<nav className="navbar navbar-default">
            <div className="container-fluid">
		      <Link to="app" className="navbar-brand">
		          <img src=""/>
		      </Link>
		      <ul className="nav navbar-nav">
		          <li><Link to="app">Home</Link></li>
		          <li><Link to="search">Search</Link></li>
		          <li><Link to="about">About</Link></li>		
		      </ul>
		  </div>
		</nav>
	)
}

export default Header;