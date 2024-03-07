import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Navbar from '../components/navbar';
import './Tab1.css';
import Sidebar from '../components/sidebar';

import Calendar from '../components/calendar';
import Weather from '../components/weatherComponent';
import WeatherApp from '../WeatherApp/WeatherApp'

import { useFetch } from './useFetch';

import SugerenciaDia from '../components/sugerenciaDia';


const Tab1: React.FC = () => {

  const [temperatura, setTemperatura] = useState(null);



  return (
    <IonPage>
      <IonContent>
        <div className="content">
          <div className="weather-section">
            <WeatherApp></WeatherApp>
          </div>
          <div className="calendar">
            <Calendar></Calendar>
          </div>
          <div className="content-sug">
            <div className="sugerencia">
              <p>Suggestion of the day</p>
              <div className="img">
                <SugerenciaDia
                  clima='calor'
                ></SugerenciaDia>
              </div>
            </div>
            <div className="prendas-faltantes">
              <p>Dirty clothes</p>
              
            </div>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
