import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegistrationPage from './app/screens/RegistrationPage';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}}  name = "Welcome" component={WelcomeScreen}/>
      <Stack.Screen options={{headerShown: false}}  name = "Registration" component={RegistrationPage}/>
    </Stack.Navigator>
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
