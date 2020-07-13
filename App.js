import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';
import AppTab from './src/navigators/AppTab.js';



function Bar() {      /** Barra de status do aparelho */
  /**
   * barStyle="" recebe a cor do conteúdo
   * backgroundColor="" recebe o background da barra de status (somente para android)
   */
  return (
    <StatusBar barStyle="dark-content" backgroundColor="#FFc491"/>
  );
}

function App() {
  return(
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <AppTab/>
                    <Bar/>
                </NavigationContainer>
            </PersistGate>
        </Provider>   
  );
}
export default App;
