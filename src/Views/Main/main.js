import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    FlatList,
    SafeAreaView
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'
import Screen from '../../HOC/Screen'

import { Bars } from 'react-native-loader'
import { connect } from 'react-redux'
import { Product } from "../../component"
import { addToCart, decrease, getProduct, startLoading, stopLoading } from '../../action/MainActions'

class main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: true,
            data: [
                {
                    key: "1",
                    title: "nihs",
                    image: "../../../image/footer.png"
                },
                {
                    key: "2",
                    title: "nihs",
                    image: "../image/footer.png"
                }, {
                    key: "3",
                    title: "nihs",
                    image: "../image/footer.png"
                }
            ]
        }
    }

    loading = async (lod) => {
        this.props.startLoading("جاري تحميل البيانات ...");
        await lod('ar');
        // this.props.getProduct("ar")
        this.props.stopLoading()
    }
    componentDidMount() {
        // this.loading(this.props.getProduct);
        if (this.props.data.Product.products.length === 0)
            this.props.getProduct("ar")


    }
    addToCartData = (data) => {
        // console.log("fuck"+data)
        // console.log(data)
        this.props.addToCart(data)
        // this.render()
    }
    decreaseData = (data) => {
        this.props.decrease(data)
    }
    _renderItem = props => (
        <ImageBackground style={styles.sliderView} resizeMode="contain" source={require("../../image/product/slider.png")}>
            <Text>{props.title}</Text>
        </ImageBackground>
    );
    render() {
        console.log(this.props.data)

        return <Screen
            name="الرئسية"
            // count={this.props.data.cart.products.length}
            callBack={() => {
                this.props.navigation.navigate("chart");
            }}
        >
            <View style={styles.container}>

                <View style={styles.pageName}>
                    <Text style={styles.pageNameText} >المنتجات</Text>
                </View>
                <SafeAreaView style={{ flex: 1 }} >


                    <FlatList
                        style={{ flex: 1, backgroundColor: "red" }}
                        ListHeaderComponent={
                            <View style={styles.sliderViewContainer} >
                                <AppIntroSlider
                                    slides={this.state.data}
                                    dotStyle={{ backgroundColor: colors.green_color2 }}
                                    activeDotStyle={{ backgroundColor: "#2ecc71" }}
                                    renderNextButton={() => (<View><View></View></View>)}

                                    renderItem={this._renderItem} />
                                {/* <Bars color={colors.green_color2} style={{ flex: 1, alignSelf: "center" }} /> */}
                            </View>
                        }

                        data={this.props.data.Product.products}
                        style={{ top: 5 }}
                        numColumns={2}
                        // refreshing={this.props.data.Pro}
                        // onRefresh
                        ItemSeparatorComponent={() => (
                            <View style={[{ marginLeft: 0 }]} />
                        )}
                        renderItem={(item, index, separator) => (

                            <Product
                                increase={this.addToCartData.bind(this, item.item)}
                                decrease={this.decreaseData.bind(this, item.item)}
                                data={item}

                            />
                        )}


                    />

                </SafeAreaView>


            </View>
        </Screen>

            ;
    }
}
const colors = require('../../assest/colors')
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageName: {
        // flex: 1,
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
    sliderView: {
        flex: 1,
    },
    sliderViewContainer: {
        flex: 1,
        height: 200,//Dimensions.get("window").height,
        width: Dimensions.get("window").width - 20,
        marginRight: 10,
        // backgroundColor:"red"


    }
})

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
const mapDispatchToProps = {
    addToCart, decrease, getProduct, startLoading, stopLoading
}
export default connect(mapStateToProps, mapDispatchToProps)(main);