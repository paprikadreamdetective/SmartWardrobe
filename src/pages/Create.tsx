import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { Person } from '../models/person.model'
import cloud_icon from '../assets/cloud.png'


const Tab2: React.FC = () => {
  
  const [people, setPeople] = useState<Person[]>([]);
  
  // useIonViewDidEnter(async () => {

  // })
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="description">
          <p>Generate outfits for ... <br />
            Choose the occasion that best fits your day. </p>
        </div>
        <div className="generate">
          <div className="card-outfit">
              <img src={cloud_icon} alt="" />

              <p>Casual</p>
          </div>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
