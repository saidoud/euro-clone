import React, { useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import Screen from "../components/ui/Screen";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import ButtonApp from "../components/ui/ButtonApp";

function HomeScreen() {
  const refBottomSheet = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const viewPlayer = () => {
    refBottomSheet.current?.expand();
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
      {/* Player Bottom Sheet*/}
      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        ref={refBottomSheet}
        enablePanDownToClose
      >
        <View>
          <Text>Awesome React Native Developer</Text>
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
