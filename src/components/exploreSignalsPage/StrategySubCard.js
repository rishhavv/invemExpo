import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const StategySubCard = () => {
  let testarr = [true, true, false, false, true, true, false, true];
  const renderLastRun = (x) => {
    return <Text style={styles.emoji}>{x ? "✅" : "🚫"}</Text>;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.flexRow,
          styles.justifySpaceBetween,
          styles.subContainer,
          styles.mb10,
        ]}
      >
        <View style={[styles.flexColumn]}>
          <Text style={[styles.TextLight]}>WHY BUY THIS NOW</Text>
          <Text style={styles.textBig}>Buy The Dip</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.emoji}>🚀</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.justifySpaceBetween, styles.mb10]}>
        <View style={[styles.flexColumn]}>
          <Text style={[styles.TextLight, styles.mb10]}>Potential returns</Text>
          <Text style={[styles.textBiggest]}>{true ? "⬆️" : "⬇️"} 1.13x</Text>
        </View>
        <View>
          <Text style={[styles.TextLight, styles.mb10]}>Projected exit in</Text>
          <Text style={[styles.textBiggest]}>3 mo</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.textLightest]}>Last 8 runs</Text>
        <View style={[styles.flexRow, styles.justifySpaceBetween]}>
          {testarr.map((x) => {
            return renderLastRun(x);
          })}
        </View>
      </View>
      <Text>That's a 76% win-rate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    height: "50%",
    backgroundColor: "#ffffff",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  TextLight: {
    color: "#747678",
  },
  textBig: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textBiggest: {
    fontSize: 20,
    fontWeight: "bold",
  },
  emoji: {
    fontSize: 20,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#F7F1FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  flexColumn: {
    display: "flex",
    justifyContent: "space-between",
  },
  subContainer: {
    marginBottom: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  textLightest: {
    color: "#BCC1C4",
  },
});

export default StategySubCard;
