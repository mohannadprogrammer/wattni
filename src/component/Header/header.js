import React, { Component } from 'react';
import { Text, View, StyleSheet , ImageBackground} from 'react-native';
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
      <View style={{flex:0 , flexDirection:"row"}}>
        <ImageBackground
          source={require("../../image/headerBackground.png")}
          androidStatusBarColor={colors.green_color2}
          style={styles.header}>
          <Left style={styles.Left}>
            <Button transparent
              onPress={this.props.action}
            >
              <Icon name="cart"
                  style={{fontSize:40, color:colors.box_backgroud}}
              />
              <Badge danger style={{ padding: 5, alignItems: 'center', justifyContent: "center", borderRadius: 10 ,left:-22, top:-22}}>
                <Text style={{ color: colors.box_backgroud, textAlign: "center", fontSize: 13 }}>{this.props.cartContentNumber}</Text>
              </Badge>
            </Button>
          </Left>
          <Body style={styles.Body}>

            <Title style={styles.headerTitle}>تطبيق مياه وطني</Title>
            <Title style={styles.headerTitle}>

              {this.props.name}
            </Title>
          </Body>
          <Right style={{flex:1, backgroundColor:'gray'}}/>
        </ImageBackground>
      </View>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection:"row",
    backgroundColor: colors.green_color2,
    height: 70,
  },
  headerTitle: {
    flex:1,
    color: '#fff',
    fontFamily: 'Cairo',
    // flex: 1,
    width: '100%',
    paddingTop: 10,
    textAlign: "center"
  },
  Left: {
    flex: 1,
  },
  Body: {
    flex: 2,
  },
});
