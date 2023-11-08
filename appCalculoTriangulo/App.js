import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
//declarei variáveis. set-guarda informação
    const[base,setBase] = useState('');
    const[altura,setAltura] = useState('');
    const[area,setArea] = useState('');
//parseFloat converter em 
    function calcularArea(){
      if(base > 0 && altura > 0)
      {
        setArea((parseFloat(base) * parseFloat(altura))/2);
      }

      else
      {
        setArea('');
      }
    }

//onPress chama função
  return (
    <View style={styles.container}>
  
      <Text style={styles.titulo}>Calculo Área do Triângulo</Text>

      <Text style={styles.texto}>Digite a base: </Text>
      <TextInput placeholder='Digite a base' style={{height: 40, textAlign: 'center', fontSize: 20, margin: 20}} keyboardType={'numeric'} onChangeText={base => setBase(base)}></TextInput>

      <Text style={styles.texto}>Digite a altura: </Text>
      <TextInput placeholder='Digite a altura' style={{height: 40, textAlign: 'center', fontSize: 20, margin: 20}} keyboardType={'numeric'} onChangeText={altura => setAltura(altura)}></TextInput>

      <TouchableOpacity style={styles.botao} title='Calcular Área' onPress={calcularArea}>
        <Text style={styles.textobotao}>Calcular Área</Text>
      </TouchableOpacity>

      <Text style={styles.textoresul}>{area ? `Resultado: ${area}` : ''}</Text>

    </View>
  );
}
//se a area tiver algum resultado(?), se tiver mostre resultado, (:) se n retorne valor vazio

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
  },

  texto:{
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },

  textoresul:{
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
  },

  botao:{
    borderWidth: 1,
    borderRadius: 30,
    padding: 15,
    margin: 20,
  },

  textobotao:{
    fontSize: 20,
   
  }

})
