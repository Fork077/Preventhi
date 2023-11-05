import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RoomScreen(props) {

    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.txt}>LIVING ROOM</Text>
                <View>
                    
                </View>
                <View>

                </View>
                <View>

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
        backgroundColor: "#f93d06",
        justifyContent: 'center',
    },

    txt:{
        color: 'white',
        fontWeight: '500',
        fontSize: 25,
        paddingLeft: 25,
        justifyContent: "flex-end",
    },

    addButton:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default RoomScreen;