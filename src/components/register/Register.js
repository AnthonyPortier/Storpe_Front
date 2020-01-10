import React, { useState } from 'react';
import { FormGroup, Label, Form, Button, Input } from 'reactstrap';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './RegisterPage.css'
import { useHistory } from 'react-router-dom'


const Register = () => {


    let history = useHistory()

    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [pseudo, setPseudo] = useState("")

    // Password and verification
    const [password, setPassword] = useState("")
    const [confirmePassword, setConfirmePassword] = useState("")

    const [errorPassword, setErrorPassword] = useState("")




    const handleFirstNameChange = evt => {
        const newValue = evt.target.value;

        setFirstname(newValue);
    }

    const handleLastNameChange = evt => {
        const newValue = evt.target.value;

        setLastname(newValue);
    }

    const handlePasswordChange = evt => {
        const newValue = evt.target.value;

        setPassword(newValue);
    }
    const handleEmailChange = evt => {
        const newValue = evt.target.value;

        setEmail(newValue);
    }

    const handleConfirmePasswordChange = evt => {
        const newValue = evt.target.value;

        setConfirmePassword(newValue);

    }

    const handlePseudoChange = (evt) => {
        const newValue = evt.target.value;
        setPseudo(newValue);
    }
    
    const registerUrl = 'https://stor4.herokuapp.com/LoginRoute/register'
    const testRegisterUrl = 'http://192.168.1.180:4020/LoginRoute/register'
    
    //Checks if the password is the proper length then sends the user data into the database.

    const handleClick = (e) => {
        e.preventDefault()
        if (password === confirmePassword && password.length >= 6) {
            axios.post(testRegisterUrl, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                daily_bet: 0,
                pseudo:pseudo

            })
                .then(function (response) {
                    console.log('response'+response)
                })
                .then(res => {
                    history.push('/Login')
                })
                .catch(function (error) {
                    console.log(error)

                })
        } else {
            setErrorPassword('les mots de passe ne correspondent pas, veuillez réessayer')
        }
    }

    return (
        <div className="register-page-main-div">
            <h1 className="h1-titre">STORPE</h1>
            <Form className="register-page-form" onSubmit={(e) => handleClick(e)}>

                {/* Prénom */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleFirstname" >Prénom</Label>
                    <Input className="input-firstname"
                        type="text"
                        name="firstname"
                        id="register-input-firstname"
                        value={firstname}
                        onChange={(evt) => handleFirstNameChange(evt)} required
                    />
                </FormGroup>
                {/* Nom */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleLastname" >Nom</Label>
                    <Input className="input-lastname"
                        type="text"
                        name="lastname"
                        id="register-input-last"
                        value={lastname}
                        onChange={(evt) => handleLastNameChange(evt)} required
                    />
                </FormGroup>
                {/* Pseudo--*/}
                <FormGroup>
                    <Label className="register-page-label" for="examplePseudo" >Pseudo</Label>
                    <Input className="input-pseudo"
                        type="text"
                        name="pseudo" required
                        id="register-input-pseudo"
                        value={pseudo}
                        placeholder="Tape ton pseudo..."
                        onChange={(evt) => handlePseudoChange(evt)}
                    />
                </FormGroup>


                {/* Email */}
                <FormGroup>
                    <Label className="register-page-label" for="exampleEmail" >Email</Label>
                    <Input className="input-email"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Tape ton adresse email..."
                        value={email}
                        onChange={(evt) => handleEmailChange(evt)} required
                    />
                </FormGroup>
                {/* Mot de passe */}
                <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input type="password" name="password" id="register-input-password" value={password} placeholder="Rentre ton mot de passe..." onChange={(evt) => handlePasswordChange(evt)} minLength='6' required />
                </FormGroup>
                {/* Mot de passe confirmé*/}
                <FormGroup>
                    <Label for="examplePasswordConfirmed">Confirme ton mot de passe</Label>
                    <p>{errorPassword}</p>
                    <Input type="password" name="password" value={confirmePassword} id="register-input-passwordConfirmed" onChange={(e) => handleConfirmePasswordChange(e)} required />
                </FormGroup>

                <div className='register-page-buttons'>
                    <button className="continueBtn continueBtn--facebook">
                        Continuer avec Facebook
                </button>
                    <button className="continueBtn continueBtn--google">
                        Continuer avec Google
                </button>
                </div>
                <Button className="button-confirm" type='submit' >Confirmer</Button>

                <div className="register-already-subscribe">
                    <p className="text-inscription">Déjà inscrit? <Link to='/login'><span>S'identifier</span></Link></p>
                </div>
            </Form>


        </div>

    );
}

export default Register;