import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import NotifScreen from './NotifScreen';
import MeScreen from './MeScreen';


const Tab = createBottomTabNavigator();

function BfpScreen(props) {
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{tabBarActiveBackgroundColor: '#B90B0B', tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'black'}}>
             <Tab.Screen name="Home" component={HomeScreen} options= {{headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),}}/>
             <Tab.Screen name="Notification" component={NotifScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
             <MaterialCommunityIcons name='bell' color={color} size={20} />)}} />
             <Tab.Screen name="Me" component={MeScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
             <MaterialCommunityIcons name='account' color={color} size={25}/>
             )}}/>
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create ({
    txtColor: {
        color: 'black',
    }
})

export default BfpScreen;