import React from 'react';
import { FormGroup, Label, Form, Button, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import './RegisterPage.css'

const responseFacebook = (response) => {
    console.log(response);
}

const RegisterPage = () => {


    return (
        <div className="register-page-main-div">
            <Form>
                {/* Prénom */}
                <FormGroup>
                    <Label for="exampleFirstname">Prénom</Label>
                    <Input
                        type="text"
                        name="firstname"
                        id="register-input-firstname" 
                    />
                </FormGroup>
                {/* Nom */}
                <FormGroup>
                    <Label for="exampleLastname">Nom</Label>
                    <Input
                        type="text"
                        name="last"
                        id="register-input-last"
                    />
                </FormGroup>
                {/* Email */}
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Tape ton adresse email..."
                    />
                </FormGroup>
                {/* Mot de passe */}
                <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input type="password" name="password" id="register-input-password" placeholder="Rentre ton mot de passe..." />
                </FormGroup>
                {/* Mot de passe confirmé*/}
                <FormGroup>
                    <Label for="examplePasswordConfirmed">Confirme ton mot de passe</Label>
                    <Input type="password" name="password" id="register-input-passwordConfirmed"/>
                </FormGroup>

                <Button>Confirmer</Button>

                <button class="continueBtn continueBtn--facebook">
                    Continuer avec Facebook
                </button>

                <button class="continueBtn continueBtn--google">
                    Continuer avec Google
                </button>
      
               <div className="register-already-subscribe">
                   <p>Déja inscrit? <Link to ='/login'><span>S'identifer</span></Link></p>
               </div>

              
            </Form>
        </div>

    );
}

export default RegisterPage;