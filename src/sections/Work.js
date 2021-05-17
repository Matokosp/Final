import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Modal,
    Image,
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
import MasonryList from "react-native-masonry-list";

const width = Dimensions.get("window").width;

export default function Work({ screenHeight }) {

    const [modalImgSrc, setModalImgSrc] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const onPressImage = (value) => {
        setModalImgSrc(value.source)
        setModalVisible(true)
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
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType='fade'
                >
                    <View style={styles.imgModal}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.closeBtn}
                        >
                            <View style={styles.closeLineOne}></View>
                            <View style={styles.closeLineTwo}></View>
                        </TouchableOpacity>
                        <Image source={modalImgSrc} style={styles.modalImg}/>
                    </View>
                </Modal>
                <View style={styles.text}>
                    <Text style={styles.hello}>Recent works</Text>
                    <Text style={styles.title}>We love what we do, check out some of our latest works</Text>
                </View>
                <View style={{paddingHorizontal: '8%', transform: [{'translateY': -150}]}}>
                    <MasonryList
                            images={[
                                    {
                                        source: require('../../assets/1.jpg'),
                                        width: 700,
                                        height: 750,
                                        id: 1,
                                        title: 'shutterburg',
                                        cat: 'Branding'
                                    },
                                    {
                                        source: require('../../assets/2.jpg'),
                                        width: 700,
                                        height: 900,
                                        id: 2,
                                        title: 'woodcraft',
                                        cat: 'Web Design'
                                    },
                                    {
                                        source: require('../../assets/3.jpg'),
                                        width: 700,
                                        height: 900,
                                        id: 3,
                                        title: 'The beetle',
                                        cat: 'Web Development'
                                    },
                                    {
                                        source: require('../../assets/4.jpg'),
                                        width: 700,
                                        height: 900,
                                        id: 4,
                                        title: 'Grow green',
                                        cat: 'Branding'
                                    },
                                    {
                                        source: require('../../assets/5.jpg'),
                                        width: 700,
                                        height: 900,
                                        id: 5,
                                        title: 'Guitarist',
                                        cat: 'Web Design'
                                    },
                                    {
                                        source: require('../../assets/6.jpg'),
                                        width: 700,
                                        height: 900,
                                        id: 6,
                                        title: 'Palmeira',
                                        cat: 'Web Design'
                                    },
                                ]}
                            columns={ width > 450 ? 2 : 1}
                            onPressImage={onPressImage}
                            spacing={0.3}
                            listContainerStyle={{padding: 0, margin: 0, backgroundColor: '#F0F0F0'}}
                            renderIndividualFooter={(data) => {
                                return (
                                    <View style={styles.imgFooter}>
                                        <Text style={styles.imgTitle}>{data.title}</Text>
                                        <Text style={styles.imgCat}>{data.cat}</Text>
                                    </View>
                                )
                            }}
                        />
                </View>
            </View>
        );
     }
}

const styles = StyleSheet.create ({
    imgModal: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeBtn: {
        position: 'absolute',
        zIndex: 20,
        top: 70,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeLineOne: {
        width: 30,
        backgroundColor: '#fff',
        height: 3,
        transform: [{ rotate: '45deg'}, {translateY: 2 }]
    },
    closeLineTwo: {
        width: 30,
        backgroundColor: '#fff',
        height: 3,
        transform: [{ rotate: '-45deg'}, {translateY: -2 }]
    },
    modalImg: {
        width: '100%',
        resizeMode: 'contain'
    },
    container: {
        paddingVertical: 80,
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        backgroundColor: '#000',
        paddingTop: 80,
        paddingBottom: 240
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
    items: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%'
    },
    imageCont: {
        width: '100%',
    },
    image: {
        width: '100%',
        resizeMode: 'contain'
    },
    masonryContainer: {
        paddingHorizontal: '10%',
        transform: [{ translateY: -120 }]
    },
    imgFooter: {
        position: 'absolute',
        zIndex: 99,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        padding: 20
    },
    imgTitle: {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16
    },
    imgCat: {
        color: 'rgba(255,255,255,0.5)',
        marginTop: 5,
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular',
    },
});
