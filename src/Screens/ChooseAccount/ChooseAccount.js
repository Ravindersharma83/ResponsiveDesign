import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { moderateScale } from 'react-native-size-matters'
import ButtonComp from '../../Components/ButtonComp'
import styles from './styles'
import navigationStrings from '../../constants/navigationStrings'

const ChooseAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{paddingHorizontal:moderateScale(24),}}>
        <HeaderComp navigation={navigation}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.headingText}>Choose Your  <Text>Account Type</Text></Text>

        <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/images/house.png')} style={styles.imgStyle}/>
          <Text style={styles.textStyle}>Agency</Text>
        </View>

        <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/images/freelancer.png')} style={styles.imgStyle}/>
          <Text style={styles.textStyle}>Freelancer</Text>
        </View>

        <ButtonComp onPress={()=>navigation.navigate(navigationStrings.REGISTER)} btnText={'Continue'} btnStyle={{width:'100%',marginBottom:moderateScale(10)}}/>
      </View>
    </SafeAreaView>
  )
}

export default ChooseAccount
