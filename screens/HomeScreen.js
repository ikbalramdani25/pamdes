import * as React from 'react';
import { StyleSheet,ScrollView,Image, Text, View } from 'react-native';


function HomeScreen({navigation}){

    return (
      <ScrollView >
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image source={require('../src/ikbal.jpg')} style={styles.foto}/>
          <View style={styles.text}>
            <Text style={styles.ucapan}>Selamat Datang</Text>
            <Text style={styles.nama}>Ikbal Ramdani</Text>
          </View>
          <Image source={require('../src/pamdes.png')} style={styles.logoHome}/>
        </View>
        <View style={styles.lok}>
          <Text style={styles.gps}>Ds. Sindang Sari, Kec.  Cikoneng...</Text>
          <Text style={styles.date}>Selasa, 20 Agustus 2021</Text>
        </View>
        
      </View>
      <View style={styles.info}>
        <View style={styles.infoPanel}>
          <View style={styles.total}>
            <Text style={styles.angka}>50</Text>
            <Text style={styles.ket}>Total Pelanggan</Text>
          </View>
          <View style={styles.garis}/>
          <View style={styles.total}>
            <Text style={styles.angka}>32</Text>
            <Text style={styles.ket}>Sudah Tercatat</Text>
          </View>
          <View style={styles.garis}/>
          <View style={styles.total}>
            <Text style={styles.angka}>18</Text>
            <Text style={styles.ket}>Belum Tercatat</Text>
          </View>
  
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.buttoncatat}>
          <View style={styles.buttoncatatText}>
            <Image source={require('../src/dashboard.png')} style={styles.dash}/>
            <Text onPress={()=>navigation.navigate('Pencatatan Stan Meter')} style={{fontSize:18,fontWeight:"bold", marginLeft:20,color:"white"}}>Pencatatan Stan Meter</Text>
          </View>
          
        </View>
  
      </View>
  
    </ScrollView>
    
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      height:240,
      backgroundColor:"#23A3ED",
      marginTop:-20,
      borderRadius:30,
      flexDirection:"column",
    },
    container2:{
      marginLeft:10,
      flex: 2,
      flexDirection:"row",
    },
    text:{
      flex: 2,
      flexDirection:"column",
    },
    nama:{
      fontSize:20,
      color:"white",
      marginTop:3,
      marginLeft:10
    },
    lok:{
      marginLeft:10,
      flex:2,
      flexDirection:"column",
  
    },
    gps:{
      color:"white",
      fontSize:14,
      fontWeight:"bold",
      marginLeft:20,
    },
    date:{
      marginTop:-5,
      color:"white",
      fontSize:12,
      marginTop:1,
      marginLeft:20
    },
    ucapan:{
      fontSize:20,
      fontWeight:"bold",
      color:"white",
      marginTop:40,
      marginLeft:10
    },
    foto:{
      borderRadius:10,
      height:50,
      width:50,
      marginTop:40,
      marginLeft:20,
    },
    logoHome:{
      borderRadius:10,
      height:50,
      width:50,
      marginTop:40,
      marginRight:28,
    },
    info:{
      flexDirection:"row",
      shadowColor:"#00000",
      borderRadius:10,
      backgroundColor:"white",
      width:"80%",
      alignSelf:"center",
      marginTop:-60,
      height:100,
      shadowOffset:{
        width:0,
        height:5,
      },
      shadowOpacity:0.7,
      shadowRadius:4,
      elevation:7
    },
    infoPanel:{
      flex:2,
      flexDirection:"row",
    },
    total:{
      flex:5,
      flexDirection:"column",
      justifyContent:"center",
    },
    garis:{
      backgroundColor:"#23A3ED",
      width:4,
      height:"80%",
      marginTop:10,
    },
    angka:{
      fontSize:30,
      fontWeight:"bold",
      color:"#23A3ED",
      alignSelf:"center"
    },
    ket:{
      fontSize:14,
      width:90,
      textAlign:'center',
      marginLeft:7,
    },  
    menu:{
      height:200,
      justifyContent:"center",
      
    },
    buttoncatat:{
      backgroundColor:"#23A3ED",
      width:"80%",
      height:70,
      alignSelf:"center",
      borderRadius: 10,
      marginTop:90,
      shadowOffset:{
        width:0,
        height:5,
      },
      shadowOpacity:0.8,
      shadowRadius:4,
      elevation:7
    },
    buttoncatatText:{
      flex:2,
      flexDirection:"row",
      justifyContent:'center',
      marginTop:20,
    },
    dash:{
      width:28,
      height:28,
      marginLeft:-30,
    },
  
  });
  export default HomeScreen;
  