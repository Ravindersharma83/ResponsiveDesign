import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text,Image } from 'react-native';
import { Booking, Home, Profile } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
    <BottomTab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor:colors.blackOpacity50,
            tabBarActiveTintColor:colors.themeColor
        }}
    >
        <BottomTab.Screen 
            name={navigationStrings.HOME} 
            component={Home}
            options={{
                tabBarIcon:({focused}) => {
                    return(
                        <Image
                            source={imagePath.home}
                            style={{tintColor: focused ? colors.themeColor : colors.blackOpacity50}}
                        />
                    )
                },
                // tabBarLabel: ({focused}) => <Text style={{ fontSize: 10, color: focused ? colors.themeColor : "gray",fontWeight:'bold' }}> Home </Text> ,
            }}
        />
        <BottomTab.Screen 
            name={navigationStrings.BOOKING} 
            component={Booking}
            options={{
                tabBarIcon:({focused}) => {
                    return(
                        <Image
                            source={imagePath.booking}
                            style={{tintColor: focused ? colors.themeColor : colors.blackOpacity50}}
                        />
                    )
                },
                // tabBarLabel: ({focused}) => <Text style={{ fontSize: 10, color: focused ? colors.themeColor : "gray",fontWeight:'bold' }}> Booking </Text> ,
            }}
        />
        <BottomTab.Screen 
            name={navigationStrings.PROFILE} 
            component={Profile}
            options={{
                tabBarIcon:({focused}) => {
                    return(
                        <Image
                            source={imagePath.profile}
                            style={{tintColor: focused ? colors.themeColor : colors.blackOpacity50}}
                        />
                    )
                },
                // tabBarLabel: ({focused}) => <Text style={{ fontSize: 10, color: focused ? colors.themeColor : "gray",fontWeight:'bold' }}> Profile </Text> ,
            }}
        />
    </BottomTab.Navigator>
    )
}