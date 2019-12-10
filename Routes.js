import React from "react";
import { Router, Scene } from "react-native-router-flux";
import SignUp from "./Components/SignUp.js";
import PDetails from "./Components/PDetails.js";
import Intro from "./Components/Intro.js";
import ProfilePhoto from "./Components/ProfilePhoto.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Intro} initial={true} />
      <Scene key="signup" component={SignUp} />
      <Scene key="pDetails" component={PDetails} />
      <Scene key="profilePhoto" component={ProfilePhoto} />
    </Scene>
  </Router>
);
export default Routes;
