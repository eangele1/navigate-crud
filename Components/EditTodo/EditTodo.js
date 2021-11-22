import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./styles.js";

const EditTodo = (props) => {
  const { taskName } = props.route.params;
  const [text, onChangeText] = useState(taskName);

  const editTask = (index) => {
    let newTodos = [...props.todos];
    newTodos[index] = text;
    props.setTodos(newTodos);
    props.navigation.goBack("");
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
        onPress={() => editTask(props.todos.indexOf(taskName))}
      ></Button>
    </View>
  );
};

export default EditTodo;
