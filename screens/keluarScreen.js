import * as React from 'react';
import { StyleSheet,ScrollView,Image, Text, View,Pressable } from 'react-native';

function KeluarScreen({navigation}){
    // ?const [modalVisible, setModalVisible] = useState(false);
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.headers}>
              <Text style={styles.keluar}>Keluar</Text>
          </View>
          <Text style={styles.alerts}>Apakah Anda Yakin Keluar?</Text>
          <View style={styles.footer}>
            <Pressable style={styles.tidak} onPress={()=> navigation.navigate('Home')}><Text style={{color:"white",fontWeight:"bold"}}>Tidak</Text></Pressable>
            <Pressable style={styles.ya} onPress={()=> navigation.navigate('login')}><Text style={{color:"black",fontWeight:"bold"}}>Ya</Text></Pressable>
          </View>
  
        </View>
  
      </View>
      
    );
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"black",
      opacity:0.8,
      alignItems:"center",
      justifyContent:"center"
      
    },
    card:{
  
      backgroundColor:"white",
      width:"80%",
      height:200,
      borderRadius:10
    },
    keluar:{
      fontSize:24,
      color:"black",
      fontWeight:"bold",
      marginLeft:20,
      marginTop:10,
    },
    alerts:{
      fontSize:16,
      color:"black",
      marginLeft:20,
      marginTop:40,
    },
    footer:{
      flex:2,
      flexDirection:"row",
      marginTop:50,
      alignSelf:"center",
      marginLeft:20
    },
    tidak:{
      marginLeft:20,
      backgroundColor:"grey",
      width:60,
      height:30,
      borderRadius:5,
      alignItems:"center",
      justifyContent:"center"
    },
    ya:{
      marginLeft:20,
      backgroundColor:"#23A3ED",
      width:60,
      height:30,
      borderRadius:5,
      alignItems:"center",
      justifyContent:"center",
      marginRight:-50,
    }
  });

export default KeluarScreen;
  