import React from 'react';

import youtube from 'youtube-api-search';

import SearchComponent from './search_component';
import SearchResults from './search_results';
import HistoryResults from './history_results';

var keyCount=0;

export default class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            histotry: []
        }
    };
    
    //searchYoutube(searchtext){
    searchYoutube = (searchtext) =>{
        const API_KEY = 'AIzaSyCpzd-Fb8gSgdnduWtxTs2fezZNvYiBESU';
        this.state.histotry.push({key:keyCount++,value:searchtext});   
        youtube({key: API_KEY,term: searchtext}, data => {
            console.log(data);
            this.setState({results:data});
            
        });
    };
    
    render(){
        return (
            <div>
                <div className="col-md-8">                
                    <SearchComponent value={this.props.params.searchText} onSearchTermChange={this.searchYoutube}/>
                    <SearchResults results={this.state.results} />
                </div>
                <div className="col-md-4">
                    <HistoryResults results={this.state.histotry} />            
                </div>
            </div>
        );
        
        //return (
        //    <div>                
        //        <SearchComponent onSearchTermChange={this.searchYoutube.bind(this)}/>
        //        <SearchResults results={this.state.results} />
        //    </div>
        //);
    };
}