import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import ActionHeader from "./ActionHeader";
import { TagSelect } from "react-native-tag-select";

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.data = [
      { id: 1, label: "Money" },
      { id: 2, label: "Credit card" },
      { id: 3, label: "Debit card" },
      { id: 4, label: "Online payment" },
      { id: 5, label: "Bitcoin" }
    ];
    this.state = {};
  }

  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Payment:</Text>
        <TagSelect
          data={this.data}
          ref={tag => {
            this.tag = tag;
          }}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              title="Get selected"
              onPress={() => {
                Alert.alert(
                  "Selected items:",
                  JSON.stringify(this.tag.itemsSelected)
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 50,
    marginLeft: 15
  },
  buttonContainer: {
    padding: 15
  },
  buttonInner: {
    marginBottom: 15
  },
  labelText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 15
  },
  item: {
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#FFF"
  },
  label: {
    color: "#333"
  },
  itemSelected: {
    backgroundColor: "#333"
  },
  labelSelected: {
    color: "#FFF"
  }
});
