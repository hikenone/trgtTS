import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, ScrollView, ImageBackground } from 'react-native';

let gambar = require('./assets/doge.jpg') 
let tmblTeks: string = "Menabung"
let jumlah : number = 0
let jumlahStr : string = jumlah.toString()
let tabungan : number = 0
let tabunganStr : string = tabungan.toString()
let nmnlTabungan : number = 0
let nmnlJumlah : number = 0

export default function App() {

  const [nmnlJumlah, setJumlah] = useState('0');
  const [nmnlTabungan, setTabungan] = useState('0');
  
  jumlah = parseInt(nmnlJumlah)
  tabungan = parseInt(nmnlTabungan)
  
  let hasil : number = jumlah - tabungan

  

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={gambar} style={styles.bgTrgt}>
      </ImageBackground>
      <Text style={styles.teks1}>Aplikasi kalkulator pengurangan</Text>
      
      <Text  style={styles.teks2}>Value A</Text>

      <TextInput 
        keyboardType={'number-pad'} style={styles.kolomteks}
        onTouchStart={nmnlJumlah=> setJumlah('')}
        onChangeText={nmnlJumlah => setJumlah(nmnlJumlah)}
        defaultValue={nmnlJumlah}
      ></TextInput>

      <Text  style={styles.teks2}>Value Kontol</Text>

      <TextInput 
        keyboardType={'number-pad'} style={styles.kolomteks}
        onTouchStart={nmnlTabungan=> setTabungan('')}
        onChangeText={nmnlTabungan => setTabungan(nmnlTabungan)}
        defaultValue={nmnlTabungan}
      ></TextInput>
      
      <Text style={styles.teks2}>Hasil  {hasil}</Text>
          
     
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgTrgt: {
    minHeight:200,
    minWidth:200

  },

  teks1:{
    fontSize: 38,
  },
  teks2:{
    fontSize: 30, 
  },
  teks3:{
    fontSize: 24,
  },

  kolomteks:{
    flex:1,
    fontSize: 20,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center'
    
    
    

  },
  tombol:{
    fontSize: 24,

  }
});