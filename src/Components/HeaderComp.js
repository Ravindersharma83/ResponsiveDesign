import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import { moderateScale } from 'react-native-size-matters';

const HeaderComp = ({
    onPressBack,
    navigation
}) => {

    const goBack = ()=>{
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={!!onPressBack ? onPressBack : ()=> goBack()}
      >
        <Image source={imagePath.icBack}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    }
})