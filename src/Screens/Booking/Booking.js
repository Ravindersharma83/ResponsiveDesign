import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text>Booking</Text>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})