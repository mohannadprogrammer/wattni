import React from "react"

import {
  StyleSheet,
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  Main,
  Registration,
  ConfirmationDetector,
  Offers,
  Options,
  Orders,
  Cart,
  CallCenter,
  Payment
} from "../Views"
import Test from '../Views/test'
import Icon from 'react-native-vector-icons/FontAwesome'

import Screen from '../HOC/Screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Chart (props){
  // console.log(props);

    return (
      <Stack.Navigator
        headerMode="none"
        
      >

        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="callcenter" component={CallCenter} />
        <Stack.Screen name="chart" component={Cart} />

        <Stack.Screen name="المنتجات" component={Main} />


      </Stack.Navigator>
    )
}

function MainNavigation(props) {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        style={{

          backgroundColor: colors.green_color2,

        }}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            // You can return any component that you like here!
            return <Icon name="home" size={size} color={color} />;
          },
        })}
        initialRouteName="المنتجات"
        tabBarOptions={{
          inactiveTintColor: '#fff',
          activeTintColor:"black",
          tabStyle: {
            backgroundColor: "#25a96f",
            borderLeftColor: "#fff",
            borderLeftWidth: 1
          },


        }}
      >
        <Tab.Screen name="المزيد" component={Options} />
        <Tab.Screen name="الطلبات" component={Orders} />
        <Tab.Screen name="العروض" component={Offers} />
        <Tab.Screen name="المنتجات" component={Chart} />
        
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const colors = require("../assest/colors")
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_color2,
    justifyContent: 'space-around',
  }
})
export default MainNavigation;