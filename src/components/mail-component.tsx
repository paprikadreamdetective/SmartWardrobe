import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonLoading, IonNote } from '@ionic/react';
import '../components/mail-component.css'
import { loginUser } from '../firebaseConfig';

// import {toast} from '../toast'
import { error } from 'console';

function Email_input() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)

  async function login() {
    const res = await loginUser(username, password)
    if(!res){
      // console.log(error)
      // toast('Error logging with your credentials')
    }else{
      // toast('You have logged in!')

    }
    // setBusy(false)
  }

  return (
    <>
    {/* <IonLoading message={'Please wait...'} duration={0} isOpen={busy}></IonLoading> */}

    <div className="input-email">
      <IonInput 
        class='custom2' label="Email: " type="email" placeholder="email@domain.com"
        onIonChange={(e:any) => setUsername(e.target.value)}
      ></IonInput>
    </div>
    <br/>
    
    <div className="input-email">
      <IonInput 
        class='custom2' label="Password: " type="password"
        onIonChange={(e:any) => setPassword(e.target.value)}  
      >
      </IonInput>
    </div>

    <IonButton routerLink='/home' className='button-register'> Log In </IonButton>
    {/* <IonButton className='button-register' onClick={login}> Log In </IonButton> */}

    <br/>
    </>
  );
}
export default Email_input;