import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import MapView from 'react-native-maps';

function Dash(props) {
    return (
        <ImageBackground style={styles.box1}>
             <MapView
                style={styles.container}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >

            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
            />
            
            </MapView>

            <View style={styles.box2}>

            </View>
        </ImageBackground>
       
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 3,
        
    },

    box1: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    box2: {
        flex: 1,
        backgroundColor: '#f93d06',
    }

})



export default Dash;