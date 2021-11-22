import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom components (pages)
import AddTodo from "./Components/AddTodo/AddTodo";
import EditTodo from "./Components/EditTodo/EditTodo";
import ViewTodos from "./Components/ViewTodos/ViewTodos";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="View"
          options={{
            title: "Navigation-CRUD",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#F6511D",
            },
          }}
        >
          {(props) => (
            <ViewTodos {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Add"
          options={{
            title: "Add Your Task!",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#F6511D",
            },
          }}
        >
          {(props) => <AddTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen
          name="Edit"
          options={{
            title: "Edit Your Task!",
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#F6511D",
            },
          }}
        >
          {(props) => <EditTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
