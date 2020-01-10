import React, {useState} from 'react';
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './login.css'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()
  const detailLogin = {
      email: email,
      password: password
  }
/* const loginUrl = 'https://stor4.herokuapp.com/LoginRoute/login'
 */
  const testLoginUrl = 'http://192.168.1.180:4020/LoginRoute/login'
  const loginUser = (e) => {
      e.preventDefault()
      axios.post(testLoginUrl, detailLogin)
          .then(res => {
              localStorage.setItem('usertoken', res.data)
              return res.data
          })
          .then(res => {
            res?history.push('/matchs'):alert('Adresse email ou mot de passe invalide ! ');
          })
          .catch(err => console.error(err))
  }


  return (
      <div className="LandingPage-full">
      <h1 className="LandingPage-title">STORPE</h1>
      
    <Form className="form-position" onSubmit={loginUser}>
      <FormGroup row>
        <Label className="label-margin" for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" value={email} required type='text' id="exampleEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" value={password} required id="examplePassword" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup className="buttonList">
                <Button className="LandingPage-btn">Se connecter</Button>
              
                  <Link to='/Register'><Button className="LandingPage-btn">
                  <span>Créer un compte</span>
                </Button>
              </Link>


          
      </FormGroup>

    </Form>
    </div>
  );
}

export default Login;