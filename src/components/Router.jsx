import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './login /Login'
import MatchPage from './1_matchPage/MatchPage'
import Register from './register/Register'
import Classement from './classement/Classement.jsx'


const Router = () => {

    return(
        
            <Switch>
                <Route exact path = '/' component={Register}/>
                <Route exact path = '/Login' component={Login}/>
                <Route exact path='/classement' component={Classement} />
                <Route exact path='/matchs' component={MatchPage}/>    
            </Switch>

    )
}

export default Router;