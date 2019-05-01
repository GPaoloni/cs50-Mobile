import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  onTextChanged(text) {
    this.setState({value: text})
  }

  render () {
    return (
      <View>
        <TextInput style={styles.numericInput}
        onChangeText = {this.props.onChangeText}
        placeholder={this.props.placeHolder}
        keyboardType = 'numeric'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numericInput: {
    height: 40,
    width: 70,
    padding: 10,
    margin: 10,
    backgroundColor: '#95a5a6',
  },
})
  