import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DailyForecastDetails = ({ day }) => {
  return (
    <View style={styles.hourlyForecast}>
      <Text style={styles.dayText}>{day}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  hourlyForecast: {
    //flex: 1,
    borderColor: "white",
    backgroundColor: "#800000",
    borderWidth: 2,
    width: 80
  },
  dayText: {
    color: "white"
  }
});

export default DailyForecastDetails;