import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Modal,
    Pressable
} from "react-native";
import { WebView } from "react-native-webview";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import Brush from '../../assets/brush.png'
import Group from '../../assets/group.png'
import Marketing from '../../assets/marketing.png'
import Web from '../../assets/web.png'
import Packaging from '../../assets/packaging.png'
import Development from '../../assets/development.png'

export default function Services() {

    const [modalVisible, setModalVisible] = useState(false);

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
            <View>
                <Modal
                        animationType="fade"
                        transparent={false}
                        visible={modalVisible}
                        supportedOrientations={['landscape']} 
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <WebView
                            source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cii6ruuycQA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                        />
                        <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.closeText}>Hide Modal</Text>
                        </Pressable>
                </Modal>

                <View style={styles.container}>
                    <View style={styles.text}>
                        <Text style={styles.hello}>What we do</Text>
                        <Text style={styles.title}>We’ve got everything you need to launch and grow your business</Text>
                        <View style={styles.textSeparator}></View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Brush}
                            />
                            <Text style={styles.itemTitle}>Brand Identity</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Group}
                            />
                            <Text style={styles.itemTitle}>Illustration</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Marketing}
                            />
                            <Text style={styles.itemTitle}>Marketing</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Web}
                            />
                            <Text style={styles.itemTitle}>Web Design</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Packaging}
                            />
                            <Text style={styles.itemTitle}>Packaging Design</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.itemImg}
                                source={Development}
                            />
                            <Text style={styles.itemTitle}>Web Development</Text>
                            <Text style={styles.itemSubTitle}>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.</Text>
                        </View>
                    </View>
                    <Pressable style={styles.playBtn} onPress={() => setModalVisible(true)}>
                        <Text style={styles.playVideo}>Play Video</Text>
                    </Pressable>
                </View>
            </View>
        );
     }
}

const styles = StyleSheet.create ({
    buttonClose: {
        backgroundColor: "orange",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom:20,
        width: '15%',
        position: 'absolute',
        right: '10%',
        bottom: '5%'
    },
    closeText: {
        textAlign: 'center',
        color: '#fff'
    },
    container: {
        paddingVertical: 80
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
    textSeparator: {
        width: '60%',
        height: 0.3,
        backgroundColor: '#000',
        marginVertical: 30
    },
    items: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        marginBottom: 20,
        alignItems: "center",
        paddingHorizontal: '10%'
    },
    itemImg: {
        width: 60,
        resizeMode: 'contain',
    },
    itemTitle: {
        fontSize: 30,
        fontFamily: 'Montserrat_600SemiBold',
        marginBottom: 30
    },
    itemSubTitle: {
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
        color: '#797979'
    },
    playBtn: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#39b54a',
        width: 200,
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    playVideo: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        textTransform: 'uppercase',
        letterSpacing: 2
    }
});
