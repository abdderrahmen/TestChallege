import React from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import Styles from './style/Styles';

const ButtonLogin = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          console.log("signInEmail")
        }
      >
        <View style={ Styles.actionButton}>
          <Text style={Styles.textLogin}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default ButtonLogin
