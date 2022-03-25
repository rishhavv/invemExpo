import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SvgUri } from "react-native-svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <SvgUri
        width={wp("20%")}
        uri="https://uploads-ssl.webflow.com/620a986c2f1d53657fa1614f/6214ad039a9e804ea2f96201_Invesmint%20blue.svg"
      />
      <Text style={styles.pageName}>Signals</Text>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp("8%"),
    alignItems: "center",
    padding: hp("1%"),
    backgroundColor: "#ffffff",
  },
  pageName: {
    flexGrow: 1,
    textAlign: "center",
    marginRight: wp("10%"),
  },
});

export default Header;
