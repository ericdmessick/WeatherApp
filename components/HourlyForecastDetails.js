import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HourlyForecastDetails = ({ time }) => {
  return (
    <View style={styles.hourlyForecast}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  hourlyForecast: {
    //flex: 1,
    borderColor: "white",
    backgroundColor: "#800000",
    borderWidth: 2,
    width: 50
  },
  timeText: {
    color: "white"
  }
});

export default HourlyForecastDetails;