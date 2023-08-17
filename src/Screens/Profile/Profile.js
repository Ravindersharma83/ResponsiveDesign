import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { useTheme } from '../../context/ThemeContext'

const Profile = ({navigation}) => {
  const {activeTheme} = useTheme();
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button color={activeTheme.themeColor} onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)} title='Change Theme'/>
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