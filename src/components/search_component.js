import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ""}
    };

    render() {        
        return ( 
            <div className="input-group">            
                <input id="search" className="form-control" placeholder="Search" value={this.state.term} onChange = {event => this.onInputChange(event) } onKeyDown={event => this.onKeyPressed(event) }/>       

                <span className="input-group-addon" onClick={event => this.onSearchClicked(this)}>
                    <i className="fa fa-search"></i>
                </span>
            </div>
        );
    };    

    onInputChange(event) {
        this.setState({term:event.target.value});        
    };

    onSearchClicked(event) {
        this.props.onSearchTermChange(this.state.term);
    };
    onKeyPressed(event) {
        if(event.which ==13){
            debugger;
            this.props.onSearchTermChange(this.state.term);
        }
    };

    //render() {
        //return (
        //  <div>
        //      <input value={this.state.term} onChange={this.onInputChange.bind(this)} />
        //      Value of input {this.state.term}
        //  </div>
        //);
                        
        //return ( 
        //    <div>
        //        <label htmlFor="search"
        //        <input id="search" value={this.state.term} onChange = {
        //            (event) => {
        //                this.setState({
        //                    term: event.target.value
        //                });
        //            }
        //        }/>
        //        Value of input {this.state.term} 
        //    </div>
        //);
    //};

    //onInputChange(event) {
    //  this.setState({
    //      term: event.target.value
    //  });
    //};
}

//Stateless component
//export default class SearchComponent extends React.Component {
//    return <input/> ;
//}
//
//export default SearchComponent;