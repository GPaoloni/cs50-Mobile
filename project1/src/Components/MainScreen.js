import React from 'react';
import { StyleSheet, View} from 'react-native';
import Counter from './Counter.js'
import Button from './Button.js'
import InputRow from './InputRow.js'

const initialValues = {
  counting: false,
  focus: 25,
  relax: 5,
  pause: false,
}

export default class MainScreen extends React.Component {
  constructor() {
    super()
    this.state = initialValues
  }

  toggleCounter = () => {
    if (this.state.counting) {
      this.setState(() => initialValues)
    } else {
      this.setState(prevState => ({counting: !prevState.counting}))
    }
  }

  pauseUnpause = () => {
    this.setState(prevState => ({pause: !prevState.pause}))
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
          <Counter focus={this.state.focus} relax={this.state.relax} 
            pause={this.state.pause} />
          <View style={styles.buttonRow}>
            <PauseButton onPress={this.pauseUnpause} pause={this.state.pause} />
            <Button onPress={this.toggleCounter} children={"stop"} />
          </View>
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

const PauseButton = ({onPress, pause}) => {
  if (pause) {
    return <Button onPress={onPress} children={"play"} />
  } else {
    return <Button onPress={onPress} children={"pause"} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
