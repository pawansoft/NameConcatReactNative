import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Form from './src/component/Form';
import Welcome from './src/component/Welcome';

export default class App extends Component {
  render(){
    return (
      <View>
        <Welcome/>
      </View>
    );
  
  }
  }

const styles = StyleSheet.create({
  
});
