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
            <h1 className="h1-titre">STORPE</h1>
            <Form className="register-page-form">
                {/* Prénom */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleFirstname">Prénom</Label>
                    <Input className="input-firstname"
                        type="text"
                        name="firstname"
                        id="register-input-firstname" 
                    />
                </FormGroup>
                {/* Nom */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleLastname">Nom</Label>
                    <Input className="input-lastname"
                        type="text"
                        name="last"
                        id="register-input-last"
                    />
                </FormGroup>
                {/* Pseudo--*/}
                <FormGroup>
                    <Label className="register-page-label" for="examplePseudo">Pseudo</Label>
                    <Input className="input-pseudo"
                        type="text"
                        name="pseudo"
                        id="register-input-pseudo"
                        placeholder="Tape ton pseudo..."
                    />
                </FormGroup>
                
                       
                {/* Email */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleEmail">Email</Label>
                    <Input className="input-email"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Tape ton adresse email..."
                    />
                </FormGroup>
                {/* Mot de passe */}
                <FormGroup>
                    <Label className="register-page-label" for="examplePassword">Mot de passe</Label>
                    <Input className="input-password" type="password" name="password" id="register-input-password" placeholder="Rentre ton mot de passe..." />
                </FormGroup>
                {/* Mot de passe confirmé*/}
                <FormGroup>
                    <Label className="register-page-label" for="examplePasswordConfirmed">Confirme ton mot de passe</Label>
                    <Input className="input-password-confirm" type="password" name="password" id="register-input-passwordConfirmed"/>
                </FormGroup>

                <div className='register-page-buttons'>
                <button class="continueBtn continueBtn--facebook">
                    Continuer avec Facebook
                </button>
                <button class="continueBtn continueBtn--google">
                    Continuer avec Google
                </button>
               </div>
                <Button className="button-confirm">Confirmer</Button>
      
               <div className="register-already-subscribe">
                   <p className="text-inscription">Déja inscrit? <Link to ='/login'><span>S'identifer</span></Link></p>
               </div>
            </Form>
                
              
        </div>

    );
}

export default RegisterPage;