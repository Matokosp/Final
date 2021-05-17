import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

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

export function DrawerContent({
    scrollHandler,
    homeCoord,
    aboutCoord,
    servicesCoord,
    worksCoord,
    clientsCoord,
    contactCoord,
    ...props

}) {

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
            <DrawerContentScrollView style={styles.drawer}>
                <Text style={styles.navigation}>Navigation</Text>
                <View style={styles.drawerList}>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(homeCoord); props.navigation.closeDrawer() }}
                        >
                            Home
                        </Text>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(aboutCoord); props.navigation.closeDrawer() }}
                        >
                            About
                        </Text>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(servicesCoord); props.navigation.closeDrawer() }}
                        >
                            Services
                        </Text>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(worksCoord); props.navigation.closeDrawer() }}
                        >
                            Works
                        </Text>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(clientsCoord); props.navigation.closeDrawer() }}
                        >
                            Clients
                        </Text>
                        <Text
                        style={styles.link}
                            onPress={() => { scrollHandler(contactCoord); props.navigation.closeDrawer() }}
                        >
                            Contact
                        </Text>
                </View>
                <Text style={styles.text}>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <Text style={styles.textWhite}>voluptatem</Text> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</Text>
                <View style={styles.contactIcons}>
                    <FontAwesomeIcon style={styles.brandIcon} icon={faFacebookF} color={'rgba(255,255,255,0.3)'} size={25}/>
                    <FontAwesomeIcon style={styles.brandIcon} icon={faTwitter} color={'rgba(255,255,255,0.3)'} size={25}/>
                    <FontAwesomeIcon style={styles.brandIcon} icon={faInstagram} color={'rgba(255,255,255,0.3)'} size={25}/>
                    <FontAwesomeIcon style={styles.brandIcon} icon={faBehance} color={'rgba(255,255,255,0.3)'} size={25}/>
                    <FontAwesomeIcon style={styles.brandIcon} icon={faDribbble} color={'rgba(255,255,255,0.3)'} size={25}/>
                </View>
            </DrawerContentScrollView>
        )
     }
}

const styles = StyleSheet.create ({
    drawer: {
        paddingLeft: '15%'
    },
    navigation: {
        textTransform: 'uppercase',
        color: '#39b54a',
        fontFamily: 'Montserrat_700Bold',

        letterSpacing: 2
    },
    drawerList: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: '30%'
    },
    link: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'Montserrat_600SemiBold',
        marginBottom: 20
    },
    text: {
        color: 'rgba(255,255,255,0.3)',
        fontSize: 16,
        lineHeight: 28
    },
    textWhite: {
        color: 'rgba(255,255,255,0.6)'
    },
    contactIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingTop: 40,
        marginBottom: 150
    },
    brandIcon: {
        marginRight: 20,
    }
})