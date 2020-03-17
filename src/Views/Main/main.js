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
import { connect } from 'react-redux'
import { Product } from "../../component"
class main extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
    _renderItem = props => (
        <ImageBackground style={styles.sliderView} resizeMode="contain" source={require("../../image/footer.png")}>
            <Text>{props.title}</Text>
        </ImageBackground>
    );
    render() {
        console.log(this.props.data)

        return<Screen>
                 <View style={styles.container}>
            
            <View style={styles.pageName}
                
             >
                <Text style={styles.pageNameText} onPress ={this.props.navigation.push("chart")}>المنتجات</Text>

            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.sliderViewContainer} >
                            <AppIntroSlider slides={this.state.data} renderItem={this._renderItem} />
                        </View>
                    }

                    data={this.props.data.Product.products}
                    style={{ top: 5 }}
                    numColumns={2}
                    ItemSeparatorComponent={() => (
                        <View style={[{ marginLeft: 0 }]} />
                    )}
                    renderItem={(item, index, separator) => (
                        <Product
                            data={{
                                key: 2,
                                price: "100 ر.س",
                                name: "مياة وطني 600 مل ",
                                qunaty: "24"

                            }}

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
    sliderView: {
        flex: 1,
    },
    sliderViewContainer: {
        flex: 0,
        height: 200,//Dimensions.get("window").height,
        width: Dimensions.get("window").width - 20,
        marginRight: 10


    }
})

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(main);