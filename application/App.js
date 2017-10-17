/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
   constructor(props){
      super(props)
      this.state ={
        state1: "Something else", 
        state2:"Something else two"
      }

      this.changeState =  this.changeState.bind(this)
   }
   changeState(){
     this.setState(previous => {
        return {state1:"This just changed"}
     })
   }
  render() {
   
    return (
        
      <View >
            <Button onPress={this.changeState} title="Change State" />
            <Text>{`${this.state.state1}`}</Text>
            <Text>{`${this.state.state2}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d5b6b',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#3e24b5'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
