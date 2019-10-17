import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView, FlatList, TextInput } from "react-native";
import { Container, Header, Left, Icon, Right, Button, Body, Content } from "native-base";

import AlertButton from "../components/AlertButton";
//import Search from "../components/Search";
import ShareButton from "../components/ShareButton";
import MenuButton from "../components/MenuButton";
import HourlyForecastDetails from "../components/HourlyForecastDetails";
import Forecast from "../components/Forecast";
import DailyForecastDetails from "../components/DailyForecastDetails";

const API_KEY = "e0adc7d21d307840fb7bfb4a9ac07839";

export default class HomeScreen extends React.Component {

  state = {
      temperature: null,
      name: null,
      isLoaded: false,
      error: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      }
    );
  }

  _getWeather= (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      this.setState({
        temperature:json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
    });
  };
  
  render() {

    const { temperature, name, error, isLoaded } = this.state;
    console.log(temperature);
    console.log(name);


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <AlertButton />
          <TextInput placeholder="Location" style={styles.searchBackground} />
          <ShareButton />
          <MenuButton style={styles.menubutton} navigation={this.props.navigation} />
        </ View >
        <ScrollView 
          contentContainerStyle={styles.hourlyStyle} 
          horizontal={true}
          //alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
        >
          <HourlyForecastDetails time="NOW"/>
          <HourlyForecastDetails time="1AM"/>
          <HourlyForecastDetails time="2AM"/>
          <HourlyForecastDetails time="3AM"/>
          <HourlyForecastDetails time="4AM"/>
          <HourlyForecastDetails time="5AM"/>
          <HourlyForecastDetails time="6AM"/>
          <HourlyForecastDetails time="7AM"/>
          <HourlyForecastDetails time="8AM"/>
          <HourlyForecastDetails time="9AM"/>
          <HourlyForecastDetails time="10AM"/>
          <HourlyForecastDetails time="11AM"/>
        </ScrollView>

        <Forecast weatherName={name} temp={Math.floor(temperature - 273.15)} />
        
        <ScrollView contentContainerStyle={styles.dailyStyle} 
          horizontal={true}
          //alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          >
          <DailyForecastDetails day="Today" />
          <DailyForecastDetails day="TUE" />
          <DailyForecastDetails day="WED" />
          <DailyForecastDetails day="THU" />
          <DailyForecastDetails day="FRI" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    //paddingTop: StatusBar.currentHeight, 
    backgroundColor: "#293340",
    //borderWidth: 1,
    //height: 100
    height: 75,
    flexDirection: "row",
    //space around also allows for space before the first item and after the last
    justifyContent:'space-around',
    alignItems:'center'
  },

  searchBackground: {
   backgroundColor: "#F0EEEE",
   height: 40,
   borderRadius : 5,
   borderColor: "gray",
   marginHorizontal: 10,
   width: 170,
  },

  hourlyStyle: {
    borderWidth: 1,
    flex: 2,
    backgroundColor: "#800000",
    //flex: 1, 
    flexDirection: "row", 
    justifyContent: 'space-between'
    //width: 1000
  },
  
  dailyStyle: {
    borderWidth: 1,
    flex: 2,
    backgroundColor: "#800000",
    flexDirection: "row", 
    justifyContent: 'space-between'
  }
});