import React, { useCallback } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    Dimensions
} from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Logo from '../../assets/logo-footer.png'

const url = 'https://colorlib.com'

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Text style={styles.link} title={children} onPress={handlePress}>Colorlib</Text>;
  };

const width = Dimensions.get("window").width;

export default function Footer() {

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
            <View style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.footerText}>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</Text>
                <Text style={styles.notified}>Get Notified</Text>
                <Text style={styles.footerText}>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</Text>
                <Text style={styles.email}>Email Address</Text>
                <TouchableOpacity style={styles.subscribe}>
                    <Text style={styles.subscribeText}>Subscribe</Text>
                </TouchableOpacity>
                <View style={styles.rights}>
                    <Text style={styles.rightsText}>© Copyright Glint 2022</Text>
                    <Text style={styles.rightsText}>Site Template by <OpenURLButton url={url}/></Text>
                </View>
            </View>
        );
     }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#111111',
        justifyContent: 'center',
        paddingVertical: 80,
        paddingHorizontal: '5%'
    },
    logo: {
        width: 85,
        resizeMode: 'contain',
        alignSelf: width > 450 ? 'flex-start' : 'center'
    },
    footerText: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 15,
        lineHeight: 30
    },
    notified: {
        color: '#fff',
        paddingVertical: 40,
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16
    },
    email: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
        paddingVertical: 30
    },
    subscribe: {
        backgroundColor: '#39b54a',
        alignItems: 'center',
        paddingVertical: 20
    },
    subscribeText: {
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontFamily: 'Montserrat_600SemiBold'
    },
    rights: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150
    },
    rightsText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 10
    },
    link: {
        color: '#fff'
    }
});
