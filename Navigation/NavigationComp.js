import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupComp from "../Components/Screens/Seller/Registration/SignupComp";
import LoginComp from "../Components/Screens/Seller/Registration/LoginComp";
import RegistrationForm from "../Components/Screens/Seller/Screens/RegistrationForm";
import { auth } from "../Firebase/FirebaseConfig";
import MainScreen from "../Components/Screens/Seller/Screens/MainScreen";

const NavigationComp = () => {
  const [initialRoute, setinitialRoute] = useState("Signup");
  const user = auth.currentUser;

  if (user) {
    setinitialRoute("ResturantRegistrationForm");
    console.log("user Online ho gya ha");
  } else {
    console.log("user Offline ha");
  }
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ResturantSignup" component={SignupComp} />
      <Stack.Screen name="ResturantLogin" component={LoginComp} />
      <Stack.Screen
        name="ResturantRegistrationForm"
        component={RegistrationForm}
      />
      <Stack.Screen name="ResturantMainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default NavigationComp;

const styles = StyleSheet.create({});
