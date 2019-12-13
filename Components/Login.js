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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    Actions.profilePhoto();
    // fetch(
    //   "http://ec2-52-15-192-138.us-east-2.compute.amazonaws.com:6222/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(this.state)
    //   }
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //     Actions.profilePhoto();
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          Please Login using registered credentials.
        </Text>
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
          onChangeText={password => this.setState({ password })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#002f6c"
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold"
  },
  inputBox: {
    backgroundColor: "#eeeeee",
    fontSize: 16,
    color: "#002f6c",
    marginVertical: 10,
    paddingHorizontal: 16,
    width: 80 + "%",
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
