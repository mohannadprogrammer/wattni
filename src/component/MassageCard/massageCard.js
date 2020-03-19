import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from "native-base"
function Operation(show) {
  if (show) {
    return (
      <TouchableOpacity style={styles.delete}>
        <Icon name="trashcan" type="Octicons" style={{ color: colors.box_backgroud, padding: 4, fontSize: 30 }} />
      </TouchableOpacity>
    )
  } else {
    return (null)
  }
}
function Title(title,show) {
  if (!show) {
    return (
      <View style={styles.position}>
        <Text style={{ color: colors.box_backgroud, fontSize: 20 }}>{title}</Text>
      </View>
    )
  } else {
    return (null)
  }
}


export default class MassageCard extends Component {
  render() {
    return (
      <View style={styles.box}>
        {Title(this.props.title,this.props.Operation)}
        {this.props.children}
        {Operation(this.props.Operation)}
      </View>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  box: {
    flex:1,
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
  delete: {
    position: "absolute",
    height: 40,
    width: 50,
    bottom: 0,
    left: 0,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.green_color2
  }
});
