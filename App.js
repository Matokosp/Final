import StatusBar from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
 
import { DrawerContent } from './src/DrawerContent'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

const Drawer = createDrawerNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  const [ref, setRef] = useState(null);
  const [homeCoord, setHomeCoord] = useState([])
  const [aboutCoord, setAboutCoord] = useState([])
  const [servicesCoord, setServicesCoord] = useState([])
  const [worksCoord, setWorksCoord] = useState([])
  const [clientsCoord, setClientsCoord] = useState([])
  const [contactCoord, setContactCoord] = useState([])  

  const scrollHandler = (position) => {
        ref.scrollTo({
          x: 0,
          y: position,
          animated: true,
        });
    };

    if (!fontsLoaded) {
      return <Text>Loading</Text>
   } else {
            return (
              <NavigationContainer
                style={styles.container}
              >
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} 
                    scrollHandler={scrollHandler}
                    homeCoord={homeCoord}
                    aboutCoord={aboutCoord}
                    servicesCoord={servicesCoord}
                    worksCoord={worksCoord}
                    clientsCoord={clientsCoord}
                    contactCoord={contactCoord}
                  />}
                  drawerPosition='right'
                  drawerStyle={{
                    backgroundColor: '#000',
                    width: '80%',
                  }}
                >
                  <Drawer.Screen
                    name="Home"
                  >
                  {() => ( <Home
                                      ref={ref}
                                      setRef= {setRef}
                                      scrollHandler= {scrollHandler}
                                      setHomeCoord={setHomeCoord}
                                      setAboutCoord={setAboutCoord}
                                      setServicesCoord={setServicesCoord}
                                      setWorksCoord={setWorksCoord}
                                      setClientsCoord={setClientsCoord}
                                      setContactCoord={setContactCoord}
                                  />)}
                    </Drawer.Screen>
                </Drawer.Navigator>
              </NavigationContainer> 
            )
         }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});