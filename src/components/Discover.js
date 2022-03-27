import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./Header";

const Discover = () => {
  return (
    <View>
      <Header />
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Search for investing opportunities"
          multiline={false}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    marginTop: hp("1%"),
    width: "95%",
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#5667FF",
    marginRight: 5,
  },
});

export default Discover;
