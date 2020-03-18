import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';


import { OffersBox } from "../../component"
import Screen from '../../HOC/Screen'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (<Screen
            callBack ={()=>{
                this.props.navigation.navigate("chart");
            }}
        >
            <View style={styles.container}>
            <View style={styles.pageName}>
                <Text style={styles.pageNameText}>العروض</Text>

            </View>
            <ScrollView>
               <OffersBox
                    expiredData ={"2/2/2020"} 
               />
               <OffersBox
                    expiredData ={"2/2/2020"} 
               />
               <OffersBox
                    expiredData ={"2/2/2020"} 
               />
               
                
            </ScrollView>

        </View>
        </Screen>)
        ;
    }
}
const colors = require('../../assest/colors')
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageName: {
        flex: 0,
        backgroundColor: colors.black_gray,
        alignItems: "center"
    },
    pageNameText: {
        height: 40,
        marginTop: 10,
        fontSize: 20,
        borderBottomColor: colors.green_color2,
        borderBottomWidth: 5,
    },
    
})
export default Index;