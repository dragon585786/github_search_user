import React, { Component } from 'react';
import './Project.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event){
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value = ''; 
    }
    render() { 
        return ( <div>
            <form onSubmit={this.submitForm} className='search-box'>
                <label>
                    <input className='search-inner' type='search' ref='username' placeholder='ENTER USERNAME AND HIT ENTER' />
                </label>
            </form>
        </div> );
    }
}
 
export default Search;