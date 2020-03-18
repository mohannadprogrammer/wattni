import React from "react"

import {
    StyleSheet, Text
} from 'react-native'

// import {NavigationContainer} from "@react-navigation/native"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Screen from '../../HOC/Screen'

function Orders(props) {
    console.log(props)
    return (
        <Screen
        callBack ={()=>{
            props.navigation.navigate("chart");
        }}
        >
            <Tab.Navigator
                // style={{
                //     color: colors.green_color2,
                //     backgroundColor: colors.gray
                // }}

                tabBarOptions={{
                    activeTintColor: colors.green_color2,
                    inactiveTintColor: colors.green_color2,

                    style: {
                        backgroundColor: colors.black_gray,
                        borderColor: colors.green_color2,
                    },
                    activeTintColor: colors.green_color2,
                }
                }
                initialRouteName="الطلبات الحالية"
            >
                <Tab.Screen name="الطلبات المفضلة" component={Text} />
                <Tab.Screen name="الطلبات السابقة" component={Text} />
                <Tab.Screen name="الطلبات الحالية" component={Text} />
            </Tab.Navigator>


        </Screen>
    );
}

const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green_color2,
        justifyContent: 'space-around',
    }
})
export default Orders;