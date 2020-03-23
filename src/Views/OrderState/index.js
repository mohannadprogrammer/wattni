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
export default class index extends Component {
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
                        {/* <View style={{ flex: 1 }}> */}
                        <ProgressSteps
                            progressBarColor={colors.green_color2}
                            borderStyle="none"
                            borderWidth={2}

                            borderStyle="dash"
                        >
                            <ProgressStep

                                // nextBtnStyle={{ display: "none" }}
                                // previousBtnStyle={{ display: "none" }}
                                label="First Step"
                            >
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
                                    title="تقييم الطلب "
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
                                {/* <View style={{ alignItems: 'center' }}>
                                        
                                    </View> */}
                            </ProgressStep>
                            <ProgressStep label="Second Step">
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 2!</Text>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="Third Step">
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 3!</Text>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="four Step">
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
                                    
                            </ProgressStep>
                        </ProgressSteps>
                        <View style={{flex:1 ,contant:1 ,width:"100%", height :"100%",backgroundColor:"red"}}>
                                    <Text>skldfasd</Text>
</View>
                        {/* <CustomPrograss>
                                <Step
                                    name ="skks"
                                >

                                </Step>
                                <Step
                                    name ="skks"
                                >

                                </Step>
                            </CustomPrograss> */}
                        {/* </View> */}
                    </View>
                </ScrollView>
            </Screen>
        )
    }
}
const colors = require('../../assest/colors')
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        height: '100%',
        width: '100%',
    }, wrapper: {
        flex: 1,
        width: "100%",
        // justifyContent: 'space-around',

        alignItems: 'flex-start',
        // padding: 25,
    },
})
