
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
const colors = require('../assest/colors');
class Test1 extends Component {
  render() {
    return (
      <View style={styles.style}>
        <Text>Test 1 </Text>
      </View>
    )

  }
}


class Test2 extends Component {
  render() {
    return (
      <View style={styles.style}>
        <Text>Test2 </Text>
      </View>
    )

  }
}


class Test3 extends Component {
  render() {
    return (
      <View style={styles.style}>
        <Text>Test3 </Text>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center"
  }
})

module.exports = {
  Test3,
  Test2,
  Test1
}