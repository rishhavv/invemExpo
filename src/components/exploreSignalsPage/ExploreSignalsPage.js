import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Header from "../Header";
import SignalCard from "./SignalCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import staticData from "./StaticData";

function ExploreSignalsScreen() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const [cardData, setCardData] = useState();

  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  const fetchData = () => {
    setCardData(staticData);
  };

  const renderActivityIndicator = () => {
    return (
      <View style={style.actIndicator}>
        <ActivityIndicator size={50} color="#5667FF" />
      </View>
    );
  };

  const renderCards = () => {
    return (
      <View style={style.container}>
        <FlatList
          data={cardData}
          decelerationRate={"fast"}
          snapToInterval={hp("70%") + hp("3%")}
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
          keyExtractor={(item) => {
            item.headerName;
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <StatusBar animated={true} backgroundColor="#5667FF" hidden={false} />
      <Header />
      {cardData ? renderCards() : renderActivityIndicator()}
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    paddingHorizontal: wp("5%"),
    marginBottom: hp("3%"),
  },
  container: {
    backgroundColor: "#ffffff",
    marginBottom: hp("14%"),
  },
  actIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: hp("40%"),
  },
});

export default ExploreSignalsScreen;
