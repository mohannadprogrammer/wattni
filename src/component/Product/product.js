import React, { Component } from 'react'
import { Text, StyleSheet, View, Image , TouchableOpacity } from 'react-native'

export default class product extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0

        }
    }
    increaseCount =()=>{
        this.setState(prevState=>({
            count:++prevState.count
        }))
        this.props.increase()

    }
    render() {
        console.log("count",this.props.data.item.count)
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.priceView}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>{this.props.data.item.price}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Image source={
                            this.props.data.item.type=="200" ?
                            require("../../image/product/200.png"):require("../../image/product/330.png")} style={{ height: 50, width: 100 ,top:-5}}
                            resizeMode="contain"/>
                        <Text style={{flex:1,borderTopWidth:1 , borderTopColor:colors.green_color2 , color:colors.product_name_color , fontSize:17}}>مياة وطني {this.props.data.item.type} مل </Text>
                        <Text style={{flex:1 , top:-20 , color:colors.green_color }}> (1 كرتون - عبوة{this.props.data.item.qunaty})</Text>
                        <Image source={require("../../image/product/footer.png")} style={{position:"absolute", flex:1,height: 100, width: 100,bottom:-50}}
                            resizeMode="contain" />

                    </View>
                    
                </View>
                <View style={styles.quntatyView}>
                    <View style ={styles.operation}>
                        <Text style={{color:colors.yallow , top:-2,fontSize:30}}>-</Text>
                    </View>
                    <View style={styles.countView}>
                        <Text >{this.props.data.item.count}</Text>
                    </View>
                    <TouchableOpacity style ={styles.operation} onPress ={this.increaseCount.bind(this)}>
                        <Text style={{color:colors.yallow , top:-1,fontSize:20}}>+</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:"space-between",
        alignItems:'center',
        // height:00
        // width:400
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
        // width: 140,
        // padding:20
        // ,margin:205
    },
    priceView: {
        flex: 1,
        // right:-10,
        width: 146,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
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
        color: "#fff"

    },
    description: {
        flex: 1,
        height: 140,
        width: 146,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:20
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
