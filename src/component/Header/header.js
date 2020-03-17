import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

export default class HeaderView extends Component {
  render() {
    return (
      <View>
        <Header androidStatusBarColor={colors.green_color2} style={styles.header}>
          <Left style={{flex: 1}}>
            <Button transparent>
              <Icon name="cart" onPress={()=>this.props.navigation.navigate("chart")} />
            </Button>
          </Left>
          <Body style={{flex: 1, alignSelf: 'center'}}>
            <Title style={styles.headerTitle}>تطبيق مياه وطني</Title>
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
