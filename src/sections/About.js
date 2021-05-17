import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

const width = Dimensions.get("window").width;

export default function About() {

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
                <View style={styles.whiteLine}></View>
                <View style={styles.text}>
                    <Text style={styles.hello}>Hello there</Text>
                    <Text style={styles.title}>We Are Glint</Text>
                    <View style={styles.textSeparator}></View>
                    <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</Text>
                </View>
                <View style={styles.numbers}>
                    <View
                        style=
                            {[
                                styles.numSect,
                                {
                                    borderRightColor: width > 450 ? '#fff' : 'none',
                                    borderRightWidth: width > 450 ? 0.5 : 0,
                                    borderBottomColor: width > 450 ? 'none' : '#fff',
                                    borderBottomWidth: width > 450 ? 'none' : 0.5,
                                    paddingBottom: width > 450 ? 0 : 50
                                }]
                    }>
                        <Text style={styles.bigNum}>127</Text>
                        <Text style={styles.numText}>Awards Received</Text>
                    </View>
                    <View
                        style=
                            {[
                                styles.numSect,
                                {
                                    borderBottomColor: width > 450 ? 'none' : '#fff',
                                    borderBottomWidth: width > 450 ? 'none' : 0.5,
                                    paddingBottom: width > 450 ? 0 : 50
                                }]
                    }>
                        <Text style={styles.bigNum}>1505</Text>
                        <Text style={styles.numText}>Cups of Coffee</Text>
                    </View>
                    <View
                        style=
                            {[
                                styles.numSect,
                                {
                                    borderRightColor: width > 450 ? '#fff' : 'none',
                                    borderRightWidth: width > 450 ? 0.5 : 0,
                                    borderBottomColor: width > 450 ? 'none' : '#fff',
                                    borderBottomWidth: width > 450 ? 'none' : 0.5,
                                    paddingBottom: width > 450 ? 0 : 50
                                }]
                    }>
                        <Text style={styles.bigNum}>109</Text>
                        <Text style={styles.numText}>Projects Completed</Text>
                    </View>
                    <View style={styles.numSect}>
                        <Text style={styles.bigNum}>102</Text>
                        <Text style={styles.numText}>Happy Clients</Text>
                    </View>
                </View>
            </View>
        );
     }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#39b54a',
        paddingVertical: 80
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: 80
    },
    hello: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        letterSpacing: 2.5
    },
    title: {
        fontSize: 50,
        color: '#fff',
        fontFamily: 'Montserrat_600SemiBold'
    },
    textSeparator: {
        width: '60%',
        height: 0.3,
        backgroundColor: '#fff',
        marginVertical: 30
    },
    paragraph: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26
    },
    numbers: {
        alignItems: 'center',
        flexWrap: width > 450 ? 'wrap' : 'nowrap',
        justifyContent: 'center',
        flexDirection: width > 450 ? 'row' : 'column'
    },
    numSect: {
        marginVertical: width > 450 ? 60 : 30,
        width: '45%'
    },
    bigNum: {
        fontSize: 70,
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center'
    },
    numText: {
        fontFamily: 'Montserrat_600SemiBold',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10
    },
    whiteLine: {
        position: 'absolute',
        top: 0,
        right: 40,
        backgroundColor: '#fff',
        height: 91,
        width: 2
    }
});
