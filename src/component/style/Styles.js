import  {StyleSheet}  from "react-native";

const Styles = StyleSheet.create({
    containerLogin: {
      backgroundColor: "#ffffff"
    },
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
      backgroundColor: "#1e90ff",
    },
    gmailButton :{
      marginTop: 25,
      height: 50,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      borderWidth: 2,
      borderColor: "#a9a9a9",
      alignSelf: "center",
      backgroundColor:"#fff",
    },
    viewForget: {
      flexDirection: "row",
      marginTop: 15,
      marginHorizontal: 10,
    },
    image: {
      bottom: 30,
      width: 110,
      height: 110,
      borderWidth: 0.5,
      left: 125,
    },
    accont: {
      flexDirection : "row",
      top: 20,
      left: 50,
    },
    text: {
      alignSelf: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "darkslategray",
      marginTop: 30,
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
    textGoogle: {
      color:"#a9a9a9",
      fontSize:20
    },
    textLogin: {
      color:"#ffffff",
      fontSize: 20
    },
    textAccount: {
      color:"#a9a9a9",
      fontSize: 20
    },
    textDiscover: {
      color:"#20b2aa",
      textDecorationLine: "underline",
      fontSize: 18
    },
    Dicover: {
      top: 40,
      left:105
    },
    textSign: {
      color:"#1e90ff",
      fontSize:20,
      left: 5
    },
    forgetPass: {
     fontWeight: "700",
     color: "#1e90ff",
     fontSize: 17,
     left: 180,
    }
  });
  
  export default Styles;