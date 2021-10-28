import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Screen from "../components/ui/Screen";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import ButtonApp from "../components/ui/ButtonApp";

function HomeScreen() {
  const snapPoints = ["25%", "50%"];

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
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View>
          <Text>Awesome React Native</Text>
        </View>
      </BottomSheet>
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
