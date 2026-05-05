import React, { useState, useReducer, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";

const reducer = (state: any[], action: any) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now().toString(), text: action.payload, done: false },
      ];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t,
      );
    case "REMOVE":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
};

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(tasks.length);
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD", payload: input });
      setInput("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.iconTop}>📝</Text>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <Text style={styles.counter}>
        Total de tarefas: <Text style={styles.counterHighlight}>{total}</Text>
      </Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Adicionar nova tarefa..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(t) => t.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card, item.done && styles.cardDone]}>
            <Text style={[styles.taskText, item.done && styles.textDone]}>
              {item.text}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => dispatch({ type: "TOGGLE", payload: item.id })}
              >
                <Text style={styles.icon}>{item.done ? "☑️" : "✔️"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch({ type: "REMOVE", payload: item.id })}
              >
                <Text style={styles.icon}>✖️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    padding: 20,
    paddingTop: 60,
  },
  header: { alignItems: "center", marginBottom: 20 },
  iconTop: { fontSize: 50 },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 10 },
  counter: {
    color: "#c4c4cc",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  counterHighlight: { color: "#579c9a", fontWeight: "bold" },
  row: { flexDirection: "row", marginBottom: 20 },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#202024",
    borderWidth: 1,
    borderColor: "#323238",
    borderRadius: 8,
    color: "#fff",
    paddingHorizontal: 16,
    fontSize: 16,
  },
  btn: {
    width: 54,
    height: 54,
    backgroundColor: "#579c9a",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  btnText: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#202024",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#323238",
  },
  cardDone: {
    backgroundColor: "#191b1a",
    borderColor: "#294257",
    opacity: 0.8,
  },
  taskText: { fontSize: 16, color: "#e1e1e6", flex: 1 },
  textDone: { textDecorationLine: "line-through", color: "#7c7c8a" },
  actions: { flexDirection: "row", alignItems: "center" },
  icon: { fontSize: 20, marginLeft: 15 },
});
