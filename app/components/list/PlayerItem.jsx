import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function PlayerItem({ item, color }) {
  return (
    <View style={styles.playerContainer}>
      <FontAwesome5 name="tshirt" size={35} color={color} />
      <Text style={styles.playerDetail}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  playerDetail: {
    color: "white",
    fontWeight: "600",
    fontSize: 10,
    backgroundColor: "#5c5c5c",
    padding: 2,
    paddingHorizontal: 6,
  },
});

export default PlayerItem;
