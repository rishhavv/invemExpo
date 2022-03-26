import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import StategySubCard from "./StrategySubCard";

const SignalCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgb(234,246,248)", "rgb(252,233,236)"]}
        style={styles.background}
      />
      <View>
        <View style={styles.cardLogoContainer}>
          <Image
            source={require("../../../assets/stockLogos/hdfcbank.png")}
            style={styles.logo}
          />
          <View style={styles.updateTimeContainer}>
            <MaterialIcons name="update" size={18} color="#BCC1C4" />
            <Text style={styles.textLightest}>54m ago</Text>
          </View>
        </View>
        <Text style={styles.cardName}>HDFC BANK LIMITED</Text>
        <Text style={styles.textLight}>BANKING</Text>
        <View>
          <View>
            <Text>₹ 1,436.80</Text>
            <Text>+ 177.45 (2.45%)</Text>
          </View>
          <Text>Charts</Text>
        </View>
        <StategySubCard />
        {/* <Button
          onPress={() => console.log("p1")}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => console.log("p1")}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("70%"),
    padding: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("70%"),
    borderRadius: 30,
  },
  cardLogoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    height: 70,
    width: 70,
    right: 10,
  },
  textLightest: {
    color: "#BCC1C4",
    alignItems: "center",
    marginTop: 2,
    marginLeft: 2,
    fontSize: 10,
  },
  updateTimeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  cardName: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  textLight: {
    color: "#959698",
    fontSize: 13,
  },
});

export default SignalCard;
