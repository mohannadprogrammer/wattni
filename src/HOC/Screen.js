import React, { Component } from 'react';
import {
    View
    , Image
    , StyleSheet
} from 'react-native';

import { Header } from '../component'
import { connect } from "react-redux";
import Loader from 'react-native-loading-spinner-overlay'

const mapStateToProps = (state) => ({

    data: state

})

const mapDispatchToProps = {
    // getData, setPhone
}



const Screen = ({ name, callBack, ...props }) => {
    console.log(props.count);
    return <View style={style.container}>
        <Header
            name={name}
            cartContentNumber={props.data.cart.products.length}

            // action ={()=>alert("what the fuck")}
            action={callBack}
        />
        {/* <Loader
            visible={props.data.Loader.loader}
            textContent={props.data.Loader.massage}
            textStyle={{ color: "#FFF" }} /> */}
        {props.children}


    </View>;
};

const colors = require('../assest/colors');
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Screen)
