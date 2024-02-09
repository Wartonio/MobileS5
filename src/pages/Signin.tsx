import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './bootstrap/css/bootstrap.min.css';
import './Signin.css';
import axios from 'axios';


const Signin: React.FC = () => {
    const url="http://localhost:8085/api/signup";
    const signin=(event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        let username = formData.get("nom");
        let email = formData.get("email");
        let password = formData.get("password");
        let admin = formData.get("admin");
        console.log(username + ' '+ email +' ' + password +' ' + admin);
        let data= {
            nom:username,
            email : email,
            password : password,
            isadmin : admin
        };
        axios.request({
            method:"post",
            url:url,
            data:data
        });
    };
  return (
        <IonPage>
            <IonContent>
            <div className="container">
            <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 login-container">
                        
                <form className="form-signin" onSubmit={(event)=>signin(event)}>
                    <h2 className="form-signin-heading">Inscription</h2>
                    <label  className="sr-only">Nom d'utilisateur</label>
                    <input type="text" name="nom" id="inputUsername" className="form-control" placeholder="Nom d'utilisateur" required></input>
                    <label  className="sr-only">Adresse Email</label>
                    <input type="email" name="email"  id="inputEmail" className="form-control" placeholder="Adresse Email" required></input>
                    <label  className="sr-only">Mot de passe</label>
                    <input type="password" name="password"  id="inputPassword" className="form-control" placeholder="Mot de passe" required></input>
                    <label  className="sr-only">Confirmation de mot de passe</label>
                    <input type="password" className="form-control" placeholder="Confirmer le mot de passe" required></input>
                    <input type="hidden" name="admin" value="false" className="form-control" placeholder="Confirmer le mot de passe" required></input>
                    <input type="submit" className="form-control" value="S'incrire" style={{
                        backgroundColor:'blue',
                        color:'black'
                    }}/>
                </form>
            </div>
            </div>
            </div>

            </IonContent>
        </IonPage>  
  );
};

export default Signin;