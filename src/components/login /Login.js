import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './login.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()

  const detailLogin = {
    email: email,
    password: password
  }

  const loginUser = (e) => {
    e.preventDefault()
    axios.post('https://stor4.herokuapp.com/LoginRoute/login', detailLogin)
      .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
      })
      .then(res => {
        history.push('/matchs')
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
        <FormGroup>
          <Button className="LandingPage-btn">Se connecter</Button>
        </FormGroup>
        <div className="register-already-subscribe">
          <p className="text-inscription">Pas encore inscrit ? <Link to='/'><span>Créer un compte</span></Link></p>
        </div>
      </Form>
    </div>
  );
}

export default Login;