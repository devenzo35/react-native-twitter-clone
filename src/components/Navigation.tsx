import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { dimensions } from "../helpers/dimensions";
import { Ionicons } from "@expo/vector-icons";

export const Navigation = ({ navigation }: any) => {
  console.log("object");

  return (
    <>
      <View style={NavigationStyles.navbar}>
        <Ionicons
          name="home-outline"
          size={32}
          color="#794bc4"
          onPress={() => navigation.navigate("Home")}
        />
        <Ionicons
          name="search"
          size={32}
          color="#fff"
          onPress={() => navigation.navigate("Search")}
        />
        <Ionicons
          name="md-notifications-outline"
          size={32}
          color="#fff"
          onPress={() => navigation.navigate("Notifications")}
        />
        <Ionicons
          name="mail-outline"
          size={32}
          color="#fff"
          onPress={() => navigation.navigate("Messages")}
        />
      </View>
    </>
  );
};

const NavigationStyles = StyleSheet.create({
  navbar: {
    backgroundColor: "#1e262e",
    borderTopWidth: 1,
    borderTopColor: "#435058",
    width: dimensions.screenWidth,
    height: (dimensions.screenHeight * 8) / 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    bottom: 0,
  },
});
