import React from "react"

import {
  StyleSheet,
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Views ,{
  Main,
  SocialMedia,
  LanguageSellector,
  Registration,
  ConfirmationDetector,
  Offers,
  Options,
  Orders,
  Cart,
  CallCenter,
  Payment,
  SliderView,
  OrderState,
  LocationDetector
}  from "../Views"
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
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="orderState" component={Views.OrderState} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="callcenter" component={CallCenter} />
        <Stack.Screen name="chart" component={Cart} />
        <Stack.Screen name="regist" component={Registration} />
        <Stack.Screen name="confirm" component={ConfirmationDetector} />



      </Stack.Navigator>
    )
}
function MainStack (props){
  // console.log(props);

    return (
    <NavigationContainer>

      <Stack.Navigator
        headerMode="none"
        
      >
        {/* <Stack.Screen name="social" component={SocialMedia} /> */}

        {/* <Stack.Screen name="language" component={Payment} /> */}
        {/* <Stack.Screen name="language" component={LanguageSellector} /> */}
        {/* <Stack.Screen name="language" component={Views.OrderState} /> */}
        {/* <Stack.Screen name="map" component={Views.LocationDetector} /> */}
        <Stack.Screen name="navigatio7n" component={MainNavigation} />

        {/* <Stack.Screen name="regist2" component={Registration} /> */}

        <Stack.Screen name="map" component={Test} />
        <Stack.Screen name="slider" component={SliderView} />

        <Stack.Screen name="navigation" component={MainNavigation} />


      </Stack.Navigator>
    </NavigationContainer>

    )
}

function MainNavigation(props) {
  return (
      
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