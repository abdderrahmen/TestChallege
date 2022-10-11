import React, { useState } from 'react';
import {View,Text,TouchableOpacity,TextInput,Image,} from "react-native";
import Styles from './style/Styles';
import ButtonGoogle from './ButtonGoogle';
import Logo from './Logo';
import ForgetPass from './ForgetPass';
import InputText from './InputText';
import ButtonLogin from './ButtonLogin';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
    <View style={Styles.containerLogin}>
      <Logo />
      <InputText />
      <ForgetPass />
      <ButtonLogin />
      <ButtonGoogle />

      <View style={Styles.accont}>
       <Text style={Styles.textAccount}>
        Haven't an account?
       </Text>
       <TouchableOpacity>
        <Text style={Styles.textSign}>
          Sign Up
        </Text>
       </TouchableOpacity>
      </View>

      <View style={Styles.Dicover}>
        <TouchableOpacity>
          <Text style={Styles.textDiscover}>
           Discover the App
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  </>
  )
}



export default Login
