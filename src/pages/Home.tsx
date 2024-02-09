import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <div className="container welcome-container">
          <div className="jumbotron">
              <h1>Bienvenue sur notre site!</h1>
              <p>Vous êtes prêt à commencer votre expérience exceptionnelle.</p>
          </div>

          <a href="/login" className="btn btn-lg btn-primary btn-start">Se connecter</a>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
