import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import ThemeButton from '../../Components/ThemeButton';
import { moderateVerticalScale } from 'react-native-size-matters';

const EditProfile = ({navigation}) => {
  const {activeTheme} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,color:activeTheme.themeColor,marginVertical:moderateVerticalScale(24)}}>Choose Your Theme</Text>
      <View style={{marginVertical:moderateVerticalScale(24)}}>
        <ThemeButton/>
      </View>
      <Button color={activeTheme.themeColor} onPress={()=>navigation.goBack()} title='Go Back'/>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})