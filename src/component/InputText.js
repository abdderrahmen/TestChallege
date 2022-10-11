import React from 'react';
import {TextInput} from "react-native";
import Styles from './style/Styles';

const InputText = () => {
  return (
    <>
       <TextInput
        style={Styles.textInput}
        placeholder="E-mail / Phone Number"
        onChangeText={(mail) => setEmail(mail)}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={Styles.textInput}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </>
  )
}

export default InputText
