import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class ShareButton extends React.Component {
  render() {
    return (
      <Ionicons
        name= "md-share"
        color="white"
        size={32}
        style={styles.shareIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    )
  }
}

const styles = StyleSheet.create({
  shareIcon: {
    marginHorizontal: 10,
  }
})