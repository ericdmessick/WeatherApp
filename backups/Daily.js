import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import DailyForecastDetails from "../components/DailyForecastDetails";

const Daily = () => {
  return (
        //replace with FLATLIST
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
  );
};

const styles = StyleSheet.create({
  dailyStyle: {
    borderWidth: 1,
    flex: 2,
    backgroundColor: "#800000",
    flexDirection: "row", 
    justifyContent: 'space-between'
  }
});

export default Daily;