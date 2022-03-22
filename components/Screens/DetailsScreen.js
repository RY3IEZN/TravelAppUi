/** @format */

import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function DetailsScreen({ navigation, route }) {
  const place = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="white"
            onPress={navigation.goBack}
          />
          <Icon
            name="more-vert"
            size={30}
            color="white"
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.imagedetails}>
          <Text style={styles.detailtext}>{place.name}</Text>
          <Icon name="star" size={30} color="gold" />
        </View>
      </ImageBackground>
      <View style={styles.detailscontainer}>
        <View style={styles.iconctn}>
          <Icon name="favorite" size={30} color="red" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="place" size={30} color="#04555c" />
          <Text style={styles.locationtxt}>{place.location}</Text>
        </View>
        <Text style={styles.abttxt}>About the trip</Text>
        <Text style={styles.detailstxt}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.detailstxts}>{place.price}/per day</Text>
        <View style={styles.btn}>
          <Text style={styles.btntxt}>Book Now</Text>
        </View>
      </View>
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
    width: 150,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  footer: {
    backgroundColor: "#04555c",
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  detailstxts: {
    fontSize: 15,
    color: "white",
    marginTop: 5,
  },
  detailstxt: {
    fontSize: 15,
    color: "black",
    marginTop: 5,
  },
  abttxt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginTop: 20,
  },
  locationtxt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#04555c",
  },
  iconctn: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: "white",
    borderRadius: 30,
    right: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailscontainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 0.3,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  detailtext: {
    width: "70%",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  imagedetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});

export default DetailsScreen;
