import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const StategySubCard = ({ data }) => {
  let testarr = [true, true, false, false, true, true, false, true];
  const renderLastRun = (x) => {
    return <Text style={styles.emoji}>{x ? "✅" : "🚫"}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.justifySpaceBetween, styles.mb10]}>
        <View style={[styles.flexColumn]}>
          <Text style={[styles.TextLight]}>WHY BUY THIS NOW</Text>
          <Text style={styles.textBig}>{data?.item?.reasonForBuying}</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.emoji}>🚀</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.justifySpaceBetween, styles.mb20]}>
        <View style={[styles.flexColumn]}>
          <Text style={[styles.TextLight, styles.mb10]}>Potential returns</Text>
          <Text style={[styles.textBiggest]}>
            {true ? "⬆️" : "⬇️"} {data?.item?.potentialReturn}x
          </Text>
        </View>
        <View>
          <Text style={[styles.TextLight, styles.mb10]}>Projected exit in</Text>
          <Text style={[styles.textBiggest]}>{data?.item?.projectedExit}</Text>
        </View>
      </View>
      <View style={[styles.flexgrow1, styles.justifySpaceBetween]}>
        <Text style={[styles.TextLight]}>Last 8 runs</Text>
        <View style={[styles.flexRow, styles.justifySpaceBetween]}>
          {data?.item?.lastRun.map((x) => {
            return renderLastRun(x);
          })}
        </View>
        <Text style={[styles.textLightest]}>
          That's a {data?.item?.winRate}% win-rate
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: hp("1%"),
    borderRadius: 10,
    width: "100%",
    height: hp("30%"),
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
    height: hp("5%"),
    width: hp("5%"),
    borderRadius: hp("5%") / 2,
    backgroundColor: "#F7F1FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("1%"),
  },
  flexColumn: {
    display: "flex",
    justifyContent: "space-between",
  },
  mb10: {
    marginBottom: 10,
  },
  textLightest: {
    color: "#BCC1C4",
  },
  flexgrow1: {
    flexGrow: 1,
  },
  mb20: {
    marginBottom: hp("1.5%"),
  },
});

export default StategySubCard;
