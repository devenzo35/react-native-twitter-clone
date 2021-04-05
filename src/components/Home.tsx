import React, { FC, useRef, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";
import { Navbar } from "./Navbar";
import { navigationView } from "./navigationView";

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const drawer = useRef(null);
  return (
    <SafeAreaView>
      <Navbar />
      <DrawerLayoutAndroid
        ref={drawer}
        renderNavigationView={navigationView}
        drawerBackgroundColor="rgba(0,0,0,1)"
        drawerWidth={400}
        drawerPosition="right"
      />
      <View>
        <Text
          onPress={() => navigation.navigate("Search")}
          style={styles.textStyle}
        >
          Storiline
        </Text>
        <Button
          title="Open drawer"
          onPress={() => (drawer.current as any).openDrawer()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "#fff",
  },
});

export default Home;
