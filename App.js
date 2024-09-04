import { useState, useref } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enterdGoals, setEnteredGoals] = useState("");
  const [goals, setGoals] = useState([]);

  const handleOnGoalChange = (e) => {
    setEnteredGoals(e);
  };

  const handleOnAddGoal = () => {
    setGoals((prev) => [...prev, enterdGoals]);
    // setEnteredGoals("");
  };

  const handleOnDeleteGoal = (index) => {
    const filterdGoals = goals.filter((val, id) => id !== index);
    setGoals(filterdGoals);
  };

  const handleOnAllClear = () => {
    setGoals([]);
  };
  return (
    <View style={styles.mainContainer}>
      {/* Text and buttons */}
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          onChangeText={handleOnGoalChange}
          style={styles.textInput}
          value={enterdGoals || ""}
          placeholder="Enter Your Goal"
        />
        <Button
          style={styles.addButton}
          onPress={handleOnAddGoal}
          title="Add Goals"
        />
      </View>

      {/* Goals Here */}
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View key={itemData.index} style={styles.goalItem}>
                <Text
                  style={styles.goalText}
                  onPress={() => handleOnDeleteGoal(itemData.index)}
                >
                  {itemData.item}
                </Text>
              </View>
            );
          }}
        />
      </View>

      <View>
        <Button onPress={handleOnAllClear} title="clear" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputAndButtonContainer: {
    flex: 1,
    padding: 5,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  addButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },

  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
  },
});
