import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity
 } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ScrollTo, Target, ScrollView } from '@nandorojo/anchor';
import Bkg from '../assets/hero-bg.jpg'
import Logo from '../assets/logo.png'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faBehance,
    faDribbble
} from "@fortawesome/free-brands-svg-icons"

export const SCREEN_HEIGHT = Dimensions.get('window').height

const width = Dimensions.get("window").width;

export default function Home ({
    setRef,
    setHomeCoord,
    setAboutCoord,
    setServicesCoord,
    setWorksCoord,
    setClientsCoord,
    setContactCoord
}) {

    const styles = StyleSheet.create ({
        heroBkg: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            height: SCREEN_HEIGHT - 80,
            position: 'relative'
        },
        contactIcons: {
            position: 'absolute',
            right: '5%',
            top: '35%'
        },
        iconWrapper: {
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
            padding: 20,
            width: 20,
            height: 20,
            borderRadius: 30
        },
        headerView: {
            position: 'relative',
            height: '100%',
            justifyContent: 'center',
            paddingLeft: width > 450 ? '5%' : 0,
            paddingRight: width > 450 ? '15%' : 0
        },
        logoCont: {
            position: 'absolute',
            top: 0,
            width: 80
        },
        logo: {
            width: '100%',
            resizeMode: 'contain'
        },
        headerTextView: {
            backgroundColor: 'transparent'
        },
        welcome: {
            fontFamily: 'Montserrat_700Bold',
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: 2,
            marginBottom: 15,
            textAlign: width > 450 ? 'left' : 'center'
        },
        headerTextViewTitle: {
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 35,
            color: '#fff',
            fontWeight: '300',
            paddingBottom: 10,
            textAlign: 'center',
            textAlign: width > 450 ? 'left' : 'center'
        },
        btnCont: {
            alignItems: 'center',
            marginTop: 20,
            flexDirection: width > 450 ? 'row' : 'column',
            justifyContent: width > 450 ? 'flex-start' :'center'
        },
        headerBtnText: {
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            letterSpacing: 2.5,
            fontFamily: 'Montserrat_500Medium',
            fontSize: 12,
            borderWidth: 2,
            borderColor: '#fff',
            paddingVertical: 10,
            width: 200,
            marginBottom: 20,
            marginRight: width > 450 ? 30 : 0
        },
        scrollDown: {
            position: 'absolute',
            bottom: 80,
            right: 70,
        },
        scrollDownCont: {
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row'
        },
        downArrow: {
            borderBottomColor: '#39b54a',
            borderBottomWidth: 2,
            borderRightColor: '#39b54a',
            borderRightWidth: 2,
            height: 8,
            width: 8,
            transform: [{rotate: '45deg'}],
            marginRight: 15
        },
        downText: {
            color: '#fff',
            fontFamily: 'Montserrat_700Bold',
            textTransform: 'uppercase',
            fontSize: 11,
            letterSpacing: 2
        },
        greenLine: {
            position: 'absolute',
            bottom: 0,
            right: 40,
            backgroundColor: '#39b54a',
            height: 91,
            width: 2
        },
        menu: {
            position: 'absolute',
            top: 70,
            right: 0,
            backgroundColor: '#000',
            zIndex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row'
          },
          menuText: {
            color: '#39b54a',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat_600SemiBold',
            letterSpacing: 2,
            fontSize: 12
          },
          hamburger: {
            justifyContent: 'space-between',
            marginLeft: 10
          },
          menuLine: {
            width: 25,
            backgroundColor: '#fff',
            height: 2
          },
    });

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_500Medium,
        Montserrat_700Bold
      });

     if (!fontsLoaded) {
        return <Text>Loading</Text>
     } else {
        return (
            <SafeAreaView style={{width: '100%'}}>
                 <TouchableOpacity
                  style={styles.menu}
                  onPress={() => navigation.openDrawer()}
                >
                    <Text style={styles.menuText}>Menu</Text>
                    <View style={styles.hamburger}>
                        <View style={styles.menuLine}></View>
                        <View style={styles.menuLine}></View>
                        <View style={styles.menuLine}></View>
                    </View>
                </TouchableOpacity>
                <ScrollView 
                    ref={(ref) => {setRef(ref)}}
                >
                    <ImageBackground
                        source={Bkg}
                        style={styles.heroBkg}
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setHomeCoord(layout.y);
                        }}
                    >
                        { width > 450 ? 
                            <View style={styles.contactIcons}>
                                <View style={styles.iconWrapper}>
                                    <FontAwesomeIcon style={styles.brandIcon} icon={faFacebookF} color={'#fff'} size={20}/>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesomeIcon style={styles.brandIcon} icon={faTwitter} color={'#fff'} size={20}/>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesomeIcon style={styles.brandIcon} icon={faInstagram} color={'#fff'} size={20}/>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesomeIcon style={styles.brandIcon} icon={faBehance} color={'#fff'} size={20}/>
                                </View>
                                <View style={styles.iconWrapper}>
                                    <FontAwesomeIcon style={styles.brandIcon} icon={faDribbble} color={'#fff'} size={20}/>
                                </View>
                            </View>
                        : null}
                        <View style={styles.headerView}>
                            <View style={styles.logoCont}>
                                <Image
                                    style={styles.logo}
                                    source={Logo}
                                />
                            </View>
                            <View style={styles.headerTextView}>
                                <Text style={styles.welcome}>Welcome to Glint</Text>
                                <Text style={styles.headerTextViewTitle}>We are a creative group of people who design influential brands and digital experiences.</Text>
                            </View>
                            <View style={styles.btnCont}>
                                <ScrollTo target={'contactTarget'}>
                                    <Text style={styles.headerBtnText}>Start a project</Text>
                                </ScrollTo>
                                <ScrollTo target='aboutTarget'>
                                    <Text style={styles.headerBtnText}>More about us</Text>
                                </ScrollTo>                         
                            </View>
                        </View>
                        <ScrollTo target='aboutTarget' style={styles.scrollDown}>
                            <View style={styles.scrollDownCont}>
                                <View style={styles.downArrow}></View>
                                <Text style={styles.downText}>Scroll Down</Text>
                            </View>
                        </ScrollTo>
                        <View style={styles.greenLine} />
                    </ImageBackground>
                    <View
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setAboutCoord(layout.y);
                        }}
                    >
                        <Target name='aboutTarget'>
                            <About/>
                        </Target>
                    </View>
                    <View
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setServicesCoord(layout.y);
                        }}
                    >
                        <Services/>
                    </View>
                    <View
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setWorksCoord(layout.y);
                        }}
                    >
                        <Work
                            screenHeight={SCREEN_HEIGHT}
                        />
                    </View>
                    <View
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setClientsCoord(layout.y);
                        }}
                    >
                        <Clients/>
                    </View>
                    <View
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            setContactCoord(layout.y);
                        }}
                    >
                        <Target name="contactTarget">
                            <Contact/>
                        </Target>
                    </View>
                    <Footer />
                </ScrollView>
            </SafeAreaView>
        )

    }
  }

