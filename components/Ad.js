import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Ad = () => {
  return (
    <View style={styles.adStyle}>
      <Text>Ad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adStyle: {
    borderWidth: 1,
    flex: 1
  }
});

export default Ad;