import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import ActionHeader from "./ActionHeader";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

const buttonTextStyle = {
  color: "#393939"
};
export default class ProfilePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: "",
      category: "",
      categories: []
    };
    this.industries = [
      {
        label: "Business services",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Information technology",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Manufacturing",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Health care",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Finance",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Retail",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Accounting and legal",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Construction, repair and maintenance",
        categories: ["cat1", "cat2", "cat3"]
      },
      {
        label: "Media",
        categories: ["cat1", "cat2", "cat3"]
      }
    ];
  }

  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };

  getCategories(index, industry) {
    this.setState({
      categories: this.industries[0].categories,
      industry: industry
    });
  }

  setCategories(index, category) {
    this.setState({
      category: category
    });
  }

  goToProceed() {}

  goToSkip() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep
            label="First Step"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Picker
                selectedValue={this.state.industry}
                style={styles.formContainer}
                onValueChange={(itemValue, itemIndex) => {
                  this.getCategories(itemIndex, itemValue);
                }}
              >
                {this.industries.map((industry, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={industry.label}
                      value={industry.label}
                    />
                  );
                })}
              </Picker>
              <Picker
                selectedValue={this.state.category}
                style={styles.formContainer}
                onValueChange={(itemValue, itemIndex) => {
                  this.setCategories(itemIndex, itemValue);
                }}
              >
                {this.state.categories.map((category, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={category}
                      value={category}
                    />
                  );
                })}
              </Picker>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second Step"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    height: 50,
    width: 90 + "%"
  }
});
