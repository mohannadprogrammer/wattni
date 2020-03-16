import React, { Component } from 'react';
import  { View, Text } from 'react-native';

import {
  Main,
  SocialMedia,
  LanguageSellector,
  SliderView
} from './src/Views'
//import testing View 
import Test from './src/Views/test'

import MAinNavigation from './src/HOC/MainNavigation'
import Order from "./src/Views/Orders"

//state import 
import StateProvider from './StateProvider'
class App extends Component {
  render() {
    return (
      <StateProvider>
           {/* <Main></Main> */}

 {/* <SocialMedia/> */}
 {/* <LanguageSellector/> */}
 {/* <SliderView/> */}
<MAinNavigation/>
 {/* <Order/> */}
      </StateProvider>
      
    );
  }
}

export default App;