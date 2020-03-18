import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image} from 'react-native'
import {

} from '../component'
import { RadioButton } from 'react-native-paper';
// import { from } from 'rxjs'
export default class test extends Component {
  render() {
    const checked = true
    return (
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }} style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', borderBottomColor: '#cccccc', borderBottomWidth: 1, width: '100%' }}>
          <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
            <RadioButton
              color="green"
              uncheckedColor="#797979"
              value="mada"
              status={checked === 'mada' ? 'checked' : 'unchecked'}
            // onPress={() => { this.setState({ checked: 'mada', radioValue: 2 }); }}
            />
            <Text style={{ fontFamily: 'ElMessiri-Regular', color: '#a3a3a3', fontSize: 14, marginRight: 5, marginTop: 10 }}>البطاقات الإئتمانية ( مدى )</Text>
          </View>
          <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
            <Image resizeMode='contain' source={require('../image/footer.png')}
              style={{ width: 60, height: 30, margin: 5 }} /></View>
        </TouchableOpacity>

        {/*****************************************/}

        {/* {/**************ty> */}
      </View>

    )
  }
}
