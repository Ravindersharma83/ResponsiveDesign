import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>EditProfile</Text>
      <Button onPress={()=>navigation.goBack()} title='Go Back'/>
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