import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.customButton}
        onPress={this.props.onClick}
      >
                        <Text style={{color:colors.box_backgroud ,fontSize:20}}>
        {this.props.name}

                        </Text>
      </TouchableOpacity>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  customButton: {
    flex:1,
    backgroundColor: colors.green_color2,
    padding: 20,
    marginVertical:20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '43%',
  },
});
