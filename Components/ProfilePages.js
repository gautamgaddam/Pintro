import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, TextInput } from "react-native";
import ActionHeader from "./ActionHeader";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import DatePicker from "react-native-datepicker";
import moment from "moment";

export default class ProfilePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: "Business services",
      category: "cat1",
      textInput: [],
      workExperience: []
    };
    this.categories = [];
    this.textInput = [];
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

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center"
    }
  };

  componentDidMount() {
    this.getCategories(0, this.state.industry);
  }

  updateWExpe(key, value, index) {
    var wExperience = this.state.workExperience;
    wExperience[index][key] = value;
    this.setState({ workExperience: wExperience });
  }

  addTextInput = key => {
    let workExperience = this.state.workExperience;
    workExperience.push({
      companyName: "",
      position: "",
      from: moment().format("YYYY-MM-DD"),
      to: moment().format("YYYY-MM-DD"),
      isCurrent: false
    });
    this.textInput.push(
      <View key={key}>
        <TextInput
          style={styles.inputBox}
          onChangeText={companyName =>
            this.updateWExpe("companyName", companyName, key)
          }
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Company Name"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={position => this.updateWExpe("position", position, key)}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Position"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
        />
        <DatePicker
          mode="date"
          date={this.state.workExperience[key].from}
          showIcon={false}
          placeholder="Start Date"
          format="YYYY-MM-DD"
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={sDate => {
            this.updateWExpe("from", sDate, key);
          }}
        />
        <DatePicker
          mode="date"
          date={this.state.workExperience[key].to}
          showIcon={false}
          placeholder="End Date"
          format="YYYY-MM-DD"
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={eDate => {
            this.updateWExpe("to", eDate, key);
          }}
        />
      </View>
    );
    this.setState({ workExperience: workExperience });
  };

  static navigationOptions = {
    headerLeft: <ActionHeader />,
    headerStyle: {
      backgroundColor: "#41225e",
      height: 80
    },
    headerTintColor: "#606070"
  };

  getCategories(index, industry) {
    this.categories = this.industries[index].categories;
    this.setState({
      industry: industry
    });
  }

  setCategories(index, category) {
    this.setState({
      category: category
    });
  }

  submitProfile() {
    console.log(this.state);
  }

  goToProceed() {}

  goToSkip() {}

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: "#686868",
      activeLabelColor: "#686868",
      activeStepNumColor: "white",
      activeStepIconColor: "#686868",
      completedStepIconColor: "#686868",
      completedProgressBarColor: "#686868",
      completedCheckColor: "#4bb543"
    };

    const buttonTextStyle = {
      color: "#686868",
      fontWeight: "bold"
    };
    return (
      <View style={{ flex: 1 }}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="First Step"
            scrollViewProps={this.defaultScrollViewProps}
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
                {this.categories.map((category, index) => {
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
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            onSubmit={this.submitProfile.bind(this)}
          >
            <View style={{ alignItems: "center" }}>
              <Button
                title="+ Add Work Experience"
                onPress={() => this.addTextInput(this.textInput.length)}
              />
              {this.textInput.map((value, index) => {
                return value;
              })}
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
  },
  inputBox: {
    backgroundColor: "#eeeeee",
    fontSize: 16,
    color: "#002f6c",
    marginVertical: 10,
    paddingHorizontal: 16,
    width: 100 + "%",
    height: 50
  }
});
