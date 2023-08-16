import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
        flex:1,
        paddingHorizontal:moderateScale(24),
        justifyContent:'space-between',
        alignItems:'center'
    },
    headingText:{
        fontSize:scale(24),
        textTransform:'uppercase',
        fontWeight:'bold',
        textAlign:'center'
    },
    imgStyle:{
        width:moderateScale(140),
        height:moderateScale(140)
    },
    textStyle:{
        fontSize:scale(20),
        fontWeight:'400',
        marginTop:moderateScale(16)
    }
})

export default styles;