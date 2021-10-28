import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "95%",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#38abd1",
    padding: 5,
    marginTop: 2,
  },
  row: {
    marginRight: 25,
  },
  title: {
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
