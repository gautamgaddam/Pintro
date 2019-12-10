import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default class ActionHeader extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("./../assets/logo.png")}
          style={{
            marginHorizontal: 15,
            marginVertical: 30
          }}
        />
      </View>
    );
  }
}
