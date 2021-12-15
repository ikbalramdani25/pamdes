import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      username : "",
      password : ""
    }
  }

  validate_field=()=>{
    const {username, password} = this.state
    if (username == ""){
      alert("Harap masukan username")
      return false
    } else if (password == ""){
      alert("Harap masukkan password")
      return false
    }
    return true
  }

  making_api_call=()=>{
    if(this.validate_field()){
          alert("Berhasil login");
          
    }
  }

  render(){
    return(
      <View style={{width: "100%", height: "100%", justifyContent: "center", alignSelf:"center", alignContent:"center", alignItems:"center"}}>
            <Image
            style={{width: 200, height: 200, marginBottom:40, borderRadius:20}}
            resizeMode="contain"
            source={require("../src/pamdes.png")}/>

            <View style ={styles.kotak}>
            <TextInput placeholder = {"Username"} style = {styles.masukanUnamePass}
            onChangeText={(value)=> this.setState({username: value})}/>
            </View>

            <View style ={styles.kotak}>
            <TextInput placeholder = {"Password"} style = {styles.masukanUnamePass}
            onChangeText={(value)=> this.setState({password: value})}/>
            </View>

            <View style={{marginTop: "10%", width:"100%"}}>
              <TouchableOpacity style = {styles.login} 
              onPress={()=>this.making_api_call()}>
                    <Text style={{color: "white", textAlign: "center"}}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.tulisanCopyright}>© PAMDES Sindangsari Kec. Cikoneng Kab. Ciamis</Text>
    </View>        
    )
  }

}

const styles = StyleSheet.create({
  kotak: {
    borderColor: "#23A3ED",
    backgroundColor:"#EEEEEE",
    height: 50, 
    width: "80%", 
    borderWidth: 2,
    marginBottom: 20,
    borderRadius:15,
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.4,
    shadowRadius:2,
    elevation:5
  },
  tulisanCopyright: {
      marginTop:60,
      marginBottom:-30
    
  },
  masukanUnamePass: {
    fontSize:17,
  },

  login: {
    borderWidth: 1, 
    height: 42, 
    width: "80%", 
    justifyContent: "center", 
    alignItem: "center", 
    borderRadius: 15, 
    backgroundColor: "#23A3ED", 
    alignSelf: "center", 
    textAlign: "center",
    marginBottom: 30
  }

})