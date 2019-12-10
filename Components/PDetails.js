import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import ActionHeader from "./ActionHeader";
import { Actions } from "react-native-router-flux";

export default class PDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      re_password: ""
    };
  }

  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };

  saveData = async () => {
    fetch(
      "http://ec2-52-15-192-138.us-east-2.compute.amazonaws.com:6222/add-user",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.length > 0 && responseJson[0] != undefined) {
          if (responseJson[0].add_user) {
            Actions.profilePhoto();
          } else {
            Actions.profilePhoto();
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={email => this.setState({ email })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={first_name => this.setState({ first_name })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="First Name"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="default"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={last_name => this.setState({ last_name })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Last Name"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="default"
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={password => this.setState({ password })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#002f6c"
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={re_password => this.setState({ re_password })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Re-type Password"
          secureTextEntry={true}
          placeholderTextColor="#002f6c"
        />
        <Text style={styles.terms}>
          By clicking on Sign Up, you agree to out User Terms & Privacy Policy
        </Text>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    backgroundColor: "#eeeeee",
    fontSize: 16,
    color: "#002f6c",
    marginVertical: 10,
    paddingHorizontal: 16,
    width: 100 + "%",
    height: 50
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    padding: 10
  },
  submitButton: {
    backgroundColor: "#472965"
  },
  terms: {
    margin: 25
  }
});
