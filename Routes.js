import React from "react";
import { Router, Scene } from "react-native-router-flux";
import SignUp from "./Components/SignUp.js";
import PDetails from "./Components/PDetails.js";
import Intro from "./Components/Intro.js";
import ProfilePhoto from "./Components/ProfilePhoto.js";
import Moredetails from "./Components/MoreDetails.js";
import LinkedIn from "./Components/LinkedIn.js";
import Login from "./Components/Login.js";
import SetupProfile from "./Components/setupProfile.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Intro} initial={true} />
      <Scene key="login" component={Login} />
      <Scene key="signup" component={SignUp} />
      <Scene key="linkedIn" component={LinkedIn} />
      <Scene key="pDetails" component={PDetails} />
      <Scene key="profilePhoto" component={ProfilePhoto} />
      <Scene key="moreDetails" component={Moredetails} />
      <Scene key="setupProfile" component={SetupProfile} />
    </Scene>
  </Router>
);
export default Routes;
