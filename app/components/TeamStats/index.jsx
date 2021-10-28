import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

function TeamStats() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Players</Text>
        <Text style={styles.subTitle}>0 /15</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Remaining</Text>
        <Text style={styles.subTitle}>$100m</Text>
      </View>
    </View>
  );
}

export default TeamStats;
