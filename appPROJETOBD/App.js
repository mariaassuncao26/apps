import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native'

import {Ionicons} from '@expo/vector-icons'
import axios from 'axios';

export default function App(){
 
  //declarar atributos
  const api='http://10.68.36.134/pam2etim/saude/';
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [sus, setSus] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  const [abrir, setAbrir] = useState(false);

  useEffect(() => {
      listarDados();
  }, [])

  async function listarDados(){
      const res = await axios.get(api + 'listar.php?busca=' + buscar);
      setLista(res.data.result);
  }

  async function add(){
      const obj = {nome, cpf, senha, sus, email, id};
      const res = await axios.post(api + 'add.php', obj);

    if(res.data.success === true){
        limparCampos();
    }

    if(res.data.success === 'Cadastrado confirmado!'){
        mensagemDuplicidade(); 
    }

      listarDados();
      setAbrir(true)

  }

  function limparCampos(){
      setNome('');
      setCpf('');
      setSus('');
      setEmail('');
      setSenha('');
      setId('0');
    }

    function mensagemDuplicidade(){
      alert('Cadastro confirmado');
    }

  return(
    <View>

          <View style={estilos.navbar}>
                <Text style={estilos.textonavbar}>Lista de Pacientes</Text>
                <TouchableOpacity style={estilos.botao} onPress={() => setAbrir(true)}>
                  <Ionicons name='ios-add' size={30} color="#fff"></Ionicons>
                </TouchableOpacity>
          </View>

            <ScrollView>
              <View style={estilos.grid}>
                {lista.map(item => (
                  <View style={estilos.griditem} key={item.id}>
                    <Text style={{color: '#000'}}>
                      {item.id} - {item.nome} - {item.cpf} - {item.sus} - {item.email}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>

            <Modal transparent={false} visible={abrir}>
              <SafeAreaView style={estilos.modal}>
                <View style={estilos.modalHeader}>
                  <TouchableOpacity onPress={() => setAbrir(false)}>
                    <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={35} color="#296b9b">
                    </Ionicons>
                  </TouchableOpacity>
                  <Text style={estilos.textoModal}> Cadastrar Pacientes</Text>
                </View>
                <TextInput type="text" style={estilos.input} placeholder='Insira um Nome' value={nome} onChangeText={(nome) => setNome(nome)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu CPF' value={cpf} onChangeText={(cpf) => setCpf(cpf)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu Cartão do SUS' value={sus} onChangeText={(sus) => setSus(sus)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu Email' value={email} onChangeText={(email) => setEmail(email)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira sua senha' value={senha} onChangeText={(senha) => setSenha(senha)} secureTextEntry={true}>
                </TextInput>

                <TouchableOpacity style={estilos.botaoModal} onPress={add}>
                  <Text style={estilos.textoBotaoModal}>Salvar</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </Modal>

      </View>
    )
}

const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#e2e9f2'    
  },

  textoModal:{    
    color: '#296b9b',    
    marginLeft: 15,
    fontSize:30, 
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:40,    
  },

  input:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 10,
    color: '#000',
    fontSize:15
  },

  botaoModal:{
    backgroundColor: '#296b9b',
    borderRadius: 5,
    margin: 13,
    padding: 12,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',    
  },

  textoBotaoModal:{
    fontSize:16,
    color:'#FFF',
  },

  navbar:{
    backgroundColor: '#296b9b',
    padding: 12,
    color: '#FFF',
    flexDirection:'row',
    marginTop: 35,
  },

  textonavbar:{
    fontSize:20,
    color:'#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao:{
    position: 'absolute', 
    right: 13,
    marginTop: 11,
  },

  grid:{
    marginTop: 8,    
  },

  griditem:{
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

});