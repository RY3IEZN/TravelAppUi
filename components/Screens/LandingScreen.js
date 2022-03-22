/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent />
      <ImageBackground
        style={{ flex: 1, backgroundColor: "black" }}
        source={require("../../assets/onboardImage.jpg")}
      >
        <View style={styles.details}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.title}>the world with us</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View style={styles.btn}>
              <Text style={styles.btntxt}>Let's Go</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  btntxt: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "white",
    height: 50,
    width: 120,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  container: {
    flex: 1,
  },
  subtitle: {
    color: "white",
    fontSize: 15,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  startbtn: {
    height: 50,
    width: 120,
    backgroundColor: "white",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});

export default LandingScreen;
