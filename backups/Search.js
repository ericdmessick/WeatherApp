import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Search = () => {
  return (
      <TextInput placeholder="Location" style={styles.searchBackground} />
  );
};

const styles = StyleSheet.create({
  searchBackground: {
   backgroundColor: "#F0EEEE",
   height: 40,
   borderRadius : 5,
   borderColor: "gray",
   marginHorizontal: 10,
   width: 170,
  }
});

export default Search;