import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";
import background from "../../assets/field.jpg";
import PlayerItem from "../list/PlayerItem";

const players = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

function Field() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="contain"
      >
        {Object.keys(players).map((item) => (
          <View style={styles.rowPlayer} key={item}>
            {players[item].map((player, index) => (
              <PlayerItem
                key={index}
                color={player ? "#d170db" : "#5c5c5cbb"}
                item={item}
              />
            ))}
          </View>
        ))}
      </ImageBackground>
    </View>
  );
}

export default Field;
