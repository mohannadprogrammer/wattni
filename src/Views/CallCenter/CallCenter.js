import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {
  MassageCard,
  Button,
  
} from '../../component';
import Screen from '../../HOC/Screen'
export default class CallCenter extends Component {
  render() {
    return (
      <Screen>
      <View style={styles.body}>
        <View style={styles.wrapper}>
          <MassageCard>
            <View style={styles.title}>
              <Text style={styles.text}>خدمه العملاء</Text>
            </View>
            <View>
              <Text style={styles.num}>09999999</Text>
            </View>
            <View style={styles.alertTitle}>
              <Text style={styles.text}> عفوا</Text>
            </View>
            <View style={styles.alertPar}>
              <Text style={{fontSize: 20, color: colors.green_color2, textAlign: 'center'}}>
                <Text>الطلب الخاص بكم خارج نطاق </Text>
                  منطقه التوصيل و سيتم توفير الخدمة قريبا في هذا النطاق
              </Text>
            </View>
          </MassageCard>
          <View style={styles.buttonsContainer}>
            <Button name ="الغاء الطلب">
            </Button>
            <Button name ="تعديل العنوان">
            </Button>
          </View>
        </View>
      </View>
      </Screen>
    );
  }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'whitesmoke',
    height: '100%',
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    flex: 1,
    height: 'auto',
    paddingBottom: 40,
    borderBottomColor: colors.green_color,
    borderBottomWidth: 2,
    width: '50%',
    textAlign: 'center',
  },
  alertTitle: {
    flex: 1,
    height: 'auto',
    paddingBottom: 40,
    borderBottomColor: colors.green_color,
    borderBottomWidth: 2,
    width: '30%',
  },
  num: {
    fontSize: 35,
    color: colors.green_color,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.green_color,
  },
  alertPar: {
    width: '70%',
    margin: 'auto',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
