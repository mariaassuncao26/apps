import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native'

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
      setCpf(res.data.cpf);
      setSus(res.data.sus);
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
      const obj = {nome, cpf, sus, email, senha, id};

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
      setCpf('');
      setSus('');
      setEmail('');
      setSenha('');
      setId('0');
    }

  return(
    <View>

            <View style={estilos.navbar}>
                <Text style={estilos.textonavbar}>Lista de Pacientes</Text>
                <TouchableOpacity style={estilos.botao} onPress={() => setAbrir(true)}>
                  <Ionicons name='ios-add' size={30} color="#fff">
                  </Ionicons>
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
                      {item.id} - {item.nome} - {item.cpf} - {item.sus} - {item.email}
                    </Text>
                    <TouchableOpacity style={estilos.gridbotaoEditar} onPress={() => getItem(item.id)}>
                      <Ionicons name="ios-create" size={30} color="#66CDAA">
                      </Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.gridbotaoExcluir} onPress={() => mensagemDelete(item.id)}>
                      <Ionicons name="ios-trash" size={30} color="#696969"></Ionicons>
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
                  <Text style={estilos.textoModal}>Cadastrar Pacientes</Text>
                </View>
                <TextInput type="text" style={estilos.input} placeholder='Insira um Nome' value={nome} onChangeText={(nome) => setNome(nome)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu CPF' value={cpf} onChangeText={(cpf) => setCpf(cpf)}>
                </TextInput>

                <TextInput type="text" style={estilos.input} placeholder='Insira seu cartão do SUS' value={sus} onChangeText={(sus) => setSus(sus)}>
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
    backgroundColor:'#008080'    
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
    backgroundColor: '#2F4F4F',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',    
  },

  textoBotaoModal:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFF',
  },

  navbar:{
    backgroundColor: '#50b9e1',
    padding: 12,
    color: '#FFF',
    flexDirection:'row',
    marginTop: 35,
  },

  textonavbar:{
    fontSize:20,
    color:'#FFF',
    fontWeight: 'bold',
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