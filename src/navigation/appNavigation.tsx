import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { images } from '../assets';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignIn';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    options={{ headerShown: false }}
                    component={WelcomeScreen}
                    />
                <Stack.Screen
                    name="SignIn"
                    options={{ headerShown: false }}
                    component={SignInScreen}
                    />    

                


            </Stack.Navigator>

            
        </NavigationContainer>
    );
}