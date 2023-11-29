import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, 
        View, 
        StatusBar,
        ImageBackground,
        Image,
        Text,
        TouchableOpacity
                } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {firebase} from '../../Firebase/Config';

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error){
            alert('invalid email or password please check carefully')
        }
    }
    const navigation = useNavigation()
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.box1}>
                <Image style={styles.image1} source={require('../assets/logo-removebg-preview.png')} />

                    <TextInput style={styles.inputBox}
                        placeholder='Enter Email'
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType={'email-address'}/>

                    <View style={{width: '100%', alignItems: 'center',}}>
                        <TextInput style={styles.inputBox}
                        placeholder='Enter Password'
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={visible}/>

                    <TouchableOpacity 
                        style={{position: "absolute", right: '12%', bottom: '35%'}}
                        onPress={() => { setVisible(!visible) 
                        setShow(!show)}}>

                    <MaterialCommunityIcons
                    name={show === false ? 'eye-outline' : 'eye-off-outline' }
                    size={28}
                    color={"#F93D06"}
                    />
                </TouchableOpacity>
                    </View>
                    

                <View style={styles.signupDisplay}>
                    <Text style={styles.txt1}>
                        Already have and account?  
                    </Text>

                <TouchableOpacity  
                    onPress={() => navigation.replace("Registration")}>
                    <Text style={{textDecorationLine: 'underline', paddingLeft: 5, color: '#FF9900'}}>
                        Sign up here
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.box2}>
                <TouchableOpacity style={styles.Sbmt} onPress={() => loginUser(email, password)}>
                    <Text style={styles.SbmtTxt}>
                        LOG IN
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    box1: {
        flex: 3,
        backgroundColor: '#D71313',
        alignItems: "center",
    },

    box2: {
        flex: 1,
        backgroundColor: '#D71313',
        alignItems: "center",
        justifyContent: "center",
    },

    image1: {
        height: '60%',
        width: '80%',
    },

    inputBox: {
        width: '85%',
        height: 55,
        borderRadius: 25,
        backgroundColor: '#ffff',
        padding: 20,
        marginBottom: 7,
        borderColor: "#FF9900",
        borderWidth: 4,
    },

    signupDisplay: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
    },

    txt1: {
        color: 'white',
    },

    Sbmt: {
        height: 60,
        width: '85%',
        borderRadius: 5,
        backgroundColor: '#FF9900',
        shadowColor: 'grey',
    },

    SbmtTxt: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },

})

export default LoginPage;