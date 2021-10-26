import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function ButtonApp({ children, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },
});

export default ButtonApp;
