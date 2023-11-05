import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';

function NotifScreen(props) {
    return (
        <ImageBackground style={styles.container}>
            <View>
                <Text>
                    Notification!
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

export default NotifScreen;