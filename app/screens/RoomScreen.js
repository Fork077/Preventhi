import { MaterialCommunityIcons } from '@expo/vector-icons';
import {React, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { db } from '../../Firebase/Config';
import { ref, onValue } from 'firebase/database';

function RoomScreen(props) {

    const [prog, setProg] = useState(0)
    const [smokeVal, setSmokeVal] = useState(0)
    const [humidityVal, setHumidityVal] = useState(0)
    const [gasVal, setGasVal] = useState(0)
    const [deviceName, setDevName] = useState()
    
    function readData() {
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setProg(data.temperature)
            setSmokeVal(data.smokeValue)
            setGasVal(data.lpgValue)
            setHumidityVal(data.humidity)
        });
    }

    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.rowDirection}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='less-than' color={'#EA5455'} size={40}/>
                    </TouchableOpacity>
                    <Text style={styles.txt}>LIVING ROOM</Text>
                </View>

                <ScrollView style={styles.scrollDiv}>
                    <View style={styles.box2}>
                        <View style ={styles.individ}>
                            <View style={styles.divBox}>
                            <CircularProgress
                            value={smokeVal}
                            titleColor={'#333'}
                            titleStyle={{ fontWeight: 'bold' }}
                            circleBackgroundColor={'white'}
                            activeStrokeColor={'orange'}
                            activeStrokeSecondaryColor={'#C3305D'}
                            inActiveStrokeColor={'grey'}
                            progressFormatter={(value, number) => {'worklet';
      
                            return value.toFixed(2);
                        }}/>

                        <View  style={styles.textBox}>
                                <Text style={styles.textDesign}>
                                    SMOKE
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Reading: {smokeVal}
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Status: 
                                </Text>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                            value={humidityVal}
                            titleColor={'#333'}
                            titleStyle={{ fontWeight: 'bold' }}
                            circleBackgroundColor={'white'}
                            activeStrokeColor={'lightgreen'}
                            activeStrokeSecondaryColor={'orange'}
                            inActiveStrokeColor={'grey'}
                            progressFormatter={(value, number) => {'worklet';
      
                            return value.toFixed(2); // 2 decimal places
                            }}/>

                            <View  style={styles.textBox}>
                                <Text style={styles.textDesign}>
                                    HUMIDITY
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Reading: {humidityVal}
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Status: 
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={100}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'red'}
                                inActiveStrokeColor={'grey'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2); // 2 decimal places
                                }}/>

                            <View  style={styles.textBox}>
                                <Text style={styles.textDesign}>
                                    FLAME
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Reading: {45.06}
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Status: 
                                </Text>
                            </View>
                        </View> 
                    </View>

                    <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={prog}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'blue'}
                                activeStrokeSecondaryColor={'darkorange'}
                                inActiveStrokeColor={'grey'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2); // 2 decimal places
                                }}/>

                            <View  style={styles.textBox}>
                                <Text style={styles.textDesign}>
                                    TEMPERATURE
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Reading: {prog} °C
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Status: 
                                </Text>
                            </View> 
                        </View>  
                        
                        <View style={styles.individ}>
                        <View style={styles.divBox}>
                            <CircularProgress
                                value={gasVal}
                                titleColor={'#333'}
                                titleStyle={{ fontWeight: 'bold' }}
                                circleBackgroundColor={'white'}
                                activeStrokeColor={'yellowgreen'}
                                activeStrokeSecondaryColor={'#C3305D'}
                                inActiveStrokeColor={'grey'}
                                progressFormatter={(value, number) => {'worklet';
      
                                return value.toFixed(2);
                                }}/>

                            <View  style={styles.textBox}>
                                <Text style={styles.textDesign}>
                                    GAS
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Reading: {gasVal}
                                </Text>
                                <Text style={styles.textDesign2}>
                                    Status: 
                                </Text>
                            </View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
                
                <View style={styles.bottomBox}>
                    <TextInput style={styles.Inputbox}
                    placeholder='Enter Your Device Name'
                    value={deviceName}
                    onChangeText={(name) => setName(name)}
                    />
                    
                    <TouchableOpacity style={styles.Btn} onPress={readData}> 
                        <Text style={styles.BtnText}>
                            READ
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
        paddingTop: 25,
        flex: 1,
        backgroundColor: "#E7E6E1",
        justifyContent: 'center',
    },

    txt:{
        color: '#EA5455',
        fontWeight: '500',
        fontSize: 25,
        paddingLeft: 25,
    },

    addButton:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBox: {
        paddingTop: 10,
        width: '65%',
        alignItems: 'center',
    },

    textDesign: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    textDesign2: {
        paddingTop: 8,
        width: '85%',
        fontSize: 15,
        textAlign: 'left',
    },

    bottomBox: {
        backgroundColor: '#B90B0B',
        borderTopWidth: 1,
        paddingTop: 5,
        alignItems: 'center',
    },

    Inputbox: {
        width: '94%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ffff',
        padding: 15,
        marginBottom: 10,
    },

    Btn:{
        borderRadius: 10,
        height: 45,
        width: '30%',
        backgroundColor: '#f1950e',
        marginBottom: 10,
    },

    BtnText: {
        color: "white",
        textAlign: 'center',
        padding: 10,
        fontWeight: '400',
        fontSize: 20,
    },

    box2: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 10,
    },

    box3: {
        marginLeft: 20,
        paddingTop: 20,
        marginRight: '50%',
    },

    individ: {
        alignItems: 'center',
    },

    rowDirection:{
        paddingBottom: 10,
        flexDirection: 'row',
    },

    divBox:{
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: 'white',
        width: '90%',
        padding: 10,
        marginBottom: 10,
    },

    scrollDiv: {
        flex: 1,
    }
})

export default RoomScreen;