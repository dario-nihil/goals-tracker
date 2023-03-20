import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#15022d" }}
        onPress={onDeleteItem.bind(null, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});
