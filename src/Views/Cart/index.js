import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'

import { Cart, Button, Dilervary } from '../../component'

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
    validation() {
        for (let i = 0; i < this.props.data.cart.products.length; i++) {
            console.log("sjdkfjs")
            if (this.props.data.cart.products[i].count < 10) {
                return true
            }
        }

        return false
    }
    render() {
        const check = this.validation()
        console.log("jj", check)
        return (
            <Screen
                name="سلة المشتريات"
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    {this.props.data.cart.products.length == 0 ?
                        (< View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "red", fontSize: 20 }}>اضف منتجات الى السلة </Text>

                        </View>) : (
                            <View>
                                <FlatList
                                    style={{ flex: 1, color: "red" }}
                                    ListFooterComponent={
                                        <View
                                            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                                        >
                                            {check ? <Text style={{ color: "red" }}>يجب ان يكون عدد المنتجات اكثر من 10</Text> : null}
                                            <Button name="أضافة عناصر">
                                            </Button>

                                            <Dilervary></Dilervary>
                                            <Button
                                                onClick={() => this.props.navigation.navigate("regist")}
                                                name="تنفيز الطلب">
                                            </Button>
                                        </View>


                                    }

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
                            </View>

                        )
                    }

                    {/* <Cart></Cart>
                    <Cart></Cart> */}


                </View>
            </Screen >

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

})
export default connect(mapStateToProps, mapDispatchToProps)(index);
