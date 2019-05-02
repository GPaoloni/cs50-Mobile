import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumericInput from './NumericInput.js'

export default class InputRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.rowContainer}>
          <Text style={styles.text}>{this.props.title}</Text>
          <NumericInput onChangeText={this.props.onChangeText}
            placeHolder={this.props.placeHolder}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  }
})