import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegistrationPage from './app/screens/RegistrationPage';
import LoginPage from './app/screens/LoginPage';
import Dash from './app/screens/Dash';
import BfpScreen from './app/screens/BfpScreen.js';
import { firebase } from'./Firebase/Config.js';
import { useEffect, useState } from 'react';
import { usePushNotifications } from './pushNotifications';

const Stack = createStackNavigator();

function App() {
  const { expoPushToken } = usePushNotifications();
  console.log(expoPushToken);

  const[initializing, setInitializing] = useState(true);
  const[user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  if (!user){
    return(
      <Stack.Navigator>
        <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
        />
        <Stack.Screen
         options={{headerShown: false}}
         name="Login"
         component={LoginPage}
        />
        <Stack.Screen
        options={{headerShown: false}}
        name="Registration"
        component={RegistrationPage}
        />
      </Stack.Navigator>
    );
  } else {
    const userEmail = user.email;
    if(userEmail && userEmail.toLowerCase().endsWith('bfp@gmail.com')) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="BFP"
            component={BfpScreen}
          />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={Dash}
          />
        </Stack.Navigator>
      )
    }
  }
}

export default () => {
  return (
  <NavigationContainer>
    <App/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
