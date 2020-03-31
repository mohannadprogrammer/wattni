import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'

import {Cart ,Button ,Dilervary }from '../../component'

import { connect } from 'react-redux'
import Screen from '../../HOC/Screen'


const mapStateToProps = (state) => {
    return {
        data: state
    }
}
const mapDispatchToProps = {
    // addToCart
}
class index extends Component {
    render() {
        return (
            <Screen
                name="سلة المشتريات"
            >
                <ScrollView>
                <View style={{flex:1 ,alignItems:"center" }}>
                <FlatList
                        style={{ flex: 1, backgroundColor: "red" }}
                        // ListHeaderComponent={
                        //     // <View style={styles.sliderViewContainer} >
                        //     //     <AppIntroSlider 
                        //     //         slides={this.state.data}
                        //     //         dotStyle={{ backgroundColor: colors.green_color2 }}
                        //     //         activeDotStyle={{backgroundColor:"#2ecc71"}}
                        //     //         renderNextButton={ ()=>(<View><View></View></View>)}

                        //     //         renderItem={this._renderItem} />
                        //     // </View>
                        // }

                        data={this.props.data.cart.products}
                        style={{ top: 5 }}

                        ItemSeparatorComponent={() => (
                            <View style={[{ marginLeft: 0 }]} />
                        )}
                        renderItem={(item, index, separator) => (
                            <Cart
                                data={item}

                            />
                        )}


                    />
                    {/* <Cart></Cart>
                    <Cart></Cart> */}
                    <Button name ="أضافة عناصر">
                    </Button>

                    <Dilervary></Dilervary>
                    <Button
                        onClick={()=>this.props.navigation.navigate("regist")}
                        name ="تنفيز الطلب">
                    </Button>

                </View>
                </ScrollView>
            </Screen>

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

})
export default connect(mapStateToProps, mapDispatchToProps)(index);
