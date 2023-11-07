import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

function MeScreen(props) {
    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <MaterialCommunityIcons name='account-circle' size={130}/>
                <View style={styles.ProfTxt}>
                    <Text style={styles.h1}>
                        USER NAME
                    </Text>
                    <Text>
                        USER EMAIL ADDRESS
                    </Text>
                </View>
            </View>

            <View style={styles.box2}>
                <Text style={styles.txtConfig}>
                    Email:
                </Text >
                <Text style={styles.txtConfig}>
                    Mobile Number:
                </Text>
                <Text style={styles.txtConfig}>
                    Address:
                </Text>
                <Text style={styles.txtConfig}>
                    Type of occupancy:
                </Text>

                <View style={styles.ExtBtn}>
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={styles.BtnText}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
               
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
        backgroundColor: 'lightgray',
        alignItems: "center",
        flexDirection: 'row',
    },

    box2: {
        paddingLeft: 10,
        paddingTop: 20,
        flex: 3,
        backgroundColor: '#F93D06',
    },

    txtConfig:{
        marginBottom: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
    },

    ExtBtn:{
        marginTop: 40,
        alignItems: 'center',
    },

    Btn:{
        height: 50,
        width: '40%',
        backgroundColor: '#f1950e',
    },

    BtnText: {
        color: "white",
        textAlign: 'center',
        padding: 10,
        fontWeight: '400',
        fontSize: 20,
    },

    ProfTxt: {
        marginLeft: 5,
    },

    h1: {
        fontSize: 22,
        fontWeight: '700',
    }
})

export default MeScreen;