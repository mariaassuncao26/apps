import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native';

export default class App extends Component {

  constructor(props){
      super(props);
      this.state ={
        nome: '',
        input: '',
        idade: '',
        input2: '',
        telefone: '',
        input3: '',
        email: '',
        input4: '',
      };
    this.mostraDados = this.mostraDados.bind(this);
  }

  mostraDados(){
    if(this.state.input == '' || this.state.input2 == '' || this.state.input3 == '' || this.state.input4 == '')
    {
      alert('Preencha todos os campos!');
      return;
    }
    this.setState({nome: 'Nome: '+ this.state.input})
    this.setState({idade:' \nIdade: ' + this.state.input2})
    this.setState({telefone:' \nTelefone: ' + this.state.input3})
    this.setState({email:' \nE-mail: ' + this.state.input4})
  }

render(){
  return (
    <View style={styles.container}>

      <Text style={styles.textotitle}>Nome: </Text>
      <TextInput style={styles.input} placeholder="Digite o seu nome:" onChangeText={(texto) => this.setState({input: texto})}></TextInput>

      <Text style={styles.textotitle}>Idade: </Text>
      <TextInput style={styles.input} placeholder="Digite a sua idade:" onChangeText={(texto) => this.setState({input2: texto})}></TextInput>
      
      <Text style={styles.textotitle}>Telefone: </Text>
      <TextInput style={styles.input} placeholder="Digite o seu telefone:" onChangeText={(texto) => this.setState({input3: texto})}></TextInput>
      
      <Text style={styles.textotitle}>E-mail: </Text>
      <TextInput style={styles.input} placeholder="Digite o seu e-mail:" onChangeText={(texto) => this.setState({input4: texto})}></TextInput>
    
      <TouchableOpacity style={styles.botao} title="Mostrar Dados" onPress={this.mostraDados}>
          <Text style={styles.textobotao}>Cadastrar</Text>
      </TouchableOpacity>
    
      <Text style={styles.texto} >
          {this.state.nome}
          {this.state.idade}
          {this.state.telefone}
          {this.state.email}
      </Text>

    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3e4df',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    height: 45,
    margin: 10,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#61aca5',
    borderWidth: 1,
    borderRadius: 5
  },

  texto:{
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },

  botao:{
    backgroundColor: '#92d4ce',
    borderRadius: 70,
    height: 45,
    justifyContent: 'center',
    borderColor: '#61aca5',
    borderWidth: 1,
    width: 117,
    margin: 20,
  },

  textobotao:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },

  textotitle:{
    fontSize: 20,
  }
});
