import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
import './Project.css';



const API = 'https://api.github.com/users'




class Github extends Component {
    getProfile(username){
        let finalURL = `${API}/${username}`;
        fetch(finalURL)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
            username: data.login,
            name: data.name,
            avatar:data.avatar_url,
            repo: data.public_repos,
            homeURL: data.html_url,
            notFound: data.message
            })
        })
        .catch((e) => console.log('thre was a problem hehehhe !!!!!!!!! :('))
    }
    componentDidMount(){
        this.getProfile(this.state.username);
    }
    constructor(props) {
        super(props);
        this.state = { 
            username: 'dragon585786',
            name: '',
            avatar:'',
            repo: '',
            homeURL: '',
            notFound: ''

         }
         this.getProfile = this.getProfile.bind(this);
    }
    render() { 
        return ( <div>
            <Search searchProfile={this.getProfile} />
            <Profile userData={this.state} />
        </div> );
    }
}
 
export default Github;