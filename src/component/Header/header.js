import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Badge
} from 'native-base';

export default class HeaderView extends Component {
  render() {
    return (
      <View>
        <Header
         androidStatusBarColor={colors.green_color2} 
         style={styles.header}>
          <Left style={{ flex: 1 }}>
            <Button transparent
             onPress ={this.props.action}
            >
              <Icon name="cart"
               
              />
              <Badge danger style={{ padding:5 , alignItems:'center', justifyContent:"center" ,borderRadius:10}}>
    <Text style={{color:colors.box_backgroud, textAlign:"center" , fontSize:13}}>{this.props.cartContentNumber}</Text>
              </Badge>
            </Button>
          </Left>
          <Body style={{}}>

            <Title style={styles.headerTitle}>تطبيق مياه وطني</Title>
            <Title style={styles.headerTitle}>

              {this.props.name}
            </Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.green_color2,
    height: 70
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Cairo',
    flex: 1,
    width: '200%',
    paddingTop: 10,
  },
  Left: {
    flex: 1,
  },
  Body: {
    flex: 1,
  },
});
