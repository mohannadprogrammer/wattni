import React from 'react';
import {
    View, StyleSheet
    , Text
    , TouchableOpacity
} from 'react-native';

// import Icon from 'react-native-vector-icons'
import {
    Input,
    Item,
    Body,
    CheckBox,
    ListItem,
    Icon,
    Label,
    DatePicker,
} from 'native-base';
const Dilevary = ({ setData, ...props }) => {
    console.log(props)
    return <View style={styles.container}>

        <View style={styles.title}>
            <Text style={{ color: colors.box_backgroud, fontSize: 20 }}>التوصيل</Text>
        </View>

        <View style={styles.form}>
            <Item style={{ justifyContent: "flex-end" }}>
                <Input
                    refs="city"

                    placeholder='المدينة' style={{ textAlign: "right" }}
                    onChange={(e) => {
                        setData({ name: "city", value: e.nativeEvent.text })

                    }} />
                <Icon active name='location-on' type="Icons" style={{ color: colors.green_color2 }} />

            </Item>
            <Item style={{ justifyContent: "flex-end" }}>
                <Input
                    // ref="section"
                    placeholder='الحي'
                    style={{ textAlign: "right" }}
                    onChange={(e) => {
                        setData({ name: "section", value: e.nativeEvent.text })

                    }}
                />
                <Icon active name='location-on' type="Icons" style={{ color: colors.green_color2 }} />

            </Item>
            <View
                onTouchStart={() => {
                    props.nav.navigate("map")
                    console.log("kskd");
                }}
                style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                <Input
                    onKeyPress={() => {
                        props.nav.navigate("map")
                        // console.log("kskd");

                    }}
                    placeholder='موقع التواصبل على الخريطة'
                    style={{ textAlign: "right" }}
                // value={"sd"}
                // onChange={(e) => {
                //     setData({ name: "section", value: e.nativeEvent.text })

                // }}

                />
                <Icon active name='location-on' type="Icons" style={{ color: colors.green_color2 }} />

            </View>
            <Item style={{ justifyContent: "flex-end" }}>
                <DatePicker placeHolderText='موعد التسلم' style={{ textAlign: "right" }} />
                <Icon active name='md-time' type="Ionicons" style={{ color: colors.green_color2 }} />

            </Item>
            <ListItem>
                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 7 }}>في اي وقت</Text>
                </Body>
                <CheckBox checked={true} color={colors.green_color2} style={{ borderRadius: 10 }} />

                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 10 }} > مساء</Text>
                </Body>
                <CheckBox checked={true} color={colors.green_color2} style={{ borderRadius: 10 }} />
                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 10 }}>صباخ</Text>
                </Body>
                <CheckBox checked={false} color={colors.green_color2} style={{ borderRadius: 10 }} />

            </ListItem>
            <Item style={{ justifyContent: "flex-end" }}>
                <Input placeholder='لديك كود ترويجي ؟' style={{ textAlign: "right" }} />
                <Icon active name='location-on' type="Icons" style={{ color: colors.green_color2 }} />

            </Item>
            <Item style={{ justifyContent: "flex-end" }}>
                <DatePicker placeHolderText='جدولة الطلب' style={{ textAlign: "right" }} />
                <Icon active name='md-time' type="Ionicons" style={{ color: colors.green_color2 }} />

            </Item>
            <ListItem>
                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 7 }}>كل شهر</Text>
                </Body>
                <CheckBox checked={true} color={colors.green_color2} style={{ borderRadius: 10 }} />

                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 7 }} >كل اسبوعين</Text>
                </Body>
                <CheckBox checked={false} color={colors.green_color2} style={{ borderRadius: 10 }} />
                <Body>
                    <Text style={{ color: colors.green_color2, marginHorizontal: 7 }}>مرة واحدة</Text>
                </Body>
                <CheckBox checked={false} color={colors.green_color2} style={{ borderRadius: 10 }} />

            </ListItem>
            {/* <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText=""
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                // onDateChange={this.setDate}
                disabled={false}
            /> */}
        </View>
    </View>;
};

const colors = require("../../assest/colors")
const styles = StyleSheet.create({
    container: {
        borderColor: colors.green_color,
        borderWidth: 2,
        backgroundColor: colors.box_backgroud,
        // height: 130,
        width: 350,
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 15,
        marginVertical: 5,
        alignItems: "center",
        padding: 10
    },
    title: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 30,
        alignItems: "center",
        width: 100,
        backgroundColor: colors.green_color2,
        color: colors.box_backgroud,
        borderTopLeftRadius: 13,
        borderBottomRightRadius: 13
    },
    form: {
        flex: 1,

        // backgroundColor:"red"
    }

});
export default Dilevary;