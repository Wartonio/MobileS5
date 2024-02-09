import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './bootstrap/css/bootstrap.min.css';
import './Login.css';
import axios from 'axios';

const Login: React.FC = () => {
    const url="http:localhost:8085/api/login";
    // const url="https://vaika-production-82ae.up.railway.app//api/login";
    const login=(event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        let username = formData.get("username");
        let password = formData.get("password");
        console.log(username + ' ' + password);
        let data= {
            nom : username,
            password : password

        };
        axios.request({
            method:"post",
            url:url,
            data:data
        }).then(response => {
                redirect();
        })
        .catch(error => {
            console.error(error);
            alert("An error occurred");
        });
    };
    
    const redirect=()=>{
        window.location.href = "/accueil"; 
    };
  return (
        <IonPage>
            <IonContent>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 login-container">
                        
                        <h2 className="text-center">Connexion</h2>
                        <form onSubmit={(event)=>login(event)}>
                            <div className="form-group">
                                <label htmlFor="username">Nom d'utilisateur :</label>
                                <input type="text" name="username" className="form-control" id="username" placeholder="Entrez votre nom d'utilisateur" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe :</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Se connecter"  className="form-control"/>
                            </div>
                        </form>
                            <div className="form-group">
                                <a href="#" className="forgot-password-link">Oublier son mot de passe?</a>
                            </div>
                            {/* <div className="form-group">
                                <div className="separator">
                                    <hr /> or <hr />
                                </div>
                            </div> */}

                            <div className="form-group">
                                <a href="/signin" className="signup-link">S'inscrire?</a>
                            </div>
                        
                    </div>
                </div>
            </div>
            </IonContent>


        </IonPage>  
  );
};

export default Login;