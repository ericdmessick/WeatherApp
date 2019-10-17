import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Search from "./Search.js";

import DrawerNavigator from "../navigator/DrawerNavigator";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.navigation}>
        <Search />
        <DrawerNavigator />
      </View>
    </View>
  );
};

//const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight, 
    backgroundColor: "#293340",
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  navigation: {
    paddingTop: 20
  }
});

export default Header;