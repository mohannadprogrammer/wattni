import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import Screen from '../../HOC/Screen'

import { setData } from "../../action/Order"
export class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: [
        {
          latitude: 24.701898,
          longitude: 46.637426,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        },
        {
          latitude: 24.701413,
          longitude: 46.639458,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }

      ]
    }
  }
  render() {

    return (
      <Screen>
        <View style={styles.container}>
          <MapView
            onPress={(coordinate) => {
              let newloc = this.state.location
              newloc.push(coordinate.nativeEvent.coordinate);
              this.props.setData({
                "lat": coordinate.nativeEvent.coordinate.latitude,
                "lng": coordinate.nativeEvent.coordinate.longitude,
              });

              this.setState({
                location: newloc
              }
              )

              setTimeout(() => {
                this.props.navigation.navigate("chart")
              }, 2000)

            }}

            // onPress 
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 24.701898,
              longitude: 46.637426,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}

          >
            {this.state.location.map((mark, i) => (
              <Marker
                key={i}
                coordinate={mark}
              // image ={require('../../image/logo.png')}
              ></Marker>
            ))}
          </MapView>

        </View>
      </Screen>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  map: {
    height: "100%",
    width: "100%"
  }

})
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
