import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "../helpers/dimensions";

export const Navbar = () => {
  return (
    <View style={NavbarStyles.navbar}>
      <Text>Avatar</Text>
      <Text>Home</Text>
    </View>
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
    justifyContent: "space-between",
    padding: 10,
    position: "relative",
    top: 0,
  },
});
