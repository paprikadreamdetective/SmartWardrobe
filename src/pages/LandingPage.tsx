import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './LandingPage.css';
import logo from '../assets/wardrobe.svg'

const LandingPage: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to SmartWardrobe</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent class='Container-landing' id='Landing'>
        <img className="img-logo" alt='Hola' src={logo} />
        <div className="title-content">
            <div className='title-homeL'>SMART WARDROBE</div>
        </div>

        <div className="buttons-container-landing">
            <IonButton fill="outline" routerLink='/login' className='button-signin'> Login </IonButton>

            <IonButton routerLink='/register' className='button-register'> Register </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;