import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7FB800",
  },
  button: {
    height: 40,
    width: 90,
    backgroundColor: "#00A6ED",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  addTaskContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: width,
    height: height * 0.75,
    alignItems: "center",
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFB400",
    borderRadius: 10,
    width: width * 0.85,
  },
});

export default styles;
