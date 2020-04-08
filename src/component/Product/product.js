import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default product = props => {
  increaseCount = (e) => {
    props.increase();
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.priceView}>
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {props.data.item.price}{' '}
              <Text style={{color: colors.currance}}>ر.س</Text>
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Image
            source={
              props.data.item.size == '200'
                ? require('../../image/product/200.png')
                : props.data.item.size == '330'
                ? require('../../image/product/330.png')
                : props.data.item.size == '600'
                ? require('../../image/product/600.png')
                : props.data.item.size == '1.5'
                ? require('../../image/product/1.5lit.png')
                : props.data.item.size == '3.8'
                ? require('../../image/product/3.8lit.png')
                : props.data.item.size == '5'
                ? require('../../image/product/5lit.png')
                : require('../../image/product/12lit.png')
            }
            style={{height: 50, width: 100, top: -5}}
            resizeMode="contain"
          />
          <Text
            style={{
              flex: 1,
              borderTopWidth: 1,
              borderTopColor: colors.green_color2,
              color: colors.product_name_color,
              fontSize: 17,
            }}>
            {props.data.item.name} {props.data.item.size} {props.data.item.size_unit}{' '}
          </Text>
          <Text style={{flex: 1, top: -20, color: colors.green_color}}>
            {' '}
            (1 كرتون - عبوة{props.data.item.number})
          </Text>
          <Image
            source={require('../../image/product/footer.png')}
            style={{
              position: 'absolute',
              flex: 1,
              height: 100,
              width: 100,
              bottom: -50,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.quntatyView}>
        <TouchableOpacity style={styles.operation} 
            onPress={()=>{props.decrease()}}
        >
          <Text style={{color: colors.yallow, top: -2, fontSize: 30}}>-</Text>
        </TouchableOpacity>
        <View style={styles.countView}>
          <Text>{props.data.item.count}</Text>
        </View>
        <TouchableOpacity
          style={styles.operation}
          onPress={increaseCount.bind(this)}>
          <Text style={{color: colors.yallow, top: -1, fontSize: 20}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const colors = require('../../assest/colors');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // height:00
    // width:400
    // backgroundColor:"red"
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.green_color,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: colors.box_backgroud,
    // width: 140,
    // padding:20
    // ,margin:205
  },
  priceView: {
    flex: 1,
    // right:-10,
    width: 146,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // backgroundColor:"red"
  },
  price: {
    // flex:1,
    backgroundColor: colors.green_color2,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 10,
    padding: 9,
  },
  priceText: {
    color: '#fff',
  },
  description: {
    flex: 1,
    height: 140,
    width: 146,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    // backgroundColor:"red"
  },

  quntatyView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.green_color2,
    width: 90,
    height: 35,
    borderRadius: 10,
    padding: 3,
    top: -15,
  },
  countView: {
    alignItems: 'center',
    backgroundColor: colors.box_backgroud,
    color: 'black',
    width: 40,
    fontSize: 20,
    borderRadius: 5,
  },
  operation: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.box_backgroud,
    width: 20,
    height: 20,
  },
});
