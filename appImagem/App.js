import { StyleSheet, Text, View, Image } from 'react-native';
import logooff from './assets/logo.png';
import Topo from './source/tela/Topo';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo></Topo>
      <Text style={styles.trilhas}>Trilhas</Text>
      <Text style={styles.roteiro}>Roteiros</Text>
      
      <View style={styles.lugares}>
         <Image style={styles.logooff} source={logooff}></Image>
         <Text style={styles.lugarestrilhas}>Lugares e Trilhas Off-Road</Text>
      </View>

      <Text style={styles.desc}>Desbravar e se Aventurar em trilhas Off-Road</Text>

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

  roteiro:{
    color: '#Ab0',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },

  lugarestrilhas:{
    color: '#aa3',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 20,
    fontWeight: 'bold',
    padding: 20
  },

  desc:{
    color: '#03ad',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingVertical: 10
  },

  lugares:{
    flexDirection: 'row',
    padding: 20,
  },

  logooff:{
    width: 80,
    height: 80,
    marginLeft: 30,
  }
});
