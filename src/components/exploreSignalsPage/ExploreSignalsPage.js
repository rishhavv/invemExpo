import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../Header";
import SignalCard from "./SignalCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const windowHeight = Dimensions.get("window").height;

function ExploreSignalsScreen() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#5667FF"
        //barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <Header />
      <View style={style.container}>
        <FlatList
          data={arr}
          decelerationRate={"fast"}
          snapToInterval={windowHeight - hp("30%") + 20}
          snapToAlignment={"center"}
          showsVerticalScrollIndicator={false}
          contentInset={{
            left: 0,
            top: 30,
            right: 0,
            bottom: 30,
          }}
          renderItem={(data) => {
            return (
              <View style={style.card}>
                <SignalCard data={data} />
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#ffffff",
    marginBottom: hp("14%"),
  },
});

export default ExploreSignalsScreen;
