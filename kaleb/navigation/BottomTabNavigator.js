import * as React from "react";
import { TouchableOpacity } from "react-native";
import IOSIcon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import Home from "../screens/Home";
import ComponentList from "../screens/ComponentList";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      fontFamily: "comfortaa"
    },
    headerStyle: {
      backgroundColor: "#FFDA75"
    }
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: "#111",
        inactiveTintColor: "#777",
        labelStyle: {
          fontSize: 15,
          fontFamily: "comfortaa"
        }
      }}>
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-home' />
        }}
      />
      <BottomTab.Screen
        name='Components'
        component={ComponentList}
        options={{
          title: "Components",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-list-box' />
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Kaleb";
    case "Components":
      return "Components";
  }
}
