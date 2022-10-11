import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import Styles from './style/Styles';

const ForgetPass = () => {
  return (
    <>
      <View style={Styles.viewForget}>
        <TouchableOpacity onPress={() => console.log("forget_pass")}>
          <Text style={Styles.forgetPass}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ForgetPass
