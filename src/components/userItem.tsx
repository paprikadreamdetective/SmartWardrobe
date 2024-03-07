import React from 'react';
import {IonItem, IonAvatar, IonLabel } from '@ionic/react';
import {Person} from '../models/person.model'

const UserItem: React.FC<{person: Person}> = ({person}) =>{
    return(
        <IonItem>
            <IonAvatar slot='start'>
                <img src={person.photo} alt="" />
                <IonLabel>
                    <h2>{person.name}</h2>
                    <p>{person.position}</p>
                </IonLabel>
            </IonAvatar>
        </IonItem>
    );
}

export default UserItem;
