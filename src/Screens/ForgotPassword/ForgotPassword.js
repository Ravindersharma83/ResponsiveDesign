import {View, Text, SafeAreaView, Image,Keyboard} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderComp from '../../Components/HeaderComp';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgotPassword = ({navigation}) => {
  const [isTrue, setTrue] = useState(false)
  const[isVisible,setVisible] = useState(true);

  // handling SEND button while opening up keyboard
  const [keybaordHeight, setKeyboardHeight] = useState(0)
  useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
          console.log("event trigger on show keyboard", event)
          setKeyboardHeight(event.endCoordinates.height - 20)
      })

      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (event) => {
          console.log("event trigger on hide keyboard", event)
          setKeyboardHeight(0)
      });
      return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
      }
  }, [])


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <HeaderComp navigation={navigation} />

      <View style={{flex:1}}>
        <View style={{flex:0.2,alignItems:'center', justifyContent:'center'}}>
        <Image source={imagePath.lock} style={{width:moderateScale(100),
        height:moderateScale(100)}}/>
        </View>

        <View style={{flex:0.4}}>
          <Text style={styles.headingText}>Forgot Password</Text>
          <Text style={styles.descText}>Enter the email address associated with your account to receive password change verification code.</Text>
        </View>

        {/* <View style={{flex:0.4,marginBottom:keybaordHeight}}> */}
        <View style={{flex:0.4}}>
          <TextInputWithLabel
                label="Email"
                placeholder='Enter your email'
                inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                keyboardType='email-address'
            />
            <ButtonComp
              btnText={'Send'} 
              onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)} 
            />
        </View>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
