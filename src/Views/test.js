
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native'
// import { ViewPager } from 'rn-viewpager'

// import StepIndicator from 'react-native-step-indicator'
import Icon from 'react-native-vector-icons'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']
import StepIndicator from 'react-native-step-indicator';

const labels = ["تم تسليم الطلب", "تم شحن الطلب", "تم تاكيد الطلب", "تم انشاء الطلب"];

const colors = require('../assest/colors');
const customStyles = {
  
  stepIndicatorSize: 60,
  currentStepIndicatorSize: 60,
  separatorStrokeWidth: 2,
  // separatorStrokeStyle: "dash",
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.green_color,
  // currentStepIndicatorLabelFontSize: 23,
  stepIndicatorLabelCurrentColor: colors.green_color2,
  stepIndicatorCurrentColor: colors.green_color2,
  
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colors.green_color2,
  stepStrokeUnFinishedColor: colors.green_color,
  separatorFinishedColor: '#aaaaaa',
  separatorUnFinishedColor: colors.green_color,
  stepIndicatorFinishedColor:colors.box_backgroud,
  stepIndicatorUnFinishedColor:colors.green_color2,
  stepIndicatorLabelFontSize: 23,
  stepIndicatorLabelFinishedColor: colors.green_color2,
  stepIndicatorLabelUnFinishedColor: colors.green_color2,
  labelColor: '#999999',
  labelSize: 16,
  currentStepLabelColor: colors.green_color2
}
export default class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 2
    }
  }

  render() {
    return (
      <StepIndicator

        renderStepIndicator={this.renderStepIndicator}
        // customStyles={secondIndicatorStyles}
        // currentPosition={this.state.currentPage}
        stepCount={4}
        currentPosition={this.state.currentPosition}
        onPress={this.onStepPress}
        customStyles={customStyles}
        //  renderStepIndicator="sdkjfkjsd"
        // //  renderStepIndicator={this.renderStepIndicator}
        //  currentPosition={this.state.currentPosition}
        labels={labels}
      />
    )

  }
  renderStepIndicator = params => {
    console.log(params);
    return (
      <View style={{ flex: 1, alignSelf: "center" }}>
        <Image style={{ alignSelf: "center" }} source={require('../image/logo.png')} resizeMode="cover" style={{ height: 50, width: 50 }} />
        {/* <Icon name="rocket" tyl size={30} color="#900" /> */}

        {/* <Text>klskdflskd</Text> */}

      </View>
    )
  }

  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    )
  }
  // renderStepIndicator (){
  //   return (<Icon name ="cart"/>)
  // }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

}
