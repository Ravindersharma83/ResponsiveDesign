import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { defaultTheme, redTheme, blueTheme } from '../styles/colors.js';
import { moderateScale } from 'react-native-size-matters';

const ThemeButton = () => {
  const { changeTheme } = useTheme();
  console.log('ch',changeTheme);
  console.log('bl',blueTheme);

  return (
    <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity style={{marginHorizontal:moderateScale(10)}} onPress={() => changeTheme(defaultTheme)}>
            <View style={{backgroundColor:defaultTheme.themeColor,height:50,width:50,borderRadius:25}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:moderateScale(10)}} onPress={() => changeTheme(redTheme)}>
            <View style={{backgroundColor:redTheme.themeColor,height:50,width:50,borderRadius:25}}></View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:moderateScale(10)}} onPress={() => changeTheme(blueTheme)}>
            <View style={{backgroundColor:blueTheme.themeColor,height:50,width:50,borderRadius:25}}></View>
        </TouchableOpacity>
    </View>
  );
};

export default ThemeButton;