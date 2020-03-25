import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput,TouchableOpacity } from 'react-native'
import Screen from "../../HOC/Screen"
import {
    Button 
}from "../../component"
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from "react-redux";
import {getData, setPhone} from '../../action/RegistartionActions'


const mapStateToProps = (state) => ({
    
        data: state
    
})

const mapDispatchToProps = {
    getData, setPhone
}


class index extends Component {
    render() {
        console.log(this.props.data)
        return (
            <Screen>
            <View style={styles.container}>
                <View style={styles.Boxcontainer}>

                    <Text style={styles.text}>لأكمال التسجيل نرجوا ادخال رقم الجوال</Text>
                    <View style={styles.inputHolder}>
                        <TextInput
                         keyboardType = 'numeric'
                         maxLength={10}
                            style={{textAlign: 'right'}}
                            placeholder='05xxxxxxxx'
                            onChange={(e)=>{
                                // console.log(e.nativeEvent.text)
                                this.props.setPhone(e.nativeEvent.text) 
                            }}
                        />
                        <Icon name="phone" size={30} color={colors.green_color}  style={{alignItems:"center"}}/>
                    </View>
                    <Text style={styles.Massagetext}>سوف يصلك كود تحقق </Text>
                </View>
                
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{this.props.navigation.navigate("confirm")}}
                    
                >
                    <Text style={styles.Buttontext}>متابعة</Text>
                </TouchableOpacity>

            </View>
            </Screen>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(index)

const colors = require("../../assest/colors")
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:160
    },
    Boxcontainer: {
        flex: 0,
        backgroundColor: colors.box_backgroud,
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: colors.green_color,
        borderWidth: 2,
        borderRadius: 10,
        height: 230,
        width: 350,
        padding:20,

        margin: 40,
    },
    inputHolder: {
        flex: 0,
        flexDirection: "row",
        justifyContent:"flex-end",
        borderColor: colors.gray,
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        width: 300,
         
        // textAlign:"left"
    },
    button: {
        flex:0,
        alignItems:"center",
        justifyContent:"center",
        color: "red",//colors.green_color,
        fontSize: 50,
        backgroundColor: colors.green_color2,
        height: 40,
        width: 130,
        //border
        borderRadius:5

    },
    text:{
        color:colors.green_color,
        fontSize:15  
    },
    Massagetext:{
        color:colors.green_color2,
        fontSize:15  
    },
    Buttontext:{
        color:"#fff",
        fontSize:25
    }
})
