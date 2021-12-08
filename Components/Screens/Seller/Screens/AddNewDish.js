import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { StoreData } from "../../../../App";
import { Video, AVPlaybackStatus } from "expo-av";

const AddNewDish = () => {
  const { userLoginData } = useContext(StoreData);
  const video = React.useRef(null);

  console.log(userLoginData);
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Appbar.Header
        statusBarHeight={40}
        style={{
          backgroundColor: "#cf0662",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Appbar.Content
          title={userLoginData.resturantName.toUpperCase()}
          subtitle={userLoginData.resturantArea.toUpperCase()}
          style={{ justifyContent: "center", alignItems: "center" }}
          // titleStyle={{ textAlign: "center",fontSize:"20" }}
          titleStyle={{ fontSize: 30 }}
          subtitleStyle={{ fontSize: 20 }}
        />
      </Appbar.Header>
      <View
        style={{
          // width: "100%",
          height: "100%",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View>
          <Video
            ref={video}
            style={styles.video}
            source={require("../../../../Asset/addDish.mp4")}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          {/* <Text style={{ fontSize: 40 }}>ADD A NEW DISH</Text> */}
        </View>
      </View>
    </View>
  );
};

export default AddNewDish;

const styles = StyleSheet.create({});
