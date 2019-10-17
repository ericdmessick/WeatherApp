import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
//import {SafeAreaView} from 'react-navigation';

//import from components
import Hourly from './components/Hourly.js';
import Trumpcast from './components/Trumpcast.js';
import Daily from './components/Daily.js';
import Ad from './components/Ad.js';

//import icons

//import API

export default class HomeScreen extends React.Component {
  render() {
    return (
      <AppDrawerNavigation />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({

  viewStyle: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch',
  }
});