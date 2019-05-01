import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Vibration} from 'react-native'

export default class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //starts at focusing and changes between focus-relax when counter reaches zero
      focusing: true,
      title: 'Focusing!',
      count: this.props.focus,// * 60, TODO
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.decrementCount, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === 0) {
      prevState.focusing
      ? this.toggleRelax()
      : this.toggleFocus()
      //this.refreshCounter()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  decrementCount = () => {
    this.setState((prevState) => ({count: prevState.count - 1}))
  }

  toggleFocus = () => {
    this.setState(prevState =>({
      count: this.props.focus, 
      focusing: true, 
      title: 'Focusing!',}),
    Vibration.vibrate([500, 500, 500]))
  }

  toggleRelax = () => {
    this.setState(prevState =>({
      count: this.props.relax, 
      focusing: false,
      title: 'Relaxing..',}),
    Vibration.vibrate([500, 500, 500]))
  }

  render() {
    return (
      <View>
        <Text style={styles.displayTitle}>{this.state.title}</Text>
        <Display display={this.state.count} />
      </View> 
    )
  }
}

const Display = ({display}) => {
  let sec = display % 60
  let min = (display - sec) / 60
  if (sec < 10) {sec = '0' + sec}
  if (min < 10) {min = '0' + min}
  return (
    <Text style={styles.display}>
      {min + ':' + sec}
    </Text>)
}

const styles = StyleSheet.create({
  display: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 48,
    paddingTop: 10,
    paddingBottom: 10,
  },
  displayTitle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 24,
  },
})