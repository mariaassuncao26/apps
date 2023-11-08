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
  const[telefone,setTelefone] = useState('');
  const[salgado,setSalgado] = useState(0);
  const[quantidade,setQuantidade] = useState(1);
  const[primeiraCompra,setPrimeiraCompra] = useState(false);
  const[entrega,setEntrega] = useState(false);
  const[preco,setPreco] = useState('');

  const salgados = [
    {tipoSalgado: 'Coxinha', valor: 1},
    {tipoSalgado: 'Bolinha de queijo', valor: 2},
    {tipoSalgado: 'Risoles', valor: 3},
    {tipoSalgado: 'Enroladinho de salsicha', valor: 4},
    {tipoSalgado: 'Pastelzinho', valor: 5},
    {tipoSalgado: 'Todas as opções', valor: 6},
  ]

  function valor(){
    setPreco(parseFloat(quantidade.toFixed(0)) * 0.75);
  }

  function enviarDados(){
    if(nome == '' || telefone == '' || quantidade == ''){
      alert('Preencha todos os dados corretamente');
      return
    }

    else{
      alert(
        'Conta aberta com sucesso!! \n\n ' +
        'Nome: ' + nome + '\n' +
        'Telefone: ' + telefone + '\n'+
        'Salgado: ' + salgados[salgado].tipoSalgado + '\n' +
        'Quantidade: ' + quantidade.toFixed(0) + '\n' +
        'Primeira compra: ' + (primeiraCompra ? 'Ativo' : 'Inativo') + '\n' +
        'Entrega à domicílio: ' + (entrega ? 'Ativo' : 'Inativo') + '\n' +
        'Preço da compra: R$' + preco
      )
    }
  }

  let salgadoItems = salgados.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.tipoSalgado}></Picker.Item>
  })

  return (
    <View style={styles.container}>

      <Text style={styles.bancoLogo}>Império do Salgado</Text>
      <View style={styles.areaformulario}>

        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome aqui' onChangeText={nome => setNome (nome)}>
        </TextInput>

        <Text style={styles.textoNome}>Telefone:</Text>
        <TextInput style={styles.input} placeholder='Digite o seu telefone' onChangeText={telefone => setTelefone (telefone)}>
        </TextInput>

        <View style={styles.areaSexo}>
          <Text style={styles.textoNome}>Salgado:</Text>
          <Picker style={styles.pickerSalgado} selectedValue={salgado} onValueChange={(itemvalue, itemindex) => setSalgado(itemvalue)}>
            {salgadoItems}
          </Picker>
        </View>

        <View style={styles.limitearea}>
          <Text style={styles.textoNome}>Quantidade:</Text>
          {/* toFixed(0) arredondamento de valores */}
          <Text style={styles.limiteTexto}>{quantidade.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider minimumValue={1} maximumValue={1000} minimumTrackTintColor='#cf0000' value={quantidade}
          // pega o valor e guarda o atributo limite
          onValueChange={(quantidade) => setQuantidade(quantidade)}>

          </Slider>
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Primeira Compra: </Text>
          <Switch style={{paddingTop: 15}} value={primeiraCompra} 
          // pega o valor e guarda o atributo limite
          onValueChange={(primeiraCompra) => setPrimeiraCompra(primeiraCompra)}>

          </Switch>

          <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Entrega a domicílio: </Text>
          <Switch style={{paddingTop: 15}} value={entrega} 
          // pega o valor e guarda o atributo limite
          onValueChange={(entrega) => setEntrega(entrega)}>

          </Switch>

        </View>

        <TouchableOpacity style={styles.botao} onPress={enviarDados}>
          <Text style={styles.botaotexto}>Finalizar pedido</Text>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0',
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
    color: '#00CED1',
    margin: 20
  },

  botao:{
    width: 190,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    borderRadius: 150,
    margin: 20
  },

  botaotexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00CED1'
  },



  pickerSexo:{
    flex: 1,
  },

  limitearea:{
    flexDirection: 'row',
    paddingBottom: 5,
  },

  limiteTexto:{
    color: '#00CED1',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5
  },

  areaEstudante:{
    flexDirection: 'column',
    alignItems: 'center'
  }
});





