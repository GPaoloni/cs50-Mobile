import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/Components/MainScreen.js'
import {Constants} from 'expo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
