import React from 'react'
import Match from './0_matchPage/Match'
import { Switch, Route} from 'react-router-dom'
import LandingPage from './2_landingPage/LandingPage'
import MatchPage from './1_matchPage/MatchPage'
import CongratulationsPage from './6_congratulationsPage/CongratulationsPage'
import RegisterPage from './7_registerPage/RegisterPage'
{/*import ProfilePage from './4_profilePage/ProfilePage'*/}
{/*import EditProfile from './5_editProfile/EditProfile'*/}

const Router = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/homepage' component={MatchPage}/>
                {/*<Route exact path ='/profilePage' component={ProfilePage}/>
                <Route exact path ='/editProfile' component={EditProfile}/>*/}
                <Route exact path ='/congratulations' component={CongratulationsPage}/>
                <Route exact path='/login' component={LandingPage}/>
                <Route exact path ='/' component={RegisterPage}/>
                <Route exact path ='/match' component={Match}/>           
            </Switch>
        </div>
    )
}

export default Router;