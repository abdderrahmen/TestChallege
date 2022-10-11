import React from 'react';
import {View,Text,TouchableOpacity,Image,} from "react-native";
import Styles from './style/Styles';

const ButtonGoogle = () => {
  return (
    <>
     <TouchableOpacity
        onPress={() =>
          console.log("signInEmail")
        }
      >
        <View style={ Styles.gmailButton}>
         <Image
          source={{uri:"https://freesvg.org/img/1534129544.png"}}
          style={{width: 27, height: 27, right:10}}
         />
         <Text style={Styles.textGoogle}>
            Continue with Google
         </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default ButtonGoogle;
