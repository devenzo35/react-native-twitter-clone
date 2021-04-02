import React, { FC } from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";

import { Navbar } from "./components/Navbar";
import { Navigation } from "./components/Navigation";

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <Navbar />
      <View>
        {/* <FontAwesome5
          name={'comments'}
          size={200}
          onPress={() => navigation.navigate('Search')}
        /> */}
        <Text
          onPress={() => navigation.navigate("Search")}
          style={styles.textStyle}
        >
          Storiline
        </Text>
      </View>
      <Navigation navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: 500,
    height: 500,
  },
  background: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default Home;
