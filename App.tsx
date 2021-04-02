import React from "react";
import Home from "./src/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "./src/components/screens/Search";
import { Notifications } from "./src/components/screens/Notifications";
import { Messages } from "./src/components/screens/Messages";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "./src/helpers/dimensions";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: (props: any) => {
            return (
              <View style={NavbarStyles.navbar}>
                <Text>Hola</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: "#1e262e",
            shadowColor: "#fff",
          },
          headerLeftContainerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#000",
            alignItems: "center",
            textAlign: "center",
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

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
