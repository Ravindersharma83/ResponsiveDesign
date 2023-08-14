import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword 
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login}/>
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
            <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
            <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} />
        </Stack.Navigator>
    )
}