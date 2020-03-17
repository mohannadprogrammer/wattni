import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MassageCard extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.position}>
          <Text>{this.props.title}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: colors.green_color2,
    padding: 20,
    width: '100%',
    paddingTop: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  position: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: "center",
    height: 30,
    // width: 50,
    paddingHorizontal: 20,
    backgroundColor: colors.green_color2,
    borderBottomRightRadius: 10,
  },
});
