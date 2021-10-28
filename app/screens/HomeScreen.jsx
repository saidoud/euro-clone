import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import PlayerBottomSheet from "../components/PlayerBottomSheet";
import Screen from "../components/ui/Screen";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import ButtonApp from "../components/ui/ButtonApp";

function HomeScreen() {
  const refBottomSheet = useRef(null);
  const snapPoints = ["1%", "90%"];

  const viewPlayer = () => {
    console.log("Players");
  };
  return (
    <Screen style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TeamStats />
        <Field />
        <ButtonApp onPress={viewPlayer} style={styles.viewButton}>
          View Players
        </ButtonApp>
      </View>
      <PlayerBottomSheet
        index={1}
        snapPoints={snapPoints}
        ref={refBottomSheet}
      />
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
