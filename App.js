import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.dummyText}>This is Outer Box</Text>
      <Button title="Click Me" />
      <View style={styles.innerContainer}>
        <Text style={styles.dummyText}>This is inner Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    marginTop: 10,
    color: "white",
    backgroundColor: "pink",
  },
  dummyText: {
    margin: 10,
    padding: 10,
  },
});
