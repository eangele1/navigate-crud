import React, { useState } from "react";
import { View, TextInput, Button, Vibration } from "react-native";
import styles from "./styles";

const AddTodo = (props) => {
  const [text, onChangeText] = useState("");

  const addTask = (arr, item) => {
    const newTodos = [...arr, item];
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
        title={"Add"}
        onPress={() => {
          props.setTodos(addTask(props.todos, text));
          Vibration.vibrate(100);
          props.navigation.goBack("");
        }}
      ></Button>
    </View>
  );
};

export default AddTodo;
