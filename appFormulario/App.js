import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//combobox
import {Picker} from '@react-native-picker/picker';
//botão deslizante
import Slider from '@react-native-community/slider';
//botão liga/desliga
import {Switch} from 'react-native';

export default function App() {

  const[nome,setNome] = useState('');
  const[idade,setIdade] = useState('');
  const[sexo,setSexo] = useState(0);
  const[limite,setLimite] = useState(250);
  const[estudante,setEstudante] = useState(false);

  const sexos = [
    {sexoNome: 'Masculino', valor: 1},
    {sexoNome: 'Feminino', valor: 2},
  ]

  function enviarDados(){
    if(nome == '' || idade == ''){
      alert('Preencha todos os dados corretamente');
      return
    }

    else{
      alert(
        'Conta aberta com sucesso!! \n\n ' +
        'Nome: ' + nome + '\n' +
        'Idade: ' + idade + '\n'+
        'Sexo: ' + sexos[sexo].sexoNome + '\n' +
        'Limite Conta: ' + limite.toFixed(2) + '\n' +
        'Conta Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
      )
    }
  }

  let sexoItems = sexos.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}></Picker.Item>
  })

  return (
    <View style={styles.container}>

      <Text style={styles.bancoLogo}>Banco Luizinho'S</Text>
      <View style={styles.areaformulario}>

        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome aqui' onChangeText={nome => setNome (nome)}>
        </TextInput>

        <Text style={styles.textoNome}>Idade:</Text>
        <TextInput style={styles.input} placeholder='Digite sua idade' onChangeText={idade => setIdade (idade)} keyboardType="numeric">
        </TextInput>

        <View style={styles.areaSexo}>
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker style={styles.pickerSexo} selectedValue={sexo} onValueChange={(itemvalue, itemindex) => setSexo(itemvalue)}>
            {sexoItems}
          </Picker>
        </View>

        <View style={styles.limitearea}>
          <Text style={styles.textoNome}>Seu Limite:</Text>
          {/* toFixed(0) arredondamento de valores */}
          <Text style={styles.limiteTexto}>R${limite.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider minimumValue={250} maximumValue={4000} minimumTrackTintColor='#cf0000' value={limite}
          // pega o valor e guarda o atributo limite
          onValueChange={(limite) => setLimite(limite)}>

          </Slider>
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante: </Text>
          <Switch style={{paddingTop: 15}} value={estudante} 
          // pega o valor e guarda o atributo limite
          onValueChange={(estudante) => setEstudante(estudante)}>

          </Switch>
        </View>

        <TouchableOpacity style={styles.botao} onPress={enviarDados}>
          <Text style={styles.botaotexto}>Abrir Conta</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaformulario:{
    flexDirection: 'column',
    margin: 10, 
  },

  textoNome:{
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },

  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },

  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 150,
    margin: 20
  },

  botaotexto:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },

  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },

  pickerSexo:{
    flex: 1,
  },

  limitearea:{
    flexDirection: 'row',
    paddingBottom: 5,
  },

  limiteTexto:{
    color: '#ff0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5
  },

  areaEstudante:{
    flexDirection: 'column',
    alignItems: 'center'
  }
});





