import { View, Text } from 'react-native'
import React from 'react'
import AuthStack from './src/Navigation/AuthStack'
import Routes from './src/Navigation/Routes'
import { ThemeProvider } from './src/context/ThemeContext'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
    <ThemeProvider>
    <View style={{flex:1}}>
      <Routes/>
    </View>
    </ThemeProvider>
    </AuthProvider>
  )
}

export default App