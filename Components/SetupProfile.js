import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionHeader from "./ActionHeader";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class SetupProfile extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };

  goToProceed() {}

  goToSkip() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please Build your profile to find & apply for qualified jobs
        </Text>
        <View style={styles.btnContainer}>
          <Button
            buttonStyle={[styles.btn, styles.sinContainer]}
            title="Get started with quick wizard"
            titleStyle={{ color: "#ffffff" }}
            onPress={this.goToProceed}
          />
          <Button
            buttonStyle={[styles.btn, styles.supContainer]}
            titleStyle={{ color: "#000000" }}
            title="No, I will set it up later."
            onPress={this.goToSkip}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    margin: 45
  },
  btn: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginBottom: 30
  },
  sinContainer: {
    backgroundColor: "#472965"
  },
  supContainer: {
    backgroundColor: "#ffffff"
  }
});
