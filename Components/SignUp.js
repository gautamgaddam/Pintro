import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import ActionHeader from "./ActionHeader";

export default class Home extends Component {
  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };
  goToSignUp = () => {
    Actions.pDetails();
  };

  goToLinkedIn = () => {
    Actions.linkedIn();
  };

  render() {
    return (
      <View>
        <Button
          buttonStyle={[styles.btnContainer, styles.linContainer]}
          onPress={this.goToLinkedIn}
          icon={
            <Icon
              name="linkedin-square"
              size={15}
              color="black"
              style={styles.iconContainer}
            />
          }
          title="Sign Up with LinkedIn"
        />
        <Text style={styles.txtContainer}> OR </Text>
        <Button
          buttonStyle={[styles.btnContainer, styles.supContainer]}
          onPress={this.goToSignUp}
          icon={
            <Icon
              name="mail"
              size={15}
              color="black"
              style={styles.iconContainer}
            />
          }
          title="Sign Up with Email"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25
  },
  linContainer: {
    backgroundColor: "#f13768"
  },
  supContainer: {
    backgroundColor: "#41225e"
  },
  txtContainer: {
    textAlign: "center"
  },
  iconContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 50
  }
});
