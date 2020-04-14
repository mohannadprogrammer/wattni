import React, { Component } from 'react'
import {
    Text
    , StyleSheet
    , View
    , ScrollView
    , TouchableOpacity,
    Image,
} from 'react-native'

import Screen from '../../HOC/Screen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    OrderOps,
    OrderMassage,
    Button
} from '../../component'
import StepIndicator from 'react-native-step-indicator';

const labels = ["تم تسليم الطلب", "تم شحن الطلب", "تم تاكيد الطلب", "تم انشاء الطلب"];
const colors = require('../../assest/colors')

// const colors = require('../assest/colors');
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

    separatorStrokeStyle: 'dashed',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.green_color2,
    stepStrokeUnFinishedColor: colors.green_color,
    separatorFinishedColor: '#aaaaaa',
    separatorUnFinishedColor: colors.green_color,
    stepIndicatorFinishedColor: colors.box_backgroud,
    stepIndicatorUnFinishedColor: colors.green_color2,
    stepIndicatorLabelFontSize: 23,
    stepIndicatorLabelFinishedColor: colors.green_color2,
    stepIndicatorLabelUnFinishedColor: colors.green_color2,
    labelColor: '#999999',
    labelSize: 16,
    currentStepLabelColor: colors.green_color2
}

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 2
        }
    }
    render() {
        const checked = true

        return (
            <Screen
                name="تفاصيل الطلب"
                callBack={() => {
                    this.props.navigation.navigate("chart");
                }}
            >
                <ScrollView style={styles.body}>
                    <View style={styles.wrapper}>
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
                        <OrderOps
                            title="تفاصيل الطلب"
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>

                        </OrderOps>
                        <OrderMassage
                            title="مبروك"
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View><View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>

                        </OrderMassage>

                        <Button
                            name="عودة الى الرئسية">

                        </Button>

                    </View>
                </ScrollView>
            </Screen>
        )
    }
    renderStepIndicator = params => {
        console.log(params);
        let images = [
            require("../../image/ordreState/dilevry.png"),
            require("../../image/ordreState/save.png"),
            require("../../image/ordreState/Confirm.png"),

            require("../../image/ordreState/create.png"),

        ]
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={images[params.position]} resizeMode="center" style={{ height: 50, width: 50 }} />
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
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        height: '100%',
        width: '100%',
    }, wrapper: {
        flex: 1,
        margin: 20,
    },
})

{/*  */ }