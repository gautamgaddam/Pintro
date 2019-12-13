import * as React from "react";
import {
  Button,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Actions } from "react-native-router-flux";

export default class ImagePickerExample extends React.Component {
  state = {
    image: null
  };

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.skipColumn}>
          <TouchableOpacity onPress={this.skipImage}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ellipseStack}
            onPress={this._pickImage}
          >
            {image !== null ? (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            ) : (
              <Svg viewBox="0 0 100.00 100.00" style={styles.ellipse}>
                <Ellipse
                  strokeWidth={1}
                  fill="rgba(13,33,121,1)"
                  stroke="rgba(230, 230, 230,1)"
                  cx={50}
                  cy={50}
                  rx={50}
                  ry={50}
                ></Ellipse>
              </Svg>
            )}

            <EntypoIcon
              name="controller-record"
              style={styles.icon4}
            ></EntypoIcon>
            <FeatherIcon name="plus" style={styles.icon5}></FeatherIcon>
          </TouchableOpacity>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon}
          ></EntypoIcon>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            Add profile photo
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  skipImage = () => {
    Actions.moreDetails();
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: "base64"
      });
      imageString = "'data:image/jpeg;base64," + base64 + "'";
      this.setState({
        image: result.uri,
        type: result.uri.substring(result.uri.lastIndexOf(".")),
        imageString: base64,
        email: global.email
      });
    }
  };

  saveData = async () => {
    fetch(
      "http://ec2-52-15-192-138.us-east-2.compute.amazonaws.com:6222/upload-img",
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
          Actions.moreDetails();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  skip: {
    color: "#121212",
    marginLeft: 184
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  icon4: {
    top: 58,
    left: 60,
    position: "absolute",
    color: "#ffffff",
    fontSize: 42
  },
  icon5: {
    top: 65,
    left: 66,
    position: "absolute",
    color: "rgba(98,34,56,1)",
    fontSize: 30
  },
  ellipseStack: {
    width: 102,
    height: 100,
    marginTop: 101
  },
  icon: {
    color: "rgba(16,44,137,1)",
    fontSize: 40,
    marginTop: 262,
    marginLeft: 177
  },
  skipColumn: {
    width: 217,
    marginTop: 145,
    marginLeft: 128
  },
  skipColumnFiller: {
    flex: 1
  },
  loremIpsum: {
    color: "#121212",
    marginBottom: 406,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    padding: 10
  },
  submitButton: {
    backgroundColor: "#472965"
  }
});
