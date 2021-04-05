import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Search: FC = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1e262e",
    flex: 1,
  },
});
