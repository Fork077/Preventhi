import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, 
         StatusBar, View, Text, TextInput, 
         TouchableOpacity, Platform, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {firebase} from '../../Firebase/Config';
import { Picker } from '@react-native-picker/picker';


const RegistrationPage = (props) => {

    const navigation = useNavigation()

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[address, setAddress] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCPassword] = useState('')
    const[mobileNumber, setMobileNum] = useState('')
    const[buildType, setBuildType] = useState()

    registerUser = async (name, email, address, password, mobileNumber) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://preventhi.firebaseapp.com',
            })
            .then (() => {
                alert('Account Succesfully created. \nVerification email sent')
            }).catch((error)=> {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    email,
                    name,
                    address,
                    mobileNumber,
                    buildType,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error => {
            alert(error.message)
        }))
    }


    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true);

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.Txt1}>
                    Hi There!
                </Text>
                <Text style={styles.Txt2}>
                    Let's keep your house safe
                </Text>
            
            <View style={styles.box2}>
                <ScrollView>
                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Enter your full name'
                        value={name}
                        onChangeText={(name) => setName(name)}/>

                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Enter your Email'
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType= 'email-address'/>

                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Enter your complete address'
                        value={address}
                        onChangeText={(address) => setAddress(address)}
                    />

                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Enter Mobile Number'
                        value={mobileNumber}
                        onChangeText={(mobileNumber) => setMobileNum(mobileNumber)}
                    />

                <View style={styles.box}>
                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Enter password'
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={hide}/>

                    <TouchableOpacity 
                        style={styles.viewpass}
                        onPress={() => {
                            setHide(!hide) 
                            setShow(!show)}}>
                            <MaterialCommunityIcons
                            name={show === false ? 'eye-outline' : 'eye-off-outline' }
                            size={28}
                            color={"black"}
                        />
                    </TouchableOpacity>
                </View>
                    <TextInput 
                        style={styles.Inputbox} 
                        placeholder='Confirm password'
                        value={cpassword}
                        onChangeText={(cpassword) => setCPassword(cpassword)}
                        secureTextEntry={hide}/>

                    <View style={styles.dropDown}>
                        <Picker
                            mode='dropdown'
                            selectedValue={buildType}
                            onValueChange={(itemValue, itemIndex) =>
                            setBuildType(itemValue)
                            }>
                            <Picker.Item color="grey" label="Select Type of Occupancy"/>
                            <Picker.Item label="Residential" value="Residential" />
                            <Picker.Item label="Industrial" value="Industrial" />
                            <Picker.Item label="Business" value="Business" />
                            <Picker.Item label="Storage" value="Storage" />
                        </Picker>
                    </View>

                </ScrollView>
            </View>
           
                <TouchableOpacity style={styles.Sbmt} onPress={() => {
                    if(password === cpassword) {
                        registerUser(name, email, address, password, mobileNumber)
                    }else{
                        alert('Password do not match')
                    }
                }}>
                    <Text style={styles.SbmtTxt}>
                        Register
                    </Text>
                </TouchableOpacity>

            <View style={styles.signupDisplay}>
                <Text style={styles.txt}>
                    Already have and account?  
                </Text>

                <TouchableOpacity  
                    onPress={() => navigation.replace('Login')}>
                    <Text style={{textDecorationLine: 'underline', paddingLeft: 5, color: '#FF9900'}}>
                        Log in here 
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
        backgroundColor: '#B90B0B',
        justifyContent: 'center',
        alignItems: 'center',
    },

    box2: {
        height: '45%',
        borderRadius: 15,
        width: '90%',
        backgroundColor: 'white',
        padding: 9,
        marginBottom: 10,
    },

    box3: {
        flex: 1,
        backgroundColor: '#f93d06',
        alignItems:'center',
    },

    Txt1: {
        color: '#F5F5F5',
        fontWeight: "600",
        fontSize: 25,
    },

    Txt2: {
        color: "#F5F5F5",
        fontSize: 12,
        paddingBottom: 14,
    },

    Inputbox: {
        width: '94%',
        borderRadius: 20,
        height: 55,
        backgroundColor: '#ffff',
        padding: 20,
        marginLeft: 1,
        borderBottomWidth: 1,
        marginBottom: 10,
    },

    Sbmt: {
        height: 60,
        width: '85%',
        backgroundColor: '#f1950e',
    },

    SbmtTxt: {
        color: "white",
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    viewpass: {
        position: "absolute",
        right: 45,
        bottom: 25
    },

    box:{
        width: '100%',
    },

    signupDisplay: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
    },

    txt: {
        color: "#F5F5F5",
    },

    dropDown: {
        width: '79%',
        backgroundColor: '#ffff',
        marginLeft: 15,
        borderWidth: 1,
        
    }
});

export default RegistrationPage;