import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Dimensions
} from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faBehance,
    faDribbble
} from "@fortawesome/free-brands-svg-icons"

import Bkg from '../../assets/contact-bkg.jpg'

const width = Dimensions.get("window").width;

export default function Contact() {

    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
      })
    
    const handleInputFocus = (textinput) => {
        setIsFocused({
            [textinput]: true
        })
    }
    const handleInputBlur = (textinput) => {
        setIsFocused({
            [textinput]: false
        })
    }

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
            <ImageBackground
                source={Bkg}
                style={styles.bkg}
            >
                <View style={styles.greenLine} />
                <View style={styles.text}>
                    <Text style={styles.hello}>Contact us</Text>
                    <Text style={styles.title}>Reach out for a new project or just say hello</Text>
                </View>
                <View style={styles.formSection}>
                    <Text style={styles.formTitle}>Send us a message</Text>
                    <View style={styles.form}>
                        <TextInput
                            onFocus={() => handleInputFocus('name')}
                            onBlur={() => handleInputBlur('name')}
                            style={[styles.textinput, isFocused.name ? {borderBottomColor: '#39b54a'} : null ]}
                            placeholder='Your Name'
                            placeholderTextColor= 'rgba(255, 255, 255, 0.6)'
                        />
                        <TextInput
                            onFocus={() => handleInputFocus('email')}
                            onBlur={() => handleInputBlur('email')}
                            style={[styles.textinput, isFocused.email ? {borderBottomColor: '#39b54a'} : null ]}
                            placeholder='Your Email'
                            placeholderTextColor= 'rgba(255, 255, 255, 0.6)'
                        />
                        <TextInput
                            onFocus={() => handleInputFocus('subject')}
                            onBlur={() => handleInputBlur('subject')}
                            style={[styles.textinput, isFocused.subject ? {borderBottomColor: '#39b54a'} : null ]}
                            placeholder='Subject'
                            placeholderTextColor= 'rgba(255, 255, 255, 0.6)'
                        />
                        <TextInput
                            onFocus={() => handleInputFocus('message')}
                            onBlur={() => handleInputBlur('message')}
                            style={[styles.textinput, styles.textAreaContainer, isFocused.message ? {borderBottomColor: '#39b54a'} : null ]}
                            multiline={true}
                            numberOfLines={10}
                            placeholder='Your Message'
                            placeholderTextColor= 'rgba(255, 255, 255, 0.6)'
                        />
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.submit}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contactInfoContainer}>
                        <View style={styles.contactInfoItem}>
                            <Text style={styles.contactInfoItemTitle}>Where To Find Us</Text>
                            <Text style={styles.contactInfoItemText}>1600 Amphitheatre Parkway</Text>
                            <Text style={styles.contactInfoItemText}>Mountain View, CA</Text>
                            <Text style={styles.contactInfoItemText}>94043 US</Text>
                        </View>
                        <View style={styles.contactInfoItem}>
                            <Text style={styles.contactInfoItemTitle}>Email Us At</Text>
                            <Text style={styles.contactInfoItemText}>contact@glintsite.com</Text>
                            <Text style={styles.contactInfoItemText}>info@glintsite.com</Text>
                        </View>
                        <View style={styles.contactInfoItem}>
                            <Text style={styles.contactInfoItemTitle}>Call Us At</Text>
                            <Text style={styles.contactInfoItemText}>Phone: (+63) 555 1212</Text>
                            <Text style={styles.contactInfoItemText}>Mobile: (+63) 555 0100</Text>
                            <Text style={styles.contactInfoItemText}>Fax: (+63) 555 0101</Text>
                        </View>
                    </View>
                    <View style={styles.contactIcons}>
                        <FontAwesomeIcon style={styles.brandIcon} icon={faFacebookF} color={'#fff'} size={25}/>
                        <FontAwesomeIcon style={styles.brandIcon} icon={faTwitter} color={'#fff'} size={25}/>
                        <FontAwesomeIcon style={styles.brandIcon} icon={faInstagram} color={'#fff'} size={25}/>
                        <FontAwesomeIcon style={styles.brandIcon} icon={faBehance} color={'#fff'} size={25}/>
                        <FontAwesomeIcon style={styles.brandIcon} icon={faDribbble} color={'#fff'} size={25}/>
                    </View>
                </View>                
            </ImageBackground>
        );
     }
}

const styles = StyleSheet.create ({
    bkg: {
        width: '100%',
        paddingTop: 150,
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    hello: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        letterSpacing: 2.5,
        color: '#39b54a'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Montserrat_600SemiBold',
        marginTop: 20,
        textAlign: 'center',
        color: '#fff'
    },
    formSection: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingTop: 40,
        marginTop: 60
    },
    formTitle: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold',
        marginBottom: 50
    },
    form: {
        paddingHorizontal: '5%',
        marginBottom: 20
    },
    textinput: {
        borderBottomColor: 'rgba(255, 255, 255, 0.6)',
        borderBottomWidth: 1,
        color: 'rgba(255, 255, 255, 0.6)',
        paddingBottom: 15,
        fontFamily: 'Montserrat_400Regular',
        marginTop: 40,
        fontSize: 16
    },
    textAreaContainer: {
        height: 220
    },
    submitBtn: {
        backgroundColor: '#33a242',
        width: '100%',
        paddingVertical: 20,
        marginTop: 40
    },
    submit: {
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: '#fff',
        fontFamily: 'Montserrat_600SemiBold'
    },
    contactInfoContainer: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: width > 450 ? 'flex-start' : 'center',
        paddingLeft: width > 450 ? '5%' : 'auto'
    },
    contactInfoItem: {
        marginBottom: 20
    },
    contactInfoItemTitle: {
        textAlign: 'center',
        color: '#39b54a',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        marginBottom: 12,
        textAlign: width > 450 ? 'left' : 'center'
    },
    contactInfoItemText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 16,
        marginBottom: 10,
        textAlign: width > 450 ? 'left' : 'center'

    },
    contactIcons: {
        flexDirection: 'row',
        justifyContent: width > 450 ? 'flex-start' : 'center',
        alignItems: 'center',
        paddingTop: 40,
        marginBottom: 150,
        paddingLeft: width > 450 ? '5%' : 'auto'
    },
    brandIcon: {
        marginHorizontal: 10,
    },
    greenLine: {
        position: 'absolute',
        top: 0,
        left: '50%',
        backgroundColor: '#39b54a',
        height: 91,
        width: 2
    }
});
