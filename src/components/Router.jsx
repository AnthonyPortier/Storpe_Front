import React, {useEffect, useState, useReducer} from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './login /Login'
import MatchPage from './1_matchPage/MatchPage'
import Register from './register/Register'
import Classement from './classement/Classement.jsx'
import { createIncrementalCompilerHost } from 'typescript'
// 192.168.1.180:3000
const Router = () => {
    const [modified, dispatchModified] = useReducer(reducer, false)

    function reducer(modified, action) {
        modified = !modified
        return (modified)
    }
const [tokenExistence, setTokenExistence] = useState(localStorage.getItem('usertoken'))
useEffect(() => {
    setTokenExistence( localStorage.getItem('usertoken'))
},[localStorage, modified])


return(
        
        
            <Switch>
                <button onClick={()=>dispatchModified()}>xxx</button>
                <Route exact path = '/' component={Register}/>
                <Route exact path = '/Login' component={Login}/>
                {tokenExistence?
                    <>
                        <Route exact path='/classement' component={Classement} />
                        <Route exact path='/matchs' component={MatchPage}/> 
                    </>
                    :
                    <>
                        
                    <Route path = '/' component={Register}/>

                        
                    </>
                    
                }   
            </Switch>

    )
}

export default Router;