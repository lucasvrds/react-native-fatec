import React, { useState, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';

const listener = (state: any, action: any) => {
  switch (action.type) {
    case 'add-new-task':
      return {
        tasks: [...state.tasks, { id: Date.now().toString(), name: action.inputValue, selected: false }]
      }
    case 'toggle-task':
      return {
        tasks: state.tasks.map((task: any) =>
          task.id === action.id ? { ...task, selected: !task.selected } : task
        )
      }
    case 'delete-selected':
      return {
        tasks: state.tasks.filter((task: any) => !task.selected)
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(listener, { tasks: [] })
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: 'add-new-task', inputValue })
      setInputValue('')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        ></TextInput>
        <Button title="adicionar" onPress={handleAddTask} color="#579c9a"></Button>
      </View>

      <Button 
        title="Excluir" 
        onPress={() => dispatch({ type: 'delete-selected' })} 
        color="#FF5252"
      />

      <FlatList
        data={state.tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => dispatch({ type: 'toggle-task', id: item.id })}
            style={[styles.taskItem, item.selected && styles.selected]}
          >
            <Text style={{ color: 'white' }}>
              {item.name} {item.selected ? "" : ""}
            </Text>
          </TouchableOpacity>
        )}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191b1a',
    alignItems: 'center',
    paddingTop: 50
  },
  inline: {
    flexDirection: 'row',
    marginBottom: 20
  },
  enter: {
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: '#294257',
    width: 200,
    color: 'white',
    paddingHorizontal: 10
  },
  taskItem: {
    backgroundColor: '#444',
    padding: 15,
    marginTop: 10,
    width: 300,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5
  },
  selected: {
    backgroundColor: '#99c9b3',
    borderColor: '#579c9a'
  }
});