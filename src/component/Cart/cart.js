import React from 'react';
import {
    View, StyleSheet
    , Text
    , TouchableOpacity
} from 'react-native';

// import Icon from 'react-native-vector-icons'
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
const Cart = () => {

    return <View style={styles.container}>
        <TouchableOpacity style={styles.delete}>
            <Icon name="trashcan" type="Octicons" style={{ color: colors.box_backgroud, padding: 4, fontSize: 30 }} />
        </TouchableOpacity>
        <View style={styles.info}>
            <Text style={styles.infoName}>مياة الوطني 330 مل</Text>
            <Text style={styles.infoPackageSize}>(1 كرتونة -48عبوة )</Text>
            <Text>16.00 <Text style={{color:colors.currance}}>ر.س</Text></Text>
            <View style={styles.quntatyView}>
                <View style={styles.operation}>
                    <Text style={{ color: colors.yallow, top: -2, fontSize: 30 }}>-</Text>
                </View>
                <View style={styles.countView}>
                    <Text >0</Text>
                </View>
                <View style={styles.operation}>
                    <Text style={{ color: colors.yallow, top: -1, fontSize: 20 }}>+</Text>
                </View>
            </View>
        </View>

        <View style={styles.imageView}>
            <Text>image</Text>
        </View>


    </View>;
};

const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container: {
        borderColor: "#0bb7b0",
        borderWidth: 2,
        backgroundColor: "#fff",
        height: 130,
        width: 350,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        // alignItems:"sp",
        padding: 10
    },
    delete: {
        position: "absolute",
        height: 40,
        width: 50,
        bottom: 0,
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 13,
        backgroundColor: colors.green_color2
    },
    info:{
        left:80

    },
    quntatyView: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor: colors.box_backgroud,
        borderColor:colors.green_color2,
        borderWidth:1,
        width: 130,
        height:20,
        borderRadius: 10,
        padding:3,
        // top:-15
        

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
        borderColor:colors.green_color2,
        width :20,
        height:20,
        

    },
    imageView:{
        borderLeftColor:colors.green_color2,
        borderLeftWidth:2,
        justifyContent:"center",
        alignItems:"center",
        top:15,
        height:70,
        width:100,
        padding:10
    },
    infoName :{
        color:colors.green_color2,
        fontSize:15
    },
    infoPackageSize:{
        color:colors.green_color
    }
});
export default Cart;