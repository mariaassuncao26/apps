import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {
    
    const[real, setReal] = useState('');
    const[dolar, setDolar] = useState('');

    function Converter(){
      setReal(Math.round(parseFloat(dolar) * 5.16));
    }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Conversor</Text>

      <Text style={styles.texto}>Digite o valor em dólar:</Text>
      <TextInput placeholder='' style={{borderWidth:1, borderColor:'#fff', height: 40, width: 100, textAlign: 'center', margin: 10, color:'#fff', }} keyboardType={'numeric'} onChangeText={dolar => setDolar(dolar)}></TextInput>

      <TouchableOpacity style={styles.botao} onPress={Converter}>
        <Text style={styles.textobotao}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.textoresul}>{real ? `Real: ${real} ` : ''}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#008080',
    marginBottom: 30,
  },

  texto:{
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },

  botao:{
    width: 110,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000',
    backgroundColor: '#008080',
    padding: 10,
    margin: 20,
  },

  textobotao:{
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
  },

  textoresul:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  }
});
