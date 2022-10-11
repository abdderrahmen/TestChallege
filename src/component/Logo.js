import React from 'react'
import {View,Image,} from "react-native";
import Styles from './style/Styles';

const Logo = () => {
  return (
    <>
      <View>
        <Image 
         source={{ uri:"https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"  }}
         style={Styles.image}
         />
      </View>
    </>
  )
}

export default Logo
