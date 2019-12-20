import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './login /Login'
import MatchPage from './1_matchPage/MatchPage'
import Register from './register/Register'


const Router = () => {

    return(
        
            <Switch>
                <Route exact path = '/' component={Register}/>
                <Route exact path = '/Login' component={ Login}/>
                <Route exact path='/matchs' component={MatchPage}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/updateprofil' component={EditProfile}/>    
            </Switch>

    )
}

export default Router;