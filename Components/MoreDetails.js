import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import ActionHeader from "./ActionHeader";
import DatePicker from "react-native-datepicker";
import { Actions } from "react-native-router-flux";
import RadioButton from "./RadioButton";

export default class Moredetails extends Component {
  constructor(props) {
    super(props);
    this.radioLabels = [
      {
        label: "Male"
      },
      {
        label: "Female"
      }
    ];
    this.state = {
      dob: "",
      gender: "",
      email: global.email
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

  updateGender(gender) {
    this.setState({ gender: gender });
  }

  saveData = async () => {
    fetch(
      "http://ec2-52-15-192-138.us-east-2.compute.amazonaws.com:6222/add-user-details",
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
        if (responseJson.status === 200) {
          Actions.seupProfile();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={styles.inputBox}
          date={this.state.dob}
          mode="date"
          placeholder="Date of Birth"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: "none",
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={dob => {
            this.setState({ dob: dob });
          }}
        />
        <Text style={styles.formText}>Select Gender</Text>
        <RadioButton
          options={this.radioLabels}
          updateGender={this.updateGender.bind(this)}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            Add
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
  formText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left"
  },
  submitButton: {
    backgroundColor: "#472965"
  },
  terms: {
    margin: 25
  }
});
