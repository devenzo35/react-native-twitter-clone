import React from "react";
import Home from "../Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "../screens/Search";
import { Notifications } from "../screens/Notifications";
import { Messages } from "../screens/Messages";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "../../helpers/dimensions";
import { Navigation } from "../Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export const AppRouter = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.background}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
      <Navigation />
    </SafeAreaView>
  );
};

const NavbarStyles = StyleSheet.create({
  navbar: {
    borderBottomWidth: 1,
    borderBottomColor: "#435058",
    width: dimensions.screenWidth,
    height: (dimensions.screenHeight * 8) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    position: "relative",
    top: 0,
    color: "white",
  },
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1e262e",
  },
  textStyle: {
    fontSize: 30,
    color: "#fff",
  },
  storiline: {},
});
