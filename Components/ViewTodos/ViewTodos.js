import React from "react";
import { Pressable, Text, View, FlatList, Dimensions } from "react-native";
import styles from "./styles.js";

const ViewTodos = (props) => {
  const deleteTask = (index) => {
    let newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        onLongPress={() => deleteTask(props.todos.indexOf(item))}
        onPress={() => props.navigation.navigate("Edit", { taskName: item })}
      >
        <View style={styles.itemContainer}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.addTaskContainer}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.button,
          ]}
          onPress={() => props.navigation.navigate("Add")}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={props.todos}
          renderItem={renderItem}
          keyExtractor={(item) => props.todos.indexOf(item)}
        ></FlatList>
      </View>
    </View>
  );
};

export default ViewTodos;
