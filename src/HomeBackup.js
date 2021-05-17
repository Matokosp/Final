// import React, { useRef } from 'react';
// import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
// import ParallaxScrollView, { DEFAULT_NAVBAR_HEIGHT } from 'react-native-parallax-scrollview';
// import Bkg from '../assets/hero-bg.jpg'
// import Logo from '../assets/logo.png'
// import {
//     useFonts,
//     Montserrat_400Regular,
//     Montserrat_600SemiBold,
//     Montserrat_500Medium,
//     Montserrat_700Bold
// } from '@expo-google-fonts/montserrat'
// import About from './sections/About'
// import What from './sections/What'
// import Work from './sections/Work'
// import Clients from './sections/Clients'

// export const SCREEN_HEIGHT = Dimensions.get('window').height;

// export default function Home() {

//     const scrollRef = useRef(); 

//     const onPressTouch = () => {
//             scrollRef.current?.scrollTo({
//                 y: SCREEN_HEIGHT,
//                 animated: true,
//             });
//     }

//     let [fontsLoaded] = useFonts({
//         Montserrat_400Regular,
//         Montserrat_600SemiBold,
//         Montserrat_500Medium,
//         Montserrat_700Bold
//       });

//      if (!fontsLoaded) {
//         return <Text>Loading</Text>
//      } else {
//         return (
//             <ScrollView>
//                 <View>
//                 <ParallaxScrollView
//                     ref={scrollRef}
//                     navBarHeight={45}
//                     windowHeight={SCREEN_HEIGHT}
//                     backgroundSource={Bkg}
//                     navBarTitle=''
//                     navBarTitleColor='transparent'
//                     navBarColor='black'
//                     headerView={(
//                         <View style={styles.headerView}>
//                             <View style={styles.logoCont}>
//                                 <Image
//                                     style={styles.logo}
//                                     source={Logo}
//                                 />
//                             </View>
//                             <View style={styles.headerTextView}>
//                                 <Text style={styles.welcome}>Welcome to Glint</Text>
//                                 <Text style={styles.headerTextViewTitle}>We are a creative group of people who design influential brands and digital experiences.</Text>
//                             </View>
//                             <View style={styles.btnCont}>
//                                 <TouchableOpacity style={styles.headerBtn}>
//                                     <Text style={styles.headerBtnText}>Start a project</Text>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity
//                                     style={styles.headerBtn}
//                                     onPress={onPressTouch}
//                                 >
//                                     <Text style={styles.headerBtnText}>More about us</Text>
//                                 </TouchableOpacity>                            
//                             </View>
//                         </View>
//                     )}
//                 >
//                     <ScrollView style={{flex: 1}}>                        
//                     <About/>
                        
//                     </ScrollView>
//                 </ParallaxScrollView>
//                 </View>
//                 <ScrollView>
//                     <What/>
//                     <Work/>
//                     <Clients/>
//                 </ScrollView>
//             </ScrollView>
//         )

//     }
//   }


// const styles = StyleSheet.create ({
//     headerView: {
//         position: 'relative',
//         height: '100%',
//         justifyContent: 'center'
//     },
//     logoCont: {
//         position: 'absolute',
//         top: -20,
//         width: 80
//     },
//     logo: {
//         width: '100%',
//         resizeMode: 'contain'
//     },
//     headerTextView: {
//         backgroundColor: 'transparent'
//     },
//     welcome: {
//         fontFamily: 'Montserrat_700Bold',
//         color: 'rgba(255, 255, 255, 0.5)',
//         textAlign: 'center',
//         textTransform: 'uppercase',
//         letterSpacing: 2,
//         marginBottom: 15
//     },
//     headerTextViewTitle: {
//         fontFamily: 'Montserrat_600SemiBold',
//         fontSize: 35,
//         color: '#fff',
//         fontWeight: '300',
//         paddingBottom: 10,
//         textAlign: 'center'
//     },
//     btnCont: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20
//     },
//     headerBtn: {
//         width: '70%',
//         borderColor: '#fff',
//         borderWidth: 2,
//         textAlign: 'center',
//         marginBottom: 20,
//         paddingTop: 10,
//         paddingBottom: 10
//     },
//     headerBtnText: {
//         color: '#fff',
//         textTransform: 'uppercase',
//         textAlign: 'center',
//         letterSpacing: 2.5,
//         fontFamily: 'Montserrat_500Medium',
//         fontSize: 12
//     },
// });
