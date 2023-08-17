import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import dummyData from './dummyData';
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import ButtonComp from '../../Components/ButtonComp';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const {activeTheme} = useTheme();
  const renderItem = ({item})=>{
    return(
      <View style={styles.flatStyle}>
        <View style={styles.flexView}>
            <View>
            <Text style={{
              fontSize: scale(12),
              color: colors.blackOpacity80}}>
              {!!item?.date? item.date.date: 'date not found'}
            </Text>
          <Text style={{
              fontSize: scale(12),
                color: colors.black,
                fontWeight: 'bold',
                marginTop: moderateVerticalScale(8)
            }}>{item?.name}
          </Text>

              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image 
                  style={{width:moderateScale(14),height:moderateScale(14),tintColor:colors.blackOpacity50}} 
                  source={imagePath.location}/>
                <Text>{item?.address}</Text>
              </View>

            </View>
          <Image source={{uri:item?.image}}
            style={{height:moderateScale(74),width:moderateScale(74),borderRadius:moderateScale(37)}}
          />
        </View>

        <View style={{ ...styles.flexView, marginVertical: moderateVerticalScale(8) }}>
          <Text style={{
              fontSize: moderateScale(14),
              color: colors.blackOpacity50,
              textTransform: 'uppercase'

          }}>Price</Text>
          <Text style={{
              fontSize: scale(14),
              color: colors.black,
              fontWeight: 'bold',
          }}>{item?.price}</Text>
      </View>

      <View style={styles.flexView}>
        <View style={{flex:1}}>
          <ButtonComp 
            btnText={'Reject'}
            transparent={true}
            btnStyle={{
              backgroundColor:colors.white,
              borderWidth:1,
              borderColor:activeTheme.themeColor
            }}
            btnTextStyle={{
              color:activeTheme.themeColor
            }}
          />
        </View>
        <View style={{flex:0.2}}/>
        <View style={{flex:1}}>
          <ButtonComp btnText={'Accept'}/>
        </View>
      </View>

      </View>
    )
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
      <View style={styles.headerStyle}>
        <Text/>
        <Text style={[styles.headerText,{color:activeTheme.themeColor}]}>Invitation Requests </Text>
        <Image source={imagePath.notification}/>
      </View>
      
      <View style={{flex:1,marginTop:moderateVerticalScale(14)}}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={dummyData}
          renderItem={renderItem}
          ItemSeparatorComponent={()=><View style={{marginBottom:moderateVerticalScale(16)}}/>}
        />
      </View>
      </SafeAreaView>
    </View>
  )
}

export default Home
