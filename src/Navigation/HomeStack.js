import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    Login,
    Register,
    ChooseAccount,
    ForgotPassword,
    SetPassword 
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import EditProfile from '../Screens/EditProfile/EditProfile';

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes}/>
            <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile}/>
        </Stack.Navigator>
    )
}