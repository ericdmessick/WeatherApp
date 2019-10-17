import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { DrawerItems, createAppContainer } from "react-navigation";
//import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const Container = createAppContainer(AppDrawerNavigator);

const AppDrawerNavigator = createDrawerNavigator ({
  Home: HomeScreen,
  Settings: SettingsScreen
}, {
  contentComponent: CustomDrawerComponent
})

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height:150, backgroundColor: "white" }}>
      <Image source={require('./assets/snack-icon.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)



export default Container;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  }
});