import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircle, body, ellipse, home, shirt, square, triangle } from 'ionicons/icons';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Create from './pages/Create';
import Wardrobe from './pages/Wardrobe';
import Add from './pages/Add';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './app.css'
/* import icons svg*/
import facebook from './assets/facebook-logo.svg'
import create from './assets/create-icon.svg'
import closet from './assets/closet-icon.svg'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs className='tabs'>
        <IonRouterOutlet>
          <Route path="/landing">
            <LandingPage/> 
          </Route>
          <Route exact path="/login">
           <Login/> 
          </Route>
          <Route exact path="/register">
           <Register/> 
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/wardrobe">
            <Wardrobe />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/create">
            <IonIcon className='icons-svg' aria-hidden="true" icon={body} />
            <IonLabel>Create</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/wardrobe">
            <IonIcon className='icons-svg' aria-hidden="true" icon={shirt} />
            <IonLabel>Wardrobe</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/add">
            <IonIcon aria-hidden="true" icon={addCircle} />
            <IonLabel>Add</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
