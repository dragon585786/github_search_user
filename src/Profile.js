import React, { Component } from 'react';
import './App.css';
import './Project.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {
    
    
    render() { 

        const useStyles = theme => ({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
            },
          });
        
          const classes = this.props;
        let userdata = this.props.userData;
        let repos = `${userdata.homeURL}/repositories`;
        if(userdata.notFound === 'user not found'){

            return ( <div>
                <h2>heeyyyyy user not found try with exact name hehehehehe :(</h2>
            </div> );
        } else{

            return ( <div className='showdow-img'>
          <a herf={userdata.homeURL} target='blank' title={userdata.name || userdata.username}><div ><img className="img-div" src={userdata.avatar} /></div></a>                            <h2>
         <a herf={userdata.homeURL} target='blank'> {userdata.name || userdata.username}</a>
        </h2>
         </div>);
        }
       
    }
}
 
export default Profile;






// <div className={useStyles.root}>
//                                 <Grid container spacing={3}>
//                                     <Grid item xs={4}  className='shadow-img'>
//                                     <a herf={userdata.homeURL} target='blank' title={userdata.name || userdata.username}><div ><img className="img-div" src={userdata.avatar} /></div></a>
//                                     <h2>
//                                     <a herf={userdata.homeURL} target='blank'> {userdata.name || userdata.username}</a>
//                                     </h2>
//                                 </Grid>
//                                 </Grid>
                               
//                             </div>