import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    title: "Custom Rain text",
    subtitle: "Custom rain subtitle",

  },
  Clear: {
    title: "Clear and Hot",
    subtitle: "Custom clear subtitle",
    
  },
  Thunderstorm: {
    title: "Custom thunderstorm text",
    subtitle: "Custom thunderstorm subtitle",
    
  },
  Mist: {
    title: "Custom mist text",
    subtitle: "Custom mist subtitle",
    
  },

  Clouds: {
    title: "Custom clouds text",
    subtitle: "Custom clouds subtitle",
  },

  Snow: {
    title: "Custom snow text",
    subtitle: "Custom snow subtitle",
    
  },

  Drizzle: {
    title: "Custom drizzle text",
    subtitle: "Custom drizzle subtitle",
    
  }
}

const Forecast = ({ temp, weatherName }) => {
  return ( 
    <View style={styles.forecastContainer}> 
      <View style={styles.forecastTopContainer}>
        <View>
          <Text style={styles.quoteText} >{weatherCases[weatherName].subtitle}</Text>
        </View>
      </View>

      <View style={styles.forecastBottomContainer}>

        <View style={styles.forecastImageContainer}>
          <Text>IMAGE</Text>
        </View>
        <View style={styles.forecastTempContainer}>
          <Text>City, State</Text>
          <Text>{temp}°</Text>
          <Text>{weatherCases[weatherName].title}</Text>
          <Text>PERC</Text>
        </View>
      </View>
    </View>
  );
}

Forecast.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({

  forecastContainer: {
    borderWidth: 1,
    flex: 6
  },

  forecastTopContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },

  quoteText: {
    textAlign: "center"
  },

  forecastBottomContainer: {
    borderWidth: 1,
    flex: 2,
    borderColor: "black",
    flexDirection: "row"
  },

  forecastImageContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 3
  },

  forecastTempContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 2
  },

});

export default Forecast;
