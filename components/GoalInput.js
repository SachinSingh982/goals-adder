import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({
  enterdGoals,
  handleOnAddGoal,
  handleOnGoalChange,
  showModal,
  setShowModal,
}) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputAndButtonContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={{ width: 100, height: 100, margin: 20 }}
        />

        <TextInput
          onChangeText={handleOnGoalChange}
          style={styles.textInput}
          value={enterdGoals || ""}
          placeholder="Enter Your Goal"
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button
              style={styles.addButton}
              onPress={handleOnAddGoal}
              title="Add Goals"
              color="#5e0acc"
            />
          </View>

          <View style={styles.buttons}>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              title="Close"
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputAndButtonContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    color: "#120438",
    width: "100%",
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    marginRight: 8,
    padding: 12,
  },
  addButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttons: {
    width: "30%",
    marginHorizontal: 8,
    marginTop: 16,
  },

  cancelButton: {},
});
