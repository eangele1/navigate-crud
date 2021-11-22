import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom components (pages)
import AddTodo from "./Components/AddTodo/AddTodo";
import EditTodo from "./Components/EditTodo/EditTodo";
import ViewTodos from "./Components/ViewTodos/ViewTodos";

const Stack = createNativeStackNavigator();

function App() {
  const [todos, setTodos] = useState(["hello, world"]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="View">
          {(props) => (
            <ViewTodos {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Add">
          {(props) => <AddTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="Edit">
          {(props) => <EditTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
