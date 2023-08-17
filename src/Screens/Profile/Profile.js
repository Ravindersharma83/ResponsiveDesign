import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)} title='Edit Profile'/>
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