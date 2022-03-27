import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../Header";
import SignalCard from "./SignalCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Toast from "react-native-toast-message";
import staticData from "./StaticData";
import Modal from "react-native-modal";

function ExploreSignalsScreen() {
  const [rerender, setRerender] = useState(0);
  const [cardData, setCardData] = useState();
  const [quantity, setQuantity] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  const fetchData = () => {
    setCardData(staticData);
  };

  const passCard = async (i, name) => {
    console.log("called");
    let temp = await cardData;
    await temp.splice(i, 1);
    setCardData(temp);
    setRerender(rerender + 1);
    Toast.show({
      type: "success",
      text1: `${name} Passed! 👋`,
      text2: `${name} thrown out of your feed 👍`,
    });
  };

  const renderActivityIndicator = () => {
    return (
      <View style={style.actIndicator}>
        <ActivityIndicator size={50} color="#5667FF" />
      </View>
    );
  };

  const handleBuyButton = () => {
    setQuantity(0);
    setModalVisible(!modalVisible);
  };

  const renderCards = () => {
    return (
      <View style={style.container}>
        <FlatList
          data={cardData}
          extraData={rerender}
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
                <SignalCard
                  data={data}
                  passCard={passCard}
                  handleBuyButton={handleBuyButton}
                />
              </View>
            );
          }}
          keyExtractor={(item) => {
            item.headerName;
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          backdropOpacity={0.52}
          visible={modalVisible}
          style={style.Modal}
          swipeDirection={"down"}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
        >
          <View
            style={[style.ModalContainer, style.justifyContentspaceBetween]}
          >
            <Text style={style.buyHeader}>Buy</Text>
            <View
              style={[
                style.flexRow,
                style.justifyContentspaceBetween,
                style.flexGrow1,
              ]}
            >
              <Text style={[style.fontMidSize]}>Quantity:</Text>
              <View style={[style.flexRow]}>
                <TouchableOpacity
                  onPress={() => {
                    quantity > 0 ? setQuantity(quantity - 1) : {};
                  }}
                >
                  <Text style={[style.fontMidSize, style.indecbutton]}>-</Text>
                </TouchableOpacity>
                <Text
                  style={[style.fontMidSize, style.alignCenter, style.mx2p]}
                >
                  {quantity}
                </Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Text style={[style.fontMidSize, style.indecbutton]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={[style.buyButton, style.align]}>
              <Text style={[style.fontMidSize, style.textWhite]}>Buy 💸</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View>
      <StatusBar animated={true} backgroundColor="#5667FF" hidden={false} />
      <Header />
      {cardData ? renderCards() : renderActivityIndicator()}
      <Toast />
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
  Modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  ModalContainer: {
    backgroundColor: "#fff",
    padding: hp("2%"),
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 5,
    width: "100%",
    height: hp("40%"),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  justifyContentspaceBetween: {
    justifyContent: "space-between",
  },
  buyHeader: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  fontMidSize: {
    fontSize: 20,
  },
  buyButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: hp("1.5%"),
    borderRadius: 8,
    backgroundColor: "#5667FF",
  },
  textWhite: {
    color: "white",
  },
  indecbutton: {
    backgroundColor: "#e3e3e3",
    padding: 10,
    borderRadius: 8,
  },
  flexGrow1: {
    flexGrow: 1,
    alignItems: "center",
  },
  alignCenter: {
    alignSelf: "center",
  },
  mx2p: {
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
  },
});

export default ExploreSignalsScreen;
