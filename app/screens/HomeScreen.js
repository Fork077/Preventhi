import React from 'react';
import { ImageBackground, View, StyleSheet, Text, StatusBar, Image } from 'react-native';

function HomeScreen(props) {
    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
            <Image style={styles.image1} source={require('../assets/logo-removebg-preview.png')} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

     box1: {
        flex: 1,
        backgroundColor: '#F93D06',
        alignItems: "center",
    },

    image1: {
        height: '30%',
        width: '50%',
    },
})

export default HomeScreen;