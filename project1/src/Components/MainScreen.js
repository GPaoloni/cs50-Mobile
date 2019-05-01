import React from 'react';
import { StyleSheet, View} from 'react-native';
import Counter from './Counter.js'
import Button from './Button.js'
import InputRow from './InputRow.js'

export default class MainScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      counting: false,
      focus: 25,
      relax: 5,
    }
  }

  toggleCounter = () => {
    this.setState(prevState => ({counting: !prevState.counting}))
  }

  focusChanged = (text) => {
    this.setState({focus: text})
  }

  relaxChanged = (text) => {
    this.setState({relax: text})
  }

  handleRender = () => {
    if (this.state.counting) {
      return(
        <View style={styles.container}>
          <Counter focus={this.state.focus} relax={this.state.relax} />
          <Button onPress={this.toggleCounter} children={"stop"} />
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <View>
            <InputRow title="focus time" onChangeText={this.focusChanged}
              placeHolder="25"/>
            <InputRow title="relax time " onChangeText={this.relaxChanged}
              placeHolder="5"/>
          </View>
          <Button onPress={this.toggleCounter} children={"start"} />
        </View>
      )
    }
  }

  render() {
    return(
    <View>{this.handleRender()}</View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
