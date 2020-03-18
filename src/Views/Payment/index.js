import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Screen from '../../HOC/Screen'

import {
    MassageCard
} from '../../component'
export default class index extends Component {
    render() {
        return (
            <Screen
                name="دفع"
                callBack ={()=>{
                    this.props.navigation.navigate("chart");
                }}
            >
                <View style={styles.body}>
                    <View style={styles.wrapper}>
                        <MassageCard

                            style={{ margin: 20 }}
                            title="اتمام الطلب"
                        >
                            <View >
                                <Text>فضلاً اختار احدي  الوسائل التالية :</Text>
                            </View>

                            {/* <ListItem>
                                <Body>
                                    <Text style={{ color: colors.green_color2, marginHorizontal: 7 }}>في اي وقت</Text>
                                </Body>
                                <CheckBox checked={true} color={colors.green_color2} style={{ borderRadius: 10 }} />

                                <Body>
                                    <Text style={{ color: colors.green_color2, marginHorizontal: 10 }} > مساء</Text>
                                </Body>
                                <CheckBox checked={false} color={colors.green_color2} style={{ borderRadius: 10 }} />
                                <Body>
                                    <Text style={{ color: colors.green_color2, marginHorizontal: 10 }}>صباخ</Text>
                                </Body>
                                <CheckBox checked={false} color={colors.green_color2} style={{ borderRadius: 10 }} />

                            </ListItem> */}

                        </MassageCard>
                    </View>

                </View>

            </Screen>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: 'whitesmoke',
        height: '100%',
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
})
