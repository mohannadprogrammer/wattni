import React from "react"

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  Header

} from "react-native-elements";
import {
  Main,
  Registration,
  ConfirmationDetector,
  Offers,
  Options,
  Orders
} from "../Views"
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={{
          backgroundColor: '#25a96f',
          justifyContent: 'space-around',
        }}
        leftComponent={<Icon
          name='cartshopping'
          color='#fff' />}
        centerComponent={<View>
          <Text>تطبيق وطني</Text>
          <Text>الز~يسية</Text>
        </View>}
        centerComponent={{ text: 'تطبيق skdlkfsl وطني', style: { color: '#fff' } }}
      />
      <Tab.Navigator
        style={{

          backgroundColor: '#25a96f',

        }}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            // You can return any component that you like here!
            return <Icon name="home" size={size} color={color} />;
          },
        })}
        initialRouteName="المنتجات"
        tabBarOptions={{
          activeTintColor: 'region',
          inactiveTintColor: '#fff',
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
        <Tab.Screen name="المنتجات" component={Main} />
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