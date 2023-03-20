import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(null, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
});
