import React, { useState } from 'react';
import '../components/navbar.css'
import { Link } from 'react-router-dom';
import { IonItem, IonLabel, IonList } from '@ionic/react';

import '../components/sidebar.css'


const Sidebar = () => {
    return(
    
    <>
    <div className="sidebar">
        <IonList lines="none">
            <IonItem href='/#'>
                <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem href='/#'>
                <IonLabel>Create</IonLabel>
            </IonItem>
            <IonItem href='/#'>
                <IonLabel>Wardrobe</IonLabel>
            </IonItem>
            <IonItem href='/#'>
                <IonLabel>Add</IonLabel>
            </IonItem>
        </IonList>
    </div>
    
    </>
    );
}

export default Sidebar;