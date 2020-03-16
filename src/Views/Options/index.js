import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={styles.card}>
          <TouchableOpacity style={styles.option}>
              <Text style={styles.text}>تعديل الملف الشخصي </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
              <Text style={styles.text}>تواصل معنا </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
              <Text style={styles.text}>شارك تطبيقك</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
              <Text style={styles.text}>English</Text>
          </TouchableOpacity>

      </View>
    )
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

    card:{
        backgroundColor:colors.box_backgroud,
        width:300,
        top:40,
        padding:10,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"space-between",

        borderWidth:2,
        borderColor:colors.green_color,
        borderRadius:20

        
    },
    option:{
        margin:10,
        paddingHorizontal:10,
        backgroundColor:colors.green_color2,
        width:280,
        height:50,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        color:colors.box_backgroud
        

    },
    text:{
        color:colors.box_backgroud ,
        fontSize:20
    }
})
