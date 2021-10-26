import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  background: {
    width: "100%",
    aspectRatio: 2 / 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowPlayer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
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

export default styles;
