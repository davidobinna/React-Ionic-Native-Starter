import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss';
import Routes from './router/routes.jsx';
import { ContextProvider } from './context/ContextProvider';
import { IonApp } from '@ionic/react';
import './theme/variables.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
    <IonApp>
       <Routes />
    </IonApp>
    </ContextProvider>,
)

