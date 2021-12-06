import "react-native-gesture-handler";
import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import NavigationComp from "./Navigation/NavigationComp";
export const StoreData = createContext();
export default function App() {
  const getUserData = (data) => {
    console.log("loginUSerData", data);
  };

  const ContextApiData = {
    getUserData,
  };

  return (
    <StoreData.Provider value={ContextApiData}>
      <NavigationContainer>
        <PaperProvider>
          <NavigationComp />
        </PaperProvider>
      </NavigationContainer>
    </StoreData.Provider>
  );
}
