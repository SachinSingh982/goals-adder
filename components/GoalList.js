import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

const GoalList = ({ goals, handleOnDeleteGoal }) => {
  return (
    <View style={styles.goalContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View key={itemData.index} style={styles.goalItem}>
              <Pressable
                android_ripple={{ color: "#210664" }}
                onPress={() => handleOnDeleteGoal(itemData.index)}
                // This is for ios.
                style={(pressdata) => pressdata.pressed && styles.presseditem}
              >
                <Text style={styles.goalText}>{itemData.item}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
    padding: 6,
  },

  presseditem: {
    opacity: 0.5,
  },
});
