import React from 'react'
import { Switch, Route} from 'react-router-dom'
import LandingPage from './2_landingPage/LandingPage'
import MatchPage from './1_matchPage/MatchPage'
{/*import ProfilePage from './4_profilePage/ProfilePage'*/}
{/*import EditProfile from './5_editProfile/EditProfile'*/}
import CongratulationsPage from './6_congratulationsPage/CongratulationsPage'
import RegisterPage from './7_registerPage/RegisterPage'


const Router = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/matchs' component={MatchPage}/>
                {/*<Route exact path ='/profilePage' component={ProfilePage}/>
                <Route exact path ='/editProfile' component={EditProfile}/>*/}
                <Route exact path ='/congratulations' component={CongratulationsPage}/>
                <Route exact path='/register' component={RegisterPage}/>
                <Route exact path ='/' component={LandingPage}/>           
            </Switch>
        </div>
    )
}

export default Router;