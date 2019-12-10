import React from "react";
import { Actions } from "react-native-router-flux";
import { Text, StyleSheet, View } from "react-native";
import Swiper from "react-native-web-swiper";
import { Button } from "react-native-elements";
import ActionHeader from "./ActionHeader";

const width = '80%';
const height = '40%';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  goToSignUp = () => {
    Actions.signup();
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#41225e" }}>
        <View style={{ flex: 1 }}>
          <Swiper
            loop
            timeout={-2.5}
            controlsProps={{
              dotActiveStyle: { backgroundColor: "red" },
              prevPos: false,
              nextPos: false
            }}
           >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                flexDirection:'column',
                justifyContent: "center",
                backgroundColor: "#41225e"
              }}
            >
              <View style={styles.boxInner}></View>


              <View style={styles.boxTextInner}><Text style={styles.boxTextInner1}>Video Resume</Text>
              <Text style={styles.boxTextInner2}>lkslkdjlksjdlkjsdlkdjlkjdslkdsjlksdjlkdsjlkdsjlkjsk</Text></View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#41225e"
              }}
            >
            <View style={styles.boxInner}></View>


              <Text style={styles.boxTextInner}>Slide 2</Text>
            
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#41225e"
              }}
            >
            <View style={styles.boxInner}></View>


              <Text style={styles.boxTextInner}>Slide 3</Text>
            </View>
          </Swiper>
          <View style={styles.btnContainer}>
            <Button
              buttonStyle={[styles.btn, styles.sinContainer]}
              title="Sign Up"
              titleStyle={{ color: "#ffffff" }}
              onPress={this.goToSignUp}
            />
            <Button
              buttonStyle={[styles.btn, styles.supContainer]}
              titleStyle={{ color: "#000000" }}
              title="Sign In"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginBottom: 30
  },
  sinContainer: {
    backgroundColor: "#d61c4d"
  },
  supContainer: {
    backgroundColor: "#ffffff"
  },
  btnContainer: {
    margin: 45,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  boxInner:{
    width,
    borderColor:'#ffffff',
    backgroundColor:'#7954A2',
    flex: 2,
    marginTop: 80,
    borderRadius:10,
    
  },
  boxTextInner:{
    flex: 1,
    color:'#ffffff',
    marginTop:30

  },
  boxTextInner1:{
   color:'#9E6E2E',
   fontSize: 20,
   fontWeight:'bold',
   textAlign:'center'
  },
  boxTextInner2:{
    color:'#ffffff'
  }

});
