import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { useTheme } from '../../context/ThemeContext'
import { moderateVerticalScale } from 'react-native-size-matters'
import { useAuth } from '../../context/AuthContext'

const Profile = ({navigation}) => {
  const {activeTheme} = useTheme();
  const {loginUser} = useAuth();
  return (
    <View style={styles.container}>
      <Text style={{marginVertical:moderateVerticalScale(20)}}>Profile</Text>
      <Button color={activeTheme.themeColor} onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)} title='Change Theme'/>
      <View style={{marginTop:moderateVerticalScale(20)}}>
      <Button color={activeTheme.themeColor} onPress={()=>loginUser(false)} title='Logout'/>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})