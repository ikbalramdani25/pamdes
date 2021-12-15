import React from 'react';
import { useState } from 'react';
import { StyleSheet,Image, Text, View, Modal,Pressable,Alert} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen';
import TerkirimScreen from './screens/TerkirimScreen';
import splashScreen from './screens/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import memberScreen from './screens/memberScreen';
import caterScreen from './screens/caterScreen';
import render from './screens/login';
import ExampleApp from './screens/Camera';
import KeluarScreen from './screens/keluarScreen';
import DetailScreen from './screens/DetailScreen';


const Tab = createBottomTabNavigator();
function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen  name="Home"  component={HomeScreen}
        options={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#23A3ED',
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tab.Screen name="Terkirim" component={TerkirimScreen} options={({ route }) => ({
          title:"Terkirim",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Terkirim') {
              iconName = focused
                ? 'send'
                : 'send-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#23A3ED',
          tabBarInactiveTintColor: 'gray',
        })} />
      <Tab.Screen name="Keluar"  component={KeluarScreen} options={({ route }) => ({
          headerShown:false,
          title:"Keluar",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Keluar') {
              iconName = focused
                ? 'exit'
                : 'exit-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#23A3ED',
          tabBarInactiveTintColor: 'gray',
        })}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={splashScreen} options={{headerShown:false}} />
        <Stack.Screen name="login" component={render} options={{headerShown:false}} />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
        <Stack.Screen name="Pencatatan Stan Meter" component={memberScreen} options={{title:"Pencatatan Stan Meter",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED'
         }} />
        <Stack.Screen name="Input Data" component={caterScreen} options={{title:"Input Data",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED'}} />
          <Stack.Screen name="camera" component={ExampleApp} options={{headerShown:false,title:"Camera",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED'}} />
          <Stack.Screen name="Detail Screen" component={DetailScreen} options={{title:"Detail Terkirim",
          headerTitleAlign:'center',
          headerTintColor: '#23A3ED'}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}



export default App;