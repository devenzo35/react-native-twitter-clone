import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "../helpers/dimensions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={NavbarStyles.navbar}>
      <Ionicons
        name="list"
        size={32}
        color="#794bc4"
        onPress={() => navigation.navigate("Home")}
      />
      <Ionicons
        name="logo-twitter"
        size={32}
        color="#794bc4"
        onPress={() => navigation.navigate("Home")}
      />
      <Ionicons
        name="md-star-outline"
        size={32}
        color="#794bc4"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const NavbarStyles = StyleSheet.create({
  navbar: {
    backgroundColor: "#435058",
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
