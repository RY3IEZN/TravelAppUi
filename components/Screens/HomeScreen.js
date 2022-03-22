/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import places from "../data/places";

const { width } = Dimensions.get("screen");

function HomeScreen({ navigation }) {
  const categoryIcons = [
    <Icon name="flight" size={25} color="#04555c" />,
    <Icon name="beach-access" size={25} color="#04555c" />,
    <Icon name="near-me" size={25} color="#04555c" />,
    <Icon name="place" size={25} color="#04555c" />,
  ];

  const ListCategories = () => {
    return (
      <View style={styles.categorycontainer}>
        {categoryIcons.map((icon, index) => (
          <View style={styles.iconContainer} key={index}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground source={place.image} style={styles.card}>
          <Text style={styles.subtitle}>{place.name}</Text>

          <View style={styles.cardicons}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="place" size={25} color="white" />
              <Text style={styles.subtitle}>{place.location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={25} color="gold" />
              <Text style={styles.subtitle}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground source={place.image} style={styles.rmimage}>
        <Text style={styles.subtitle}>{place.name}</Text>

        <View style={styles.cardicons}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="place" size={25} color="white" />
            <Text style={styles.subtitle}>{place.location}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={25} color="gold" />
            <Text style={styles.subtitle}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headersection}>
        <View style={styles.headericon}>
          <Icon name="sort" size={30} color="white" />
          <Icon name="notifications-none" color="white" size={30} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.headersection}>
          <View style={styles.headertitle}>
            <Text style={styles.title}> Explore the</Text>
            <Text style={styles.subtitle}> beautiful places</Text>
            <View style={styles.inputcontainer}>
              <Icon name="search" size={25} />
              <TextInput placeholder="Search places" />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={styles.subtitle2}>Places</Text>
        <View>
          <FlatList
            horizontal
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
        </View>
        <Text style={styles.subtitle2}>Recommended</Text>
        <View>
          <FlatList
            horizontal
            data={places}
            snapToInterval={width - 20}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardicons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
    marginHorizontal: 5,
  },
  rmimage: {
    height: 190,
    width: width - 40,
    marginHorizontal: 10,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    height: 220,
    width: width / 2,
    marginHorizontal: 10,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: "#e1e8e9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categorycontainer: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputcontainer: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    top: 60,
    elevation: 20,
  },
  subtitle2: {
    color: "#04555c",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  headericon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headersection: {
    paddingVertical: 40,
    justifyContent: "space-between",
    backgroundColor: "#04555c",
    flex: 1,
  },
  headertitle: {
    marginHorizontal: 20,
  },
  headertitle2: {
    marginHorizontal: 20,
    alignItems: "center",
    position: "relative",
    top: 60,
  },
});

export default HomeScreen;
