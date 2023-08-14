import { View, Text, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

const Login = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>
      <Button title='Register' onPress={()=>navigation.navigate(navigationStrings.REGISTER)}/>
    </View>
  )
}

export default Login