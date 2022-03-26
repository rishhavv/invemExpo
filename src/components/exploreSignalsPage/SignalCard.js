import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
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
        colors={["rgb(234,246,248)", "rgb(252,233,236)"]}
        style={styles.background}
      />
      <View>
        <View style={styles.cardLogoContainer}>
          <Image source={{ uri: data?.item?.imgloc }} style={styles.logo} />
          <View style={styles.flexRow}>
            <MaterialIcons name="update" size={18} color="#BCC1C4" />
            <Text style={styles.textLightest}>
              {data?.item?.lastUpdated} ago
            </Text>
          </View>
        </View>
        <Text style={styles.cardName}>{data?.item?.headerName}</Text>
        <Text style={[styles.textLight, styles.bottomMargin2x]}>
          {data?.item?.type}
        </Text>
        <View style={[styles.flexRow, styles.justifySpaceBetween, styles.mb30]}>
          <View>
            <Text style={[styles.textMediumDark]}>₹ {data?.item?.price}</Text>
            <Text style={[styles.textLight]}>
              + ₹{data?.item?.inOrDec} ({data?.item?.byPercentage}%)
            </Text>
          </View>
          <Text>Charts</Text>
        </View>
        <StategySubCard data={data} />
        <View style={[styles.flexRow, styles.mt10]}>
          <TouchableOpacity
            style={[styles.button, styles.buttonSmall]}
            onPress={() => console.log(data?.item?.imgloc)}
          >
            <Text style={[styles.flexRow]}>👋 Pass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBig]}>
            <Text style={styles.textWhite}>👍 Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("70%"),
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("2%"),
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
    marginBottom: wp("3%"),
  },
  logo: {
    aspectRatio: 2 / 2,
    width: "20%",
  },
  textLightest: {
    color: "#BCC1C4",
    alignItems: "center",
    top: 2,
    left: 2,
    fontSize: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  cardName: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: hp("1%"),
  },
  textLight: {
    color: "#747678",
    fontSize: 13,
  },
  bottomMargin2x: {
    marginBottom: hp("2%"),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1.5%"),
    borderRadius: 8,
  },
  buttonSmall: {
    width: wp("25%"),
    backgroundColor: "#ffffff",
    marginRight: wp("5%"),
  },
  buttonBig: {
    flex: 1,
    backgroundColor: "#000000",
  },
  textWhite: {
    color: "white",
  },
  textMediumDark: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  mb30: {
    marginBottom: hp("3%"),
  },
  mt10: {
    marginTop: hp("1%"),
  },
});

export default SignalCard;
