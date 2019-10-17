import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Platform, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeScreen from "./screens/HomeScreen";
import LinksScreen from "./screens/LinksScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MenuDrawer from "./components/MenuDrawer";

const WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

//config must be before creating the drawer
const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: ({ navigation }) => {
    return(<MenuDrawer navigation={navigation} />)
  },
  drawerPosition: 'right'
}

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Links: {
      screen: LinksScreen
    },
    Settings: {
      screen: SettingsScreen
    },
  },
  DrawerConfig
);



const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});