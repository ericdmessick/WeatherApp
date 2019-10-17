import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class AlertButton extends React.Component {
  render() {
    return (
      <Feather
        name= "alert-triangle"
        color="white"
        size={40}
        style={styles.alertIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    )
  }
}

const styles = StyleSheet.create({
  alertIcon: {
    marginHorizontal: 10,
  }
})