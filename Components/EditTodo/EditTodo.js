import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from "react-native";

const EditTodo = (props) => {
  const {taskName, index}=props.route.params;
  const [text, onChangeText] = useState(taskName)
  const editTask = () => {
    let newTodos = [...props.todos]
    newTodos[index]=text
    props.setTodos(newTodos)
    props.navigation.goBack('')
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput onChangeText={onChangeText} value={text} style={{ borderWidth: 1, height: 40, margin: 12, padding: 10,}}>

      </TextInput>
      <Button title={"Submit"} onPress={()=> editTask()}>

      </Button>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({});
