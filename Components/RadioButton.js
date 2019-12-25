import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class RadioButton extends Component {
  state = {
    value: null
  };

  change = value => {
    this.setState({
      value: value
    });
    this.props.update(value);
  };

  render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <View>
        {options.map(item => {
          return (
            <View key={item.label} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                onPress={this.change.bind(this, item.label)}
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
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 20
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20
  },

  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#794F9B",
    marginHorizontal: 5
  },
  label: {
    alignItems: "center"
  }
});
