import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,  } from 'react-native';

export default function App() {
  const [alturap, setalturap] = useState(''); 
  const [largurap, setlargurap] = useState(''); 
  const [alturaa, setalturaa] = useState(''); 
  const [larguraa, setlarguraa] = useState(''); 

  const [areap, setareap] = useState(''); 
  const [areaa, setareaa] = useState(''); 

  const [quanta, setquanta] = useState(''); 

  function Calcular(){
    setareap (parseFloat(largurap) * parseFloat(alturap));
    setareaa (parseFloat(larguraa) * parseFloat(alturaa));

    setquanta (areap/areaa);
  }

  return (
    <View style={styles.container}>

<Text style={styles.titulo}>Quantidade de azulejos</Text>

<Text style={styles.texto}>Digite a altura da parede:</Text>
<TextInput placeholder='' style={{borderWidth:1, borderColor:'#fff', height: 40, width: 100, textAlign: 'center', margin: 10, color:'#fff', }} keyboardType={'numeric'} onChangeText={alturap => setalturap(alturap)}></TextInput>

<Text style={styles.texto}>Digite a largura da parede:</Text>
<TextInput placeholder='' style={{borderWidth:1, borderColor:'#fff', height: 40, width: 100, textAlign: 'center', margin: 10, color:'#fff', }} keyboardType={'numeric'} onChangeText={largurap => setlargurap(largurap)}></TextInput>

<Text style={styles.texto}>Digite a altura do azulejo:</Text>
<TextInput placeholder='' style={{borderWidth:1, borderColor:'#fff', height: 40, width: 100, textAlign: 'center', margin: 10, color:'#fff', }} keyboardType={'numeric'} onChangeText={alturaa => setalturaa(alturaa)}></TextInput>

<Text style={styles.texto}>Digite a largura do azulejo:</Text>
<TextInput placeholder='' style={{borderWidth:1, borderColor:'#fff', height: 40, width: 100, textAlign: 'center', margin: 10, color:'#fff', }} keyboardType={'numeric'} onChangeText={larguraa => setlarguraa(larguraa)}></TextInput>

<TouchableOpacity style={styles.botao} onPress={Calcular}>
  <Text style={styles.textobotao}>Calcular</Text>
</TouchableOpacity>

<Text style={styles.textoresul}>{quanta ? `Quantidade de azulejos: ${quanta} ` : ''}</Text>
      
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
    fontSize: 35,
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
