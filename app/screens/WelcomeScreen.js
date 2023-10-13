import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, 
        Text, Platform, StatusBar, Button, 
        TouchableOpacity, Image } from 'react-native';

function WelcomeScreen(props) {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box2}>
                <Text style={styles.Txt2}>
                    Be Safe with PreventHi  
                </Text>
                <Text style={styles.Txt3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo. 
                    Pulvinar pellentesque habitant morbi tristique senectus et. Tempus egestas sed sed risus.
                </Text>

            </View>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.Btn1} onPress={() => navigation.replace('Registration')}>
                    <Text style={styles.Txt1}>Get Started</Text>
                </TouchableOpacity>
                <Image style={styles.image} source={require('../assets/lol.png')}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    box2: {
        flex: 2,
        backgroundColor: '#f93d06',
        justifyContent: "flex-end",
        alignItems: 'center',
    },

    box3: {
        flex: 3,
        backgroundColor: '#f93d06',
        justifyContent: "flex-end",
        alignItems:'center',
        justifyContent: 'space-between',
    },

    image: {
        height: '75%',
        width: '180%',
        marginRight: 180,
    },

    Btn1: {
        height: 60,
        width: '85%',
        backgroundColor: '#f1950e',
    },

    Txt1:{
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },

    Txt2: {
        textAlign: 'right',
        fontWeight: '600',
        fontSize: 30,
    },
    
    Txt3: {
        textAlign:'right',
        fontWeight: '400',
        paddingHorizontal: 40,
        paddingBottom: 40,
    }
});

export default WelcomeScreen;