import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
  } from "react-native";
  import customBoxShadow from './Style/customBoxShadow';

 

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
    <View style={{  backgroundColor: "#ffffff" }}>

        <View>
        <Image source={{ uri:"https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"  }}
         style={Styles.image}
         />
        </View>
     
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

      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => console.log("forget_pass")}>
          <Text
            style={Styles.forgetPass}
          >
            Forget Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() =>
          console.log("signInEmail")
        }
      >
        <View
          style={ Styles.actionButton}
        >
         
          <Text style={{color:"#ffffff", fontSize:20}}>
            Login
          </Text>
        </View>
      </TouchableOpacity>


<View>
    <Text>
        {email}
    </Text>
    <Text>
        {password}
    </Text>
</View>

    </View>
  </>
  )
}

const Styles = StyleSheet.create({
    actionButton: {
      marginTop: 45,
      height: 50,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      borderWidth: 2,
      borderColor: "#1e90ff",
      alignSelf: "center",
     backgroundColor:"#1e90ff",
    },
  
    actionButtonLabel: {
      //fontFamily: FONT_FAMILIES.openSansSemiBold,
      fontSize: 15,
      color: "#797979",
      textTransform: "uppercase",
      right: 8,
      fontWeight: "500",
    },

    image :{
        bottom: 30,
        width: 110,
        height: 110,
        //borderRadius: 80,
        borderWidth: 0.5,
        left : 125,
    },
    
    text: {
      alignSelf: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "darkslategray",
      marginTop: 30,
      //marginBottom: 15,
    },
    textInput: {
      alignSelf: "center",
      width: "90%",
      height: 45,
      backgroundColor: "#ffffff",
      paddingLeft: 20,
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: "#e9eced",
      marginTop: 20,
      fontSize: 15.5,
    },
    messageContainer: {
      flex: 1,
      padding: 25,
    },
   
   
    messageButtonContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    messageButton: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderWidth: 2,
      borderRadius: 2,
      borderColor: "#3385ff",
      marginLeft: 10,
      borderRadius: 6,
    },
    messageButtonText: {
      color: "#3385ff",
      fontSize: 16,
      fontWeight: "bold",
    },
    messageButtonRight: {
      backgroundColor: "#3385ff",
    },
    messageButtonTextRight: {
      color: "#fff",
    },

    forgetPass : {
     fontWeight: "700",
     color: "#1e90ff",
     fontSize: 17,
     left: 180,
    }
  });

export default Login
