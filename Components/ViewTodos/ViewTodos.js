import React from "react";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import styles from "./Styles.js";

const ViewTodos = (props) => {
const deleteTask = (index) => {
    let newTodos = [...props.todos]
    newTodos.splice(index, 1);
    props.setTodos(newTodos)
  }
  const renderItem = ({item, index}) => {
    return(
      <Pressable onLongPress={() => deleteTask(index)} onPress={() => props.navigation.navigate('Edit', {taskName: item, index: index})}>
      <View>
        <Text>
          {item}
        </Text>
      </View>
      </Pressable>
    )
  }
  return (
    <View style={{ flex: 1, alignItems: "center",}}>

      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate("Add")}
        onLongPress={() => alert("niiiiice")}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>

      <FlatList data={props.todos} renderItem={renderItem} keyExtractor={(item, index)=> index}>
         
      </FlatList>
    </View>
  );
};

export default ViewTodos;
