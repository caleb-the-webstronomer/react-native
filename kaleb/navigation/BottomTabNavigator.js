import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import Home from "../screens/Home";
import ComponentList from "../screens/ComponentList";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

class BottomTabNavigator extends React.Component {
  render() {
    return (
      <BottomTab.Navigator
        initialRouteName={"Home"}
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
}

class StackNavigatorz extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={BottomTabNavigator} />
      </Stack.Navigator>
    );
  }
}

export const BTab: () => React$Node = () => {
  return <BottomTabNavigator />;
};

export const STab: () => React$Node = () => {
  return <StackNavigatorz />;
};
