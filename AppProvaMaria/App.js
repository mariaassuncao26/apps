import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const[velocidade,setVelocidade] = useState('');
    const[tempo,setTempo] = useState('');
    const[distancia,setDistancia] = useState('');

    function CalcularVelocidade(){
      if (tempo > 0 && distancia > 0){
        setVelocidade((parseFloat (distancia) * 1000) / (parseFloat (tempo) * 60));
      }

      else{
        setVelocidade('');
      }
    }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calculo velocidade</Text>

      <Text style={styles.texto}>Digite o tempo:</Text>
      <TextInput placeholder='' style={{borderWidth: 1, width: 150, margin: 20, textAlign: 'center', fontSize: 20, height: 40, backgroundColor: '#fff', borderRadius: 10, }} keyboardType={'numeric'} onChangeText={tempo=> setTempo(tempo)}></TextInput>

      <Text style={styles.texto}>Digite a distância:</Text>
      <TextInput placeholder='' style={{borderWidth: 1, width: 150, margin: 20, textAlign: 'center', fontSize: 20, height: 40, backgroundColor: '#fff', borderRadius: 10, }} keyboardType={'numeric'} onChangeText={distancia=> setDistancia(distancia)}></TextInput>

      <TouchableOpacity style={styles.botao} onPress={CalcularVelocidade}>
        <Text style={styles.textobotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textoresul}>{velocidade ? `Resultado: ${velocidade}` : ''}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e5e9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#000',
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 25,
    color: '#69bac4'
  },

  texto: {
    fontSize: 25,

  },

  botao:{
    width: 130,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000',
    backgroundColor: '#1c75ad',
    padding: 13,
    margin: 20,
  },

  textobotao:{
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },

  textoresul: {
    fontSize: 30,
    color: '#69bac4',
    margin: 10,
    fontWeight: 'bold',
  }
});
