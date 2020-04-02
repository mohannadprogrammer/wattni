import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView , Image} from 'react-native'
import { Icon } from 'native-base'
import Screen from "../../HOC/Screen"
import Components from '../../component'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: false,
            language: false
        }
    }
    showContact() {
        this.setState({
            contact: !this.state.contact
        })
    }
    showLanguage() {
        this.setState({
            language: !this.state.language
        })
    }

    render() {
        return (
            <Screen
                callBack={() => {
                    this.props.navigation.navigate("chart");
                }}
            >
                <ScrollView>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../../image/moremenu/profile.png')} style={styles.icon} resizeMode="contain"></Image>

                            <Text style={styles.text}>تعديل الملف الشخصي </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.contact ? styles.InShowoption : styles.option}
                            onPress={() => this.showContact()}
                        >
                            <Image source={require('../../image/moremenu/contact.png')} style={!this.state.contact ? styles.icon:{display:"none"}} resizeMode="contain"></Image>

                            <Text style={styles.text}>تواصل معنا </Text>

                        </TouchableOpacity>
                        <View style={this.state.contact ? styles.collapseView : { display: "none" }}>
                            <View style={{
                                flex: 2,
                                backgroundColor: colors.black_gray,
                                height: "100%",
                                width: "100%",
                                padding: 10,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10

                            }} >
                                <Text style={{ color: "gray" }}>عبر البريد لاإلكتروني</Text>
                                <Text style={{ color: colors.green_color2 }}>info@watani.com</Text>

                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ color: colors.green_color2, fontSize: 20 }}>لديك اي استفسار ؟ يرجى تعبئة البيانات الخاصة بالاستفسار ادناه . نحن في خدمتك على مدار الساعه </Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.option}>
                            <Image source={require('../../image/moremenu/share.png')} style={styles.icon} resizeMode="contain"></Image>
                            <Text style={styles.text}>شارك تطبيقك</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.language ? styles.InShowoption :styles.option}
                            onPress={() => this.showLanguage()}
                        >
                             <Image source={require('../../image/moremenu/languages.png')} style={!this.state.language ? styles.icon: { display: "none" }} resizeMode="contain"></Image>
                            {/* <Icon name="home" style={!this.state.language ? { flex: 1 } : { display: "none" }}/> */}
                            <Text style={styles.text}>English</Text>
                        </TouchableOpacity>
                        <View style={this.state.language ? styles.collapseView : { display: "none" }}


                        >
                            <Components.LanguageBox />
                        </View>
                    </View>
                </ScrollView>
            </Screen>

        )
    }
}
const colors = require("../../assest/colors")
const styles = StyleSheet.create({

    card: {
        flex: 1,
        backgroundColor: colors.box_backgroud,

        marginVertical: 50,
        padding: 10,
        alignSelf: "center",
        // justifyContent: "space-between",
        height:"100%",
        width:"70%",
        borderWidth: 2,
        borderColor: colors.green_color,
        borderRadius: 20


    },
    option: {
        margin: 10,
        flex: 1,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: colors.green_color2,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: colors.box_backgroud


    },
    InShowoption: {
        flex: 1,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: colors.green_color2,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        color: colors.box_backgroud


    },
    text: {
        color: colors.box_backgroud,
        fontSize: 20
    },
    collapseView: {
        flex: 1,
        alignItems: "flex-end",
        paddingHorizontal: 10,
    },
    icon:{ flex: 0 ,height:30,width:30}
})
