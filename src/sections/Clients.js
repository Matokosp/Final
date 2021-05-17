import React, {useState} from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import PagerView from 'react-native-pager-view';

import apple from '../../assets/apple.png'
import atom from '../../assets/atom.png'
import blackberry from '../../assets/blackberry.png'
import dropbox from '../../assets/dropbox.png'
import envato from '../../assets/envato.png'
import firefox from '../../assets/firefox.png'
import joomla from '../../assets/joomla.png'
import magento from '../../assets/magento.png' 
import userOne from '../../assets/user1.png' 
import userTwo from '../../assets/user2.png' 
import userThree from '../../assets/user3.png'

const width = Dimensions.get("window").width;

export default function Clients() {

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
                <View style={styles.text}>
                    <Text style={styles.hello}>Our clients</Text>
                    <Text style={styles.title}>Glint has been honored to partner up with these clients</Text>
                    <View style={styles.textSeparator}></View>
                </View>
                <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
                    <View style={styles.pagerItem} key="1">
                        <Image source={apple} style={styles.brandImg} />
                        <Image source={atom} style={styles.brandImg} />
                    </View>
                    <View style={styles.pagerItem} key="2">
                        <Image source={blackberry} style={styles.brandImg} />
                        <Image source={dropbox} style={styles.brandImg} />
                    </View>
                    <View style={styles.pagerItem} key="3">
                        <Image source={envato} style={styles.brandImg} />
                        <Image source={firefox} style={styles.brandImg} />
                    </View>
                    <View style={styles.pagerItem} key="4">
                        <Image source={joomla} style={styles.brandImg} />
                        <Image source={magento} style={styles.brandImg} />
                    </View>
                </PagerView>
                <View style={styles.separator}></View>
                <PagerView style={styles.staff} initialPage={0} showPageIndicator={true}>
                    <View style={styles.staffItem} key={1}>
                        <Text style={styles.staffText}>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.</Text>
                        <Image style={styles.staffProfile} source={userOne}/>
                        <Text style={styles.name}>Tim Cook</Text>
                        <Text style={styles.position}>CEO, Apple</Text>
                    </View>
                    <View style={styles.staffItem} key={2}>
                        <Text style={styles.staffText}>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</Text>
                        <Image style={styles.staffProfile} source={userTwo}/>
                        <Text style={styles.name}>Tim Cook</Text>
                        <Text style={styles.position}>CEO, Apple</Text>
                    </View>
                    <View style={styles.staffItem} key={3}>
                        <Text style={styles.staffText}>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</Text>
                        <Image style={styles.staffProfile} source={userThree}/>
                        <Text style={styles.name}>Tim Cook</Text>
                        <Text style={styles.position}>CEO, Apple</Text>
                    </View>
                </PagerView>
                <View style={styles.greenLine} />
            </View>
        );
     }
}

const styles = StyleSheet.create ({
    container: {
        paddingTop: 80,
        paddingBottom: 150,
        backgroundColor: '#e6e6e6'
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: 40
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
        textAlign: 'center'
    },
    pagerView: {
        flex: 1,
        width: '100%',
        height: 300,
        
    },
    pagerItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width > 450 ? '15%' : '5%',
    },
    brandImg: {
        width: '45%',
        resizeMode: 'contain',
        opacity: 0.5
    },
    staff: {
        flex: 1,
        height: 570
    },
    staffItem: {
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    staffText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        color: '#555555',
        lineHeight: 28
    },
    staffProfile: {
        width: 125,
        height: 125,
        resizeMode: 'cover' 
    },
    name: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        marginVertical: 10
    },
    position: {
        fontSize: 17,
        color: '#757575'
    },
    greenLine: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        backgroundColor: '#39b54a',
        height: 91,
        width: 2
    }
});
