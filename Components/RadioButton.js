import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class RadioButton extends Component {
  state = {
    value: null
  };

  changeGender = gender => {
    this.setState({
      value: gender
    });
    this.props.updateGender(gender);
  };

  render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.buttonContainer}>
        {options.map(item => {
          return (
            <View key={item.label} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                onPress={this.changeGender.bind(this, item.label)}
              >
                {value === item.label && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B",
    marginRight: 5
  },
  label: {
    marginRight: 20
  }
});
