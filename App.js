import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./Routes.js";

export default class reactTutorialApp extends Component {
  render() {
    console.disableYellowBox = true;
    return <Routes />;
  }
}
AppRegistry.registerComponent("reactTutorialApp", () => reactTutorialApp);
