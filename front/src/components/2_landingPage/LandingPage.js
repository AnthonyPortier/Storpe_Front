import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = (props) => {
  return (
      <div className="LandingPage-full">
      <h1 className="LandingPage-title">STORPE</h1>
      
    <Form className="form-position">
      <FormGroup row>
        <Label className="label-margin" for="exampleEmail" sm={2}>Email/Pseudo</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email ou Pseudo" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
        </Col>
      </FormGroup>
      <FormGroup>
      <Link to ='/homepage'><Button className="LandingPage-btn">Se connecter</Button></Link>
      </FormGroup>
    </Form>
    </div>
  );
}

export default LandingPage;