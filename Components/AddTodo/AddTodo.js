import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./styles";

const AddTodo = (props) => {
  const [text, onChangeText] = useState("");

  const addTask = () => {
    props.setTodos([...props.todos, text]);
    props.navigation.goBack("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.TextInputBox}
      ></TextInput>
      <Button title={"Add"} onPress={() => addTask()}></Button>
    </View>
  );
};

export default AddTodo;
