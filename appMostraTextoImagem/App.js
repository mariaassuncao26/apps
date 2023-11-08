import { StyleSheet, Text, View, Image } from 'react-native';
import logooff from './assets/logo.png';
import Topo from './source/tela/Topo';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo></Topo>
      <Text style={styles.autor}>Douglas Adams</Text>
      
      <View style={styles.frase}>
         <Image style={styles.logooff} source={logooff}></Image>
         <Text style={styles.fraseefeito}>Não entre em pânico e não esqueça sua toalha!</Text>
      </View>

      <Text style={styles.desc}>Segundos antes de a Terra ser destruída, Arthur Dent é salvo por Ford Prefect, um E.T. que fazia pesquisa para a nova edição de O Guia do Mochileiro das Galáxias. Pegando carona numa nave alienígena, os dois dão início a uma alucinante viagem pelo tempo e pelo espaço.</Text>

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

  trilhas:{
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 55,
    textAlign: 'center',
    color: '#af0345'  
  },

  autor:{
    color: '#Ab0',
    fontWeight: 'bold',
    fontSize: 25,
    top: 30,
    textAlign: 'center'
  },

  fraseefeito:{
    color: '#aa3',
    fontSize: 18,
    marginLeft: -20,
    top: 20,
    fontWeight: 'bold',
    padding: 20
  },

  desc:{
    padding: 20,
    color: '#03ad',
    fontSize: 17,
    fontStyle: 'italic',
  },

  frase:{
    flexDirection: 'row',
    padding: 20,
  },

  logooff:{
    width: 80,
    height: 80,
    marginLeft: 30,
  }
});
