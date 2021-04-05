import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const NavIcons = ({ navigation }) => {
  return (
    <Ionicons
      name="home-outline"
      size={32}
      color="#794bc4"
      onPress={() => navigation.navigate("Home")}
    />
  );
};
