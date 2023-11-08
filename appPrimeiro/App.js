import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  render(){
  return (
    <View>
      <View style={styles.container}>
        
        <View style={styles.redbox}>
        </View>

        <View style={styles.bluebox}>
        </View>

        <View style={styles.blackbox}>
        </View>

      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'gray',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 600
  },

  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },

  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  }, 

  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  } 
});
