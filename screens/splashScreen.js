import * as React from 'react';
import { StyleSheet,ScrollView,Image, Text, View } from 'react-native';

function splashScreen({navigation}){
    React.useEffect(()=>{
        setTimeout(() => {
           navigation.replace('Tabs'); 
        }, 3000)
    },[navigation]);
    return (
      <View style={styles.layout}>
          <View style={styles.box}>
              <Image source={require('../src/pamdes.png')} style={styles.logo}/>
              <Text style={styles.footer}>PAMDES Sindangsari Kec. Cikoneng Kab. Ciamis{"\n"} versi 0.2</Text>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:"#018FD1",
        
    },
    box:{
        flex:3,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
        width:200,
        height:195,
    },
    footer:{
        color:"white",
        fontSize:12,
        fontWeight:"bold",
        marginTop:250,
        marginBottom:-100,
        textAlign:"center",
    }
});

export default splashScreen;