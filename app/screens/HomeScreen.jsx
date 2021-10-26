import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/ui/Screen";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import ButtonApp from "../components/ui/ButtonApp";

function HomeScreen() {
  const viewPlayer = () => {
    console.log("Players");
  };
  return (
    <Screen style={styles.container}>
      <TeamStats />
      <Field />
      <ButtonApp onPress={viewPlayer} style={styles.viewButton}>
        View Players
      </ButtonApp>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CCF4D",
  },
  viewButton: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    marginTop: "auto",
  },
});

export default HomeScreen;
