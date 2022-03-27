import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const StategySubCard = ({ data }) => {
  const renderLastRun = (x) => {
    return (
      <Text style={styles.emoji}>
        {x ? <AntDesign name="checkcircleo" size={24} color="green" /> : "🚫"}
      </Text>
    );
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
      <View style={[styles.flexRow, styles.justifySpaceBetween, styles.mb30]}>
        <View style={[styles.flexColumn]}>
          <Text style={[styles.TextLight, styles.mb10]}>Potential returns</Text>
          <Text style={[styles.textBiggest]}>
            {true ? "⬆️" : "⬇️"} {data?.item?.potentialReturn}x
          </Text>
        </View>
        <View>
          <Text style={[styles.TextLight, styles.mb10]}>Projected exit in</Text>

          <Text style={[styles.textBiggest, styles.justifySpaceAround]}>
            <Ionicons
              name="md-exit-outline"
              size={24}
              color="black"
              style={styles.svg}
            />
            {data?.item?.projectedExit}
          </Text>
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
  mb30: {
    marginBottom: hp("3%"),
  },
  svg: {
    marginTop: 5,
  },
  justifySpaceAround: {
    justifyContent: "space-around",
  },
  tickmark: {
    aspectRatio: 1 / 1,
  },
});

export default StategySubCard;
