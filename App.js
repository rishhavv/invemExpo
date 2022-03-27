import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreSignalsScreen from "./src/components/exploreSignalsPage/ExploreSignalsPage";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Discover from "./src/components/Discover";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Work in progress ⚠️</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Signals"
          options={{
            tabBarLabel: "Signals",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="bolt" size={24} color={color} />
            ),
          }}
          component={ExploreSignalsScreen}
        />
        <Tab.Screen
          name="Discover"
          options={{
            tabBarLabel: "Discover",
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
          component={Discover}
        />
        <Tab.Screen
          name="Me"
          options={{
            tabBarLabel: "Me",
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 30, height: 30 }}
                source={{ uri: "https://robohash.org/invesmint" }}
              />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
