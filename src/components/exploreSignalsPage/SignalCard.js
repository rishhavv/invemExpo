import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const SignalCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgb(234,246,248)", "rgb(252,233,236)"]}
        style={styles.background}
      />
      <Text>Yes</Text>
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
});

export default SignalCard;
