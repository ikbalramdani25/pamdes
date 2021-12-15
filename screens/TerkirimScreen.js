import * as React from 'react';
import { StyleSheet,ScrollView,Image, Text,TextInput, View, Button, Pressable } from 'react-native';

function TerkirimScreen({navigation}){
    return (
      <ScrollView style={{flex:1,backgroundColor:"white"}}>
          <View style={styles.search}>
            <TextInput style={styles.searchbox} placeholder="Nama/No.Sambungan"/>
            <Pressable style={styles.btnSearch}><Text>Cari</Text></Pressable>
          </View>
          <Pressable style={styles.memberBox} onPress={()=>navigation.navigate('Detail Screen')}>
          <View style={styles.nameBox} >
              <Text style={{fontWeight:"bold"}}>UDIN</Text>
              <Text>01-001</Text>
              <Text>Jetak</Text>
          </View>
          <Pressable onPress={()=> navigation.navigate('Detail Screen')} style={styles.btnNext}><Text style={{color:"white",fontSize:18, textAlign:"center"}}>{">"}</Text></Pressable>
        </Pressable>
        <Pressable style={styles.memberBox} onPress={()=>navigation.navigate('Detail Screen')}>
          <View style={styles.nameBox} >
              <Text style={{fontWeight:"bold"}}>UDIN</Text>
              <Text>01-001</Text>
              <Text>Jetak</Text>
          </View>
          <Pressable onPress={()=> navigation.navigate('Detail Screen')} style={styles.btnNext}><Text style={{color:"white",fontSize:18, textAlign:"center"}}>{">"}</Text></Pressable>
        </Pressable>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
    search:{
        flex:2,
        flexDirection:"row",
        alignSelf:"center",
        marginTop:20,

    },
    searchbox:{
        backgroundColor:"#EEEEEE",
        width:"60%",
        borderRadius:8,
        height:42,
        shadowOffset:{
          width:0,
          height:5,
        },
        shadowOpacity:0.7,
        shadowRadius:4,
        elevation:7
    },
    btnSearch:{
        backgroundColor:"#EEEEEE",
        width:"20%",
        height:42,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        marginLeft:10,
        shadowOffset:{
          width:0,
          height:5,
        },
        shadowOpacity:0.7,
        shadowRadius:4,
        elevation:7
    },
    memberBox:{
        flex:2,
        flexDirection:"row",
        backgroundColor:"#EEEEEE",
        width:"83%",
        height:80,
        alignSelf:"center",
        marginTop:20,
        borderRadius:8,
        shadowOffset:{
          width:0,
          height:5,
        },
        shadowOpacity:0.7,
        shadowRadius:4,
        elevation:7
    },
    btnNext:{
        width:30,
        height:30,
        backgroundColor:"#38B6FF",
        color:"white",
        borderRadius:3,
        marginRight:20,
        marginTop:20
    },
    nameBox:{
        flex:3,
        flexDirection:"column",
        marginLeft:10,
        justifyContent:"center"
    }
});

export default TerkirimScreen;