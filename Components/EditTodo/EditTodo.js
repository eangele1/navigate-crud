import React, { useState } from "react";
import { View, TextInput, Button, Vibration } from "react-native";
import styles from "./styles.js";

const EditTodo = (props) => {
  const { taskName } = props.route.params;
  const [text, onChangeText] = useState(taskName);

  const editTask = (arr, index, item) => {
    let newTodos = [...arr];
    newTodos[index] = item;
    return newTodos;
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.TextInputBox}
      ></TextInput>
      <Button
        title={"Submit"}
        onPress={() => {
          props.setTodos(
            editTask(props.todos, props.todos.indexOf(taskName), text)
          );
          Vibration.vibrate(100);
          props.navigation.goBack("");
        }}
      ></Button>
    </View>
  );
};

export default EditTodo;
