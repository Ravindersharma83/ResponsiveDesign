import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { moderateVerticalScale } from 'react-native-size-matters'
import imagePath from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp'
import navigationStrings from '../../constants/navigationStrings'
import colors from '../../styles/colors'
import ThemeButton from '../../Components/ThemeButton'
import { useTheme } from '../../context/ThemeContext'

const Login = ({navigation}) => {
  const[isVisible,setVisible] = useState(true);
  const {activeTheme} = useTheme();
  return (
    <View style={styles.container}>

    <View>
    <ImageBackground
        source={require('../../bgImg.jpeg')}
        style={styles.imgStyle}
    >
        <Text style={styles.loginTextStyle}>LOGIN</Text>
    </ImageBackground>

    <View style={styles.mainStyle}>
        <TextInputWithLabel
            label="Email Address"
            placeHolder='Enter your email'
            inputStyle={{ marginBottom: moderateVerticalScale(28) }}
            keyboardType='email-address'
        />
        <TextInputWithLabel
            label="Password"
            placeHolder='Enter your password'
            secureTextEntry={isVisible}
            rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
            onPressRight={() => setVisible(!isVisible)}
        />

        <TouchableOpacity 
        activeOpacity={0.7} style={styles.forgotView}
        onPress={()=>navigation.navigate(navigationStrings.FORGOT_PASSWORD)}
        >
            <Text style={[styles.forgotText,{color:activeTheme.themeColor}]} >Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonComp
            btnText={'Login'}
        />
    </View>
    </View>

    <View style={{marginVertical:moderateVerticalScale(10)}}>
        <ThemeButton/>
    </View>
    
    <View style={styles.bottomView}>
        <Text>Not a member ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}>
            <Text style={{fontWeight:'bold',color:colors.black}}>Join Now</Text>
        </TouchableOpacity>
    </View>

</View>
  )
}

export default Login


