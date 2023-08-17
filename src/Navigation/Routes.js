import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { useAuth } from '../context/AuthContext';

export default function Routes(){
    const {loggedIn} = useAuth();
    return(
        <NavigationContainer>
            {loggedIn ? HomeStack() : AuthStack()}
        </NavigationContainer>
    )
}