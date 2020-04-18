import React from "react"

import {
  StyleSheet,
  Image,
  StatusBar,
  View,
  Text
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Test from '../Views/test'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Chart(props) {

  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name="main" component={Test.Test1} />
    </Stack.Navigator>
  )
}
function MainStack(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >

        <Stack.Screen name="navigation" component={MainNavigation} />


      </Stack.Navigator>
    </NavigationContainer>

  )
}

function MainNavigation(props) {
  return (

    <Tab.Navigator

      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     if (route.name == "المنتجات")
      //       return <Image source={require('../image/mainBottomicons/product.png')} style={{ flex: 1 }} resizeMode="contain"></Image>
      //     else if (route.name === "العروض")
      //       return <Image source={require('../image/mainBottomicons/offers.png')} style={{ flex: 1 }} resizeMode="contain"></Image>
      //     else if (route.name === "الطلبات")
      //       return <Image source={require('../image/mainBottomicons/orders.png')} style={{ flex: 1 }} resizeMode="contain"></Image>
      //     else if (route.name === "المزيد")
      //       return <Image source={require('../image/mainBottomicons/more.png')} style={{ flex: 1 }} resizeMode="contain"></Image>
      //     else

      //       return <Icon name="home" size={size} color={color} />;
      //   },
      //   tabBarLabel: () => (<View>
      //     <Text style={{ color: colors.currance }}>{route.name}</Text>
      //   </View>),

      // })}

      // initialRouteName="المنتجات"
      tabBarOptions={{
        inactiveTintColor: '#fff',
        activeTintColor: "#fff",
        drawBehind: true,

        tabStyle: {
          backgroundColor: colors.green_color2,
          borderLeftColor: "#fff",
          borderLeftWidth: 1,
        },


      }}
    >
      <Tab.Screen name="test2" component={Test.Test2} />
      <Tab.Screen name="Test3" component={Test.Test3} />
      <Tab.Screen name="Test1" component={Chart} />

    </Tab.Navigator>

  );
}

const colors = require("../assest/colors")
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green_color2,
    justifyContent: 'space-around',
  }
})
export default MainStack;