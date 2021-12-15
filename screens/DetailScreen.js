import * as React from 'react';
import { useState } from 'react';
import { StyleSheet,ScrollView,Image, Text, View, TextInput, Button,Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';


function DetailScreen({navigation}){
    const [selectedValue, setSelectedValue] = useState("Pilih");
    return (
      <ScrollView style={{backgroundColor:"white"}}>
          <Pressable style={styles.camBox} onPress={()=> navigation.navigate('camera')}>
              <Image source={require('../src/camera.png')} style={styles.cameraIcon}/>
              <Text style={styles.textCam}>Tekan Untuk Ambil Gambar</Text>
          </Pressable>
          <View style={{marginTop:30,marginLeft:35}}>
              <View>
                <Text style={styles.subTitle}>Nama Pelanggan</Text>
                <TextInput style={styles.boxInput} placeholder='Nama' editable={false}/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>Alamat Pelanggan</Text>
                <TextInput style={styles.boxInput} placeholder='Alamat' editable={false}/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>No. Sambungan</Text>
                <TextInput style={styles.boxInput} placeholder='No.Sambungan'editable={false}/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>Stan Awal</Text>
                <TextInput style={styles.boxInput} placeholder='Stan Awal'editable={false}/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>Stan Saat Ini</Text>
                <TextInput style={styles.boxInput} placeholder='Stan Saat Ini'/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>Pakai</Text>
                <TextInput style={styles.boxInput} placeholder='Pakai' editable={false}/>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.subTitle}>Keterangan</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) }
                    editable={false}
                >
                    <Picker.Item label="Normal" value="Normal" />
                    <Picker.Item label="Rusak" value="Rusak" />
                </Picker>
              </View>
              <View style={{marginTop:40,marginBottom:40, width:"90%"}}>
              </View>
              
          </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    camBox:{
        width:"80%",
        height:180,
        backgroundColor:"#EEEEEE",
        alignSelf:"center",
        justifyContent:"center",
        marginTop:20,
        borderRadius:10,
    },
    cameraIcon:{
        alignSelf:"center",
    },
    textCam:{
        textAlign:"center",
        marginTop:10,
    },
    subTitle:{
        fontSize:16,
        fontWeight:"bold",
        color:"black"
    },
    boxInput:{
        backgroundColor:"#EEEEEE",
        width:"90%",
        height: 40,
        borderRadius:10,
        marginTop:10,
    },
    dropdown:{
        backgroundColor:"#EEEEEE",
        width:"90%",
        height: 40,
        borderRadius:10,
        marginTop:10
    }
})

export default DetailScreen;