import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { IonButtons, IonMenu, IonMenuButton } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ,IonButton} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Menubar } from 'primereact/menubar';
import { useHistory } from 'react-router-dom';
import './bootstrap/css/bootstrap.min.css';
import './Accueil.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nova-accent/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';






const Accueil: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => history.push('/accueil')
    },
    {
        label: 'New announcement',
        icon: 'pi pi-plus-circle',
        command: () => history.push('/post')
    },
    {
      label: 'Message',
      icon: 'pi pi-envelope',
      command: () => history.push('#')
    },
    {
        label: 'Logout',
        icon: 'pi pi-external-link',
        command: () => history.push('/login')
    }
  ];
  
  return (
    <>
              <IonPage id="main-content">
                <IonHeader>
                    <div className="card">
                        <Menubar model={items} />
                    </div>
                </IonHeader>
                <IonContent className="ion-padding">
                <IonCard>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                  
                     <div className="card flex justify-content-center">
                        <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                        <Dialog header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <p className="m-0" style={{  }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
                    </div>
                 
                </IonCard>
                </IonContent>
              </IonPage>

    </>
  );
};

export default Accueil;