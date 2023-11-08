import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props){
      super(props);
      this.state ={
        nome: '',
        input: '',
        email: '',
        input2: '',
      };
    this.mostraMsg = this.mostraMsg.bind(this);
  }

  mostraMsg(){
    if(this.state.input == '' || this.state.input2 == '')
    {
      alert('Preencha todos os campos!');
      return;
    }
    this.setState({nome: 'Seja Bem Vindo(a) ' + this.state.input + " \nE-mail: " + this.state.input2})
  }

  render(){
  return (
    <View style={styles.container}>

        <Text style={styles.textotitle}>Nome: </Text>
        <TextInput style={styles.input} placeholder="Digite o seu nome:" onChangeText={(texto) => this.setState({input: texto})}></TextInput>

        <Text style={styles.textotitle}>E-mail: </Text>
        <TextInput style={styles.input} placeholder="Digite o seu email:" onChangeText={(texto) => this.setState({input2: texto})}></TextInput>

        <TouchableOpacity style={styles.botao} title="Mostrar Mensagem" onPress={this.mostraMsg}>
          <Text style={styles.textobotao}>Cadastrar</Text>
        </TouchableOpacity>
        
        <Text style={styles.texto} >
          {this.state.nome}
        </Text>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    height: 45,
    borderWidth: 0.7,
    borderColor: '#000',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },

  texto:{
    textAlign: 'center',
    fontSize: 25,
  },

  botao:{
    backgroundColor: '#9370DB',
    borderRadius: 70,
    height: 35,
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    width: 117,
    margin: 15,
  },

  textobotao:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },

  textotitle:{
    fontSize: 20,
    

  }
});
