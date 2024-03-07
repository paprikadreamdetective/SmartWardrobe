import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import CarruselPrendas from '../components/carruselPrendas';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="section-title">
          Accesories
        </div>
        <CarruselPrendas
          categoria='accesories'
        ></CarruselPrendas>


        <div className="section-title">
          Jacket
        </div>
        <CarruselPrendas
          categoria='jacket'
        ></CarruselPrendas>

        <div className="tops">
          <div className="section-title">
            Tops
          </div>
          <CarruselPrendas
            categoria='top'
          ></CarruselPrendas>
        </div>

        <div className="section-title">
          Bottoms
        </div>
        <CarruselPrendas
          categoria='bottoms'
        ></CarruselPrendas>

        <div className="section-title">
          Shoes
        </div>
        <CarruselPrendas
          categoria='shoes'
        ></CarruselPrendas>


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
