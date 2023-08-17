import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import colors from '../styles/colors'
import imagePath from '../constants/imagePath'
import { useTheme } from '../context/ThemeContext'

const ButtonComp = ({
    btnText,
    btnStyle={},
    btnTextStyle={},
    onPress,
    transparent,
    img
}) => {
  const {activeTheme} = useTheme();
  console.log('active theme',activeTheme.themeColor);
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={{...styles.btnStyle,...btnStyle,backgroundColor:transparent ? '#fff' : activeTheme.themeColor}}
        onPress={onPress}
    >
      {!!img ? <Image tintColor={colors.white} source={img}/> : <Text style={{...styles.btnTextStyle,...btnTextStyle}}>{btnText}</Text>}
      
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btnStyle:{
        height:moderateScale(48),
        // backgroundColor:colors.themeColor,
        borderRadius:moderateScale(4),
        justifyContent:'center',
        alignItems:'center'
    },
    btnTextStyle:{
        fontSize:scale(12),
        color:colors.white,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})