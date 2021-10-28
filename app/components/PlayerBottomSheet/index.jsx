import React from "react";
import { View, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

function PlayerBottomSheet({ snapPoints, index, ref }) {
  return (
    <BottomSheet snapPoints={snapPoints} index={index} ref={ref}>
      <View>
        <Text>Awesome React Native Developer</Text>
      </View>
    </BottomSheet>
  );
}

export default PlayerBottomSheet;
