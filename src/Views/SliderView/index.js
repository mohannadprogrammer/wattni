import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground , Dimensions} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
export default class SliderView extends Component {
  constructor (props){
      super(props)
      this.state ={
          data:[
              {
                  key:"1",
                  title:"nihs",
                  image:"../image/temp/1.png"
              },
              {
                  key:"2",
                  title:"nihs",
                  image:"../image/temp/2.png"
            },{
                  key:"3",
                  title:"nihs",
                  image:"../image/temp/3.png"
            }
            ]
      }
  }
  _renderItem  =props=>(
         <ImageBackground style={styles.container}  resizeMode="stretch" source={require("../../image/logo.png")}>
           
         </ImageBackground>
  );
  _next =()=>(
    <View >
    <Text style={styles.text}>تخطي</Text>
    </View>
  )
  render() {

    return (
      <AppIntroSlider
       slides={this.state.data} 
       renderItem={this._renderItem} 
       renderDoneButton ={this._next}
       renderNextButton={ this._next}
       activeDotStyle={{backgroundColor:"#2ecc71"}}
       dotStyle={{backgroundColor:colors.green_color2}}
       onDone={()=>this.props.navigation.navigate("navigation")} />
    )
  }
}
const  colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        width:Dimensions.get('screen').width,
        height:Dimensions.get("screen").height,
        // backgroundColor:"black"
    },
    text:{
        color:colors.green_color2,
        fontSize:30,
    }
})
