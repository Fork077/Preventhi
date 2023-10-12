import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native';

function RegistrationPage(props) {
    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.Txt1}>
                    Hi There!
                </Text>
                <Text style={styles.Txt2}>
                    Let's keep your house safe
                </Text>
            </View>
            <View style={styles.box2}>
                <TextInput style={styles.Inputbox} placeholder='Enter your full name'/>

                <TextInput style={styles.Inputbox} placeholder='Enter your Email'/>

                <TextInput style={styles.Inputbox} placeholder='Enter password'/>

                <TextInput style={styles.Inputbox} placeholder='Confirm password'/>
            </View>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.Sbmt}>
                    <Text style={styles.SbmtTxt}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop: 10,}}>
                    <Text>
                        Already have and account? 
                    </Text>
                </TouchableOpacity>
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
        flex: 2,
        backgroundColor: '#f93d06',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    box2: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#f93d06',
        paddingTop: 40,
        justifyContent: 'space-evenly',
    },

    box3: {
        flex: 1,
        backgroundColor: '#f93d06',
        alignItems:'center',
    },

    Txt1: {
        fontWeight: "600",
        fontSize: 25,
    },

    Txt2: {
        fontSize: 12,
        paddingBottom: 14,
    },

    Inputbox: {
        width: '90%',
        height: 55,
        borderRadius: 25,
        backgroundColor: '#ffff',
        padding: 20,
    },

    Sbmt: {
        height: 60,
        width: '85%',
        backgroundColor: '#f1950e',
    },

    SbmtTxt: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default RegistrationPage;