import React from 'react';
import { ImageBackground, View, StyleSheet, Text, StatusBar } from 'react-native';

function HomeScreen(props) {
    return (
        <ImageBackground style={styles.container}>
            <View>
                <Text>
                    Home
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeScreen;