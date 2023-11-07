import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';

function RoomScreen(props) {

    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.rowDirection}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='less-than' color={'#FF9900'} size={40}/>
                    </TouchableOpacity>
                    <Text style={styles.txt}>LIVING ROOM</Text>
                </View>
               
                <View style={styles.box2}>
                    <View style ={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                            value={45.06}
                            titleColor={'#333'}
                            titleStyle={{ fontWeight: 'bold' }}
                            circleBackgroundColor={'white'}
                            activeStrokeColor={'orange'}
                            activeStrokeSecondaryColor={'#C3305D'}
                            inActiveStrokeColor={'grey'}
                            valueSuffix={'%'}
                            progressFormatter={(value, number) => {'worklet';
      
                            return value.toFixed(2);
                        }}/>

                        </View>
                        
                        <Text>
                            SMOKE
                        </Text>
                    </View>
                
                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                            value={11.01}
                            titleColor={'#333'}
                            titleStyle={{ fontWeight: 'bold' }}
                            circleBackgroundColor={'white'}
                            activeStrokeColor={'yellow'}
                            activeStrokeSecondaryColor={'#C3305D'}
                            inActiveStrokeColor={'grey'}
                            valueSuffix={'%'}
                            progressFormatter={(value, number) => {'worklet';
      
                            return value.toFixed(2); // 2 decimal places
                            }}/>
                        </View>
                        
                        <Text>
                            HUMIDITY
                        </Text>
                    </View>
                
                </View>

                <View style={styles.box2}>
                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={45.06}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'red'}
                                activeStrokeSecondaryColor={'#C3305D'}
                                inActiveStrokeColor={'grey'}
                                valueSuffix={'%'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2); // 2 decimal places
                                }}/>
                        </View> 

                        <Text>
                            FIRE
                        </Text>
                    </View>

                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={10}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'darkorange'}
                                activeStrokeSecondaryColor={'#C3305D'}
                                inActiveStrokeColor={'grey'}
                                valueSuffix={'%'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2); // 2 decimal places
                                }}/> 
                        </View>
                        
                        <Text>
                            TEMPERATURE
                        </Text>
                    </View>
                </View>

                <View style={styles.box3}>
                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={10}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'yellowgreen'}
                                activeStrokeSecondaryColor={'#C3305D'}
                                inActiveStrokeColor={'grey'}
                                valueSuffix={'%'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2);
                                }}/>
                        </View>
                        
                        <Text>
                            GAS
                        </Text>
                    </View>
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
    },

    addButton:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowDirection: {
        flexDirection: 'row',
    },

    box2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    },

    box3: {
        marginLeft: 20,
        paddingTop: 20,
        marginRight: '50%',
    },

    individ: {
        alignItems: 'center',
    },

    divBox:{
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
    }
})

export default RoomScreen;