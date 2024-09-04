import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enterdGoals, setEnteredGoals] = useState("");
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOnAllClear = () => {
    setGoals([]);
  };

  const handleOnDeleteGoal = (index) => {
    const filterdGoals = goals.filter((val, id) => id !== index);
    setGoals(filterdGoals);
  };

  const handleOnGoalChange = (e) => {
    setEnteredGoals(e);
  };

  const handleOnShowModal = () => {
    setShowModal(true);
  };

  const handleOnHideModal = () => {
    setShowModal(false);
  };

  const handleOnAddGoal = () => {
    setGoals((prev) => [...prev, enterdGoals]);
    setEnteredGoals("");
    handleOnHideModal();
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Button
          title="Add New Goals"
          onPress={handleOnShowModal}
          color="#5e0acc"
        />

        <GoalInput
          enterdGoals={enterdGoals}
          handleOnGoalChange={handleOnGoalChange}
          handleOnAddGoal={handleOnAddGoal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <GoalList goals={goals} handleOnDeleteGoal={handleOnDeleteGoal} />

        <View style={styles.allClear}>
          <Button onPress={handleOnAllClear} title="clear" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  allClear: {
    marginBottom: 20,
  },
});
