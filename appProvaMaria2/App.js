import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView } from 'react-native';

import axios from 'axios';

import {Ionicons} from '@expo/vector-icons';

export default function App(){
  
  const mensagemDuplicidade = () =>
    Alert.alert(
      "Erro ao Salvar",
      "CPF Já Cadastrado",
      [
        
        { text: "OK", onPress: () => setAbrir(true) }
      ],
      { cancelable: true }
    ); 

  const api = 'http://10.68.36.134/provaMaria/';
  const [lista, setLista] = useState([]);
  const [cpf, setCpf] = useState('');
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  {/* state para tela de cadastro modal */}
  const[abrir, setAbrir] = useState(false);

  useEffect(()=> {
    listarDados();
  },[])

   
  async function listarDados(){
    const res = await axios.get(api + 'listar.php?busca=' + buscar);
    setLista(res.data.result);
   
  }

  async function add(){
    const obj = {cpf, id};

      const res = await axios.post(api + 'add.php', obj);
       if(res.data.success === true){
      
         limparCampos();       
      }

      if(res.data.success === 'CPF já Cadastrado!'){
        mensagemDuplicidade();
        
      }     
    
    
    listarDados();
    setAbrir(false);   
    }
 
  function limparCampos(){
        setCpf(''); 
        setId('0');
  }

  return (
    <View>
    <View style={estilos.navbar}>
      
    <Text style={estilos.textonavbar}>Usuários Cadastrados </Text>      
    
    <TouchableOpacity
      
      style={estilos.botao}
      onPress={ () => setAbrir(true)}
      >
        <Ionicons name="ios-add" size={30} color="#FFF"></Ionicons>
        
      </TouchableOpacity>
    </View>


{/*lista os dados cadastro  */ }
   
    <ScrollView>
    <View style={estilos.grid}>
    
      {lista.map(item => (
        <View style={estilos.griditem} key={item.id}><Text style={{color: '#f8f8f8'}}>{item.id} - {item.cpf} </Text>

                                 
      </View>
     ))}        
    </View>
    </ScrollView>


{/*tela cadastro  */ }
     <Modal    
      transparent={false}
      visible={abrir}
      >
        <SafeAreaView style={estilos.modal}>

          <View style={estilos.modalHeader}>
          <TouchableOpacity
              onPress={ () => setAbrir(false)}
          >
           <Ionicons style={{marginLeft:5, marginRight:5}} name="md-arrow-back" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
        <Text style={estilos.textoModal}>Insira seu CPF</Text>
        </View>


   <TextInput 
      type="text"
      style={estilos.input}
      placeholder="CPF"
      value={cpf}
      onChangeText={ (cpf) => setCpf(cpf)} 
      />

       
      <TouchableOpacity  
      style={estilos.botaoModal}
      onPress={add}
      >
        <Text  style={estilos.textoBotaoModal}>Salvar</Text>
      </TouchableOpacity>


      </SafeAreaView>
      </Modal>

 </View> 
    );
}


const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#5f9ea0'
    
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
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 12,
    padding: 10,
    color: '#000',
    fontSize:14,

  },
  botaoModal:{
    width: 125,
    backgroundColor: '#2f4f4f',
    borderRadius: 5,
    padding: 12,
    margin: 20,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 125,
    
  },
  textoBotaoModal:{
    fontSize: 20,
    color:'#FFF',
  },

  navbar:{
    backgroundColor: '#2f4f4f',
    padding: 13,
    color: '#FFF',
    flexDirection:'row',
    marginTop: 35,

  },

  textonavbar:{
    fontSize: 23,
    color:'#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao:{
    position: 'absolute', 
    right: 16,
    marginTop:20,
  },


  grid:{
    marginTop: 8,
    backgroundColor: '#5f9ea0',
    color: '#fff'
  },

  griditem:{
    padding: 11,
    borderBottomColor: "#fff",
    color: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,   
  },

});