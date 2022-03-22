/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../Screens/LandingScreen";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";

function Navigators(props) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LandingScreen"
          component={LandingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailsScreen"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;
