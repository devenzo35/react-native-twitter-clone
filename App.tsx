import React from "react";
import Home from "./src/components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "./src/components/screens/Search";
import { Notifications } from "./src/components/screens/Notifications";
import { Messages } from "./src/components/screens/Messages";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "./src/helpers/dimensions";
import { Navigation } from "./src/components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppRouter } from "./src/components/router/AppRouter";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={AppRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
