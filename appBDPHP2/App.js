import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native'

import {Ionicons} from '@expo/vector-icons'
import axios from 'axios';

import * as Animatable from 'react-native-animatable';

export default function App(){
 
  //declarar atributos
  const api='http://10.68.36.134/pam2etim/apireact/';
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  const [abrir, setAbrir] = useState(false);

  const [abrirLogin, setAbrirLogin] = useState(true);

  useEffect(() => {
      login();
      listarDados();
  }, [])


    async function login(){
      const obj = {email, senha};
      const res = await axios.post(api + 'login.php', obj);

      if(res.data.success== "Dados Incorretos!"){
        mensagemDadosIncorretos();
      }
      else{
        setAbrirLogin(false);
      }
    }

    const mensagemDadosIncorretos = () =>
      Alert.alert(
        "Erro ao Logar",
        "Dados Incorretos",
        [
          {text: "OK", onPress:() => setAbrirLogin(true)}
        ],
        {cancelable: true}
      );


    const mensagemDuplicidade = () =>
    Alert.alert(
      "Erro ao salvar",
      "Email já cadastrado",
      [
        {text:"OK", onPress: () => setAbrir(true)}
      ],
      {cancelable: true}
    );

    function mensagemDelete(id){
      Alert.alert(
        "Excluir Registro",
        "Deseja excluir este Registro?",
        [
          {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: 'cancel'
          },
          {text: "Sim", onPress: () => deleteItem(id)}
        ],
        {cancelable: true}
      );
    }

    async function getItem(id){
      const res = await axios.get(api + 'buscarId.php?id=' + id);
      setId(res.data.id);
      setNome(res.data.nome);
      setEmail(res.data.email);
      setSenha(res.data.senha);
      setAbrir(true);
    }


    async function deleteItem(id){
      const res = await axios.get(api + 'excluir.php?id=' + id);
      listarDados();
    }


    function buscarDados(){
      listarDados();
    }


  async function listarDados(){
      const res = await axios.get(api + 'listar.php?busca=' + buscar);
      setLista(res.data.result);
  }

  async function add(){
      const obj = {nome, email, senha, id};

      if(id > 0){
        const res = await axios.post(api + "editar.php", obj);
        if(res.data.success === true){
          limparCampos();
        }
      }
      else{
        const res = await axios.post(api + 'add.php', obj);
        if(res.data.success === true){
          limparCampos();
      }
      }


    if(res.data.success === 'Email já Cadastrado'){
        mensagemDuplicidade();
    }

      listarDados();
      setAbrir(true)

  }

  function limparCampos(){
      setNome('');
      setEmail('');
      setSenha('');
      setId('0');
    }

  return(
    <View>

      <Modal animationType = 'slide' transparent={false} visible={abrirLogin}>
        <SafeAreaView style={estilos.modal}>

          <View style={estilos.modalHeader}>
            <Text style={estilos.textoModal}> Faça seu Login </Text>
          </View>

          <Animatable.View animation="bounceInUp" useNativeDriver>

            <TextInput type="email" style={estilos.input} placeholder='Insira seu e-mail' value={email} onChangeText={(email) => setEmail(email)}>
            </TextInput>

            <TextInput secureTextEntry={true} type="senha" style={estilos.input} placeholder='Insira sua senha' value={senha} onChangeText={(senha) => setSenha(senha)}>
            </TextInput>

            <TouchableOpacity style={estilos.botaoModal} onPress={login}>
              <Text style={estilos.botaoModal}> Login </Text>
            </TouchableOpacity>

          </Animatable.View>

        </SafeAreaView>
      </Modal>

            <View style={estilos.navbar}>
                <Text style={estilos.textonavbar}>Lista de Usuários</Text>
                <TouchableOpacity style={estilos.botao} onPress={() => setAbrir(true)}>
                  <Ionicons name='ios-add' size={30} color="#fff"></Ionicons>
                </TouchableOpacity>
          </View>

          <View style={estilos.ViewinputBuscar}>
            <TextInput style={estilos.inputBuscar} placeholder='Buscar pelo Nome' value={buscar} onChangeText={(buscar) => setBuscar(buscar)} onChange={buscarDados()}>
            </TextInput>
            <Ionicons style={estilos.iconeBuscar} name='ios-search' size={25} color="#4b4a49"></Ionicons>
          </View>

            <ScrollView>
              <View style={estilos.grid}>
                {lista.map(item => (
                  <View style={estilos.griditem} key={item.id}>
                    <Text style={{color: '#585858'}}>
                      {item.id} - {item.nome} - {item.email}
                    </Text>
                    <TouchableOpacity style={estilos.gridbotaoEditar} onPress={() => getItem(item.id)}>
                      <Ionicons name="ios-create" size={30} color="#50b9e1"></Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.gridbotaoExcluir} onPress={() => mensagemDelete(item.id)}>
                      <Ionicons name="ios-trash" size={30} color="#e15f50"></Ionicons>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>

            <Modal transparent={false} visible={abrir}>
              <SafeAreaView style={estilos.modal}>
                <View style={estilos.modalHeader}>
                  <TouchableOpacity onPress={() => setAbrir(false)}>
                    <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={35} color="#fff">
                    </Ionicons>
                  </TouchableOpacity>
                  <Text style={estilos.textoModal}>Inserir Usuário</Text>
                </View>
                <TextInput type="text" style={estilos.input} placeholder='Insira um Nome' value={nome} onChangeText={(nome) => setNome(nome)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu E-mail' value={email} onChangeText={(email) => setEmail(email)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira a Senha' value={senha} onChangeText={(senha) => setSenha(senha)} secureTextEntry={true}>
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
    backgroundColor:'#b2b2b2'    
  },

  textoModal:{    
    color: '#FFF',    
    marginLeft: 15,
    fontSize:25,      
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:30,    
  },

  input:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize:13
  },

  botaoModal:{
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
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
    backgroundColor: '#00335c',
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

  gridbotaoEditar:{
    position: 'absolute',
    right:40,
    color:'#5c7ef6',
  },

  gridbotaoExcluir:{
    position: 'absolute',
    right:15,
    color:'#cc1414',
  },

  inputBuscar:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize:15,
    borderBottomColor: "#767676",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width:'100%',
    position:'relative',    
  },

  ViewinputBuscar:{
    flexDirection:'row',
  },

  iconeBuscar:{
   position:'absolute',
   right:20,
   top: 15,
  },

});