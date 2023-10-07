import React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Signin } from '../screens/Signin'

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Signin: undefined;
    Home: undefined;
  };
  

export function AuthRoutes(){
    return (
        <Stack.Navigator 
        
        initialRouteName="Signin" 
        screenOptions={{
            contentStyle:{
                backgroundColor:'transparent',
                
            },
           headerTransparent: true,
           animation:'simple_push',
           animationDuration:900,
           headerTitle:''
           
           
           
            
        }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
