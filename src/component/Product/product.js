import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class product extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.priceView}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>{this.props.data.price}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        {/* <Image source={require("../../image/logo.png")} style={{ height: 100, width: 100, left: 0, top: 60 }}
                            resizeMode="contain"/> */}
                        <Text style={{borderTopWidth:1}}>{this.props.data.name}</Text>
                        <Text> (1 كرتون - عبوة{this.props.data.qunaty})</Text>
                        {/* <Image source={require("../../image/logo.png")} style={{ height: 100, width: 100, left: 0, top: 60 }}
                            resizeMode="contain" /> */}

                    </View>
                    
                </View>
                <View style={styles.quntatyView}>
                    <View style ={styles.operation}>
                        <Text style={{color:colors.yallow , top:-2,fontSize:30}}>-</Text>
                    </View>
                    <View style={styles.countView}>
                        <Text >{this.state.count}</Text>
                    </View>
                    <View style ={styles.operation}>
                        <Text style={{color:colors.yallow , top:-1,fontSize:20}}>+</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container:{
        // flex:1, 
        // justifyContent:"center",
        alignItems:'center',
        width:200
        // backgroundColor:"red"

    },
    card: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colors.green_color,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: colors.box_backgroud,
        width: 150,

    },
    priceView: {
        flex: 1,
        width: 146,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        // backgroundColor:"red"
    },
    price: {

        backgroundColor: colors.green_color2,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 10,
        padding: 9,

    },
    priceText: {
        color: "#fff"

    },
    description: {
        flex: 0,
        height: 140,
        width: 146,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"red"
    },

    quntatyView: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor: colors.green_color2,
        width: 90,
        height:35,
        borderRadius: 10,
        padding:3,
        top:-15
        

    },
    countView:{
        alignItems:"center",
        backgroundColor:colors.box_backgroud,
        color:"black",
        width:40,
        fontSize:20,
        borderRadius: 5,

    },
    operation:{
        flex:0,
        alignItems :"center",
        justifyContent:"center",
        borderRadius: 20,
        borderWidth:1,
        borderColor:colors.box_backgroud,
        width :20,
        height:20,
        

    }
})
