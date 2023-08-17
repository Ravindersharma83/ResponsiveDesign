import { View, Text } from 'react-native'
import React from 'react'
import AuthStack from './src/Navigation/AuthStack'
import Routes from './src/Navigation/Routes'
import { ThemeProvider } from './src/context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <View style={{flex:1}}>
      <Routes/>
    </View>
    </ThemeProvider>
  )
}

export default App