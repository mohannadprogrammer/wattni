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
                  image:"../image/footer.png"
              },
              {
                  key:"1",
                  title:"nihs",
                  image:"../image/footer.png"
            },{
                  key:"1",
                  title:"nihs",
                  image:"../image/footer.png"
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
       onDone={()=>this.props.navigation.navigate("navigation")} />
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        width:Dimensions.get('screen').width,
        height:Dimensions.get("screen").height,
        // backgroundColor:"black"
    },
    text:{
        color:"#0bb7b0",
        fontSize:30,
    }
})
