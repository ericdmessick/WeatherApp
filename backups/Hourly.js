import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import HourlyForecastDetails from "../components/HourlyForecastDetails";

const Hourly = () => {
  return (
    //replace with FLATLIST
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
  )
};

const styles = StyleSheet.create({
  hourlyStyle: {
    borderWidth: 1,
    flex: 2,
    backgroundColor: "#800000",
    //flex: 1, 
    flexDirection: "row", 
    justifyContent: 'space-between'
    //width: 1000
  }
});

export default Hourly;