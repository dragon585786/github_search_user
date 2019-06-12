import React, { Component } from 'react';
import Github from './Github';
import './App.css';
import ButtonAppBar from './Component/Header';
import Auth0Lock from 'auth0-lock';
import './Project.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      idToken : '',
      profile:{}
     }
     this.showLock = this.showLock.bind(this);
     this.setProfile = this.setProfile.bind(this);
     this.getProfile = this.getProfile.bind(this);



    
  }
  showLock(){
    this.lock.show();
  }
  setProfile(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))

    })

  }
  getProfile(){
    if(localStorage.getItem('idToken') !=null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
  
      }, () =>{
          console.log(this.state);
      });
    }
  }
  static defaultProps = {
    clientID  : 'GFallf25H3vqZZ1UADSM7Ca85zFlHe65',
    domain : 'dev-fi4k7qcp.auth0.com'
  }
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated',(authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.idToken, profile);
      });
    }); 

    this.getProfile();
  }
  render() { 
    let gitty;
    // if(this.state.idToken){
      // gitty = <Github />

    // } else{
    //   gitty = 'Click on login button :D ';
    // }
    return (  <div className="App body-color">
    
     <ButtonAppBar login={this.showLock} />
     <Github />
     
    </div> );
  }
}
 


export default App;
