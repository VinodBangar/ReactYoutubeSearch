import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//import FirstComponent from './components/fisrtcomponent';
//import SecondComponent from './components/secondComponent';
import {Router,browserHistory} from 'react-router';
import routes from './routes';



//Instantiating a react component
//ReactDOM.render( <SearchComponent/>, document.querySelector('.container'));
ReactDOM.render( <Router history={browserHistory} routes={routes} />, 
                document.querySelector('.appcontainer'));