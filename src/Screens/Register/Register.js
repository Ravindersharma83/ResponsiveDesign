import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, { useState } from 'react';
import HeaderComp from '../../Components/HeaderComp';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = ({navigation}) => {
  const [isTrue, setTrue] = useState(false)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderComp navigation={navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row',marginTop:moderateScale(10)}}>
          <TextInputWithLabel
            label="First name"
            placeholder="Please Enter Your First Name"
            inputStyle={{flex: 1}}
          />
          <View style={{marginHorizontal: moderateScale(8)}} />
          <TextInputWithLabel
            label="Last name"
            placeholder="Please Enter Your Last Name"
            inputStyle={{flex: 1}}
          />
        </View>

        <TextInputWithLabel
          label="Salon name"
          placeholder="Please Enter Salon Name"
          inputStyle={{marginVertical: moderateVerticalScale(28)}}
        />

        <TextInputWithLabel
          label="Date Of Birth"
          placeholder="Please Enter Your DOB"
        />

        <TextInputWithLabel
          label="Phone Number"
          placeholder="Please Enter Phone Number"
          inputStyle={{marginVertical: moderateVerticalScale(28)}}
        />

        <TextInputWithLabel
          label="Email"
          placeholder="Please Enter Your Email"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
        />

        <View style={{flexDirection: 'row'}}>
          <TextInputWithLabel
            label="Country"
            placeholder="Please Enter Your Country"
            inputStyle={{flex: 1}}
          />
          <View style={{marginHorizontal: moderateScale(8)}} />
          <TextInputWithLabel
            label="Postal/Zip Code"
            placeholder="Please Enter Your Postal/Zip Code"
            inputStyle={{flex: 1}}
          />
        </View>

        <TextInputWithLabel
          label="Address"
          placeholder="Please Enter Address"
          inputStyle={{marginVertical: moderateVerticalScale(28)}}
        />

        <TextInputWithLabel
          label="Referral Code"
          placeholder="Please Enter Your Referral Code"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
        />

        <TouchableOpacity
          style={styles.bottomView}
          activeOpacity={0.8}
          onPress={()=>setTrue(!isTrue)}
        >
          <Image
            source={isTrue ? imagePath.checkFill : imagePath.checkEmpty}
            style={{marginRight: moderateScale(12)}}
          />
          <Text>
            By Logging in, you agree to NOOVVOO’s Privacy Policy and Terms of
            Use
          </Text>
        </TouchableOpacity>

        <ButtonComp onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)} btnText={'Continue'} btnStyle={{width:'100%',marginBottom:moderateScale(10),marginVertical:moderateVerticalScale(32)}}/>
      </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;
