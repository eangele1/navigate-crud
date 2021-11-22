import React , { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddTodo = (props) => {
  const [text, onChangeText] = useState('')
  const addTask = () => {
      props.setTodos([...props.todos, text]); 
      props.navigation.goBack('')
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput onChangeText={onChangeText} value={text} style={{ borderWidth: 1, height: 40, margin: 12, padding: 10,}}>
        
      </TextInput>
      <Button title={"Add"} onPress={()=> addTask()}>

      </Button>
    </View>
  );
};

export default AddTodo;
