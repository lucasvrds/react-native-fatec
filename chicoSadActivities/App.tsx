import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import chicoHappy from "./assets/chico-happy.jpg";
import chicoSad from "./assets/chico-sad.jpg";
import { useState } from "react";

export default function App() {
  const [isHappy, setIsHappy] = useState(false);
  const [count, setCount] = useState(0);

  function handleMood() {
    console.log(isHappy);

    setIsHappy((prev) => !prev);

    setIsHappy(!isHappy);
    setCount(count + 1);
  }

  function reset() {
    setCount (0);
  }

  return (
    <View style={[styles.container, {backgroundColor: isHappy ? "#1987D6" : "#4E4E4E"}]} >
      {/*<Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />*/}

      <TouchableOpacity onPress={handleMood}>
        <Image source={isHappy ? chicoHappy : chicoSad} style={{width: isHappy ? 200 : 100, height: isHappy ? 200 : 100, borderWidth: 5, borderColor: isHappy ? "#fbff00" : "#274bff"}}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 40 }}>{isHappy ? "Feliz" : "Triste"}</Text>
      <Text style={{ fontSize: 40 }}>{isHappy ? "Fique triste" : "Fique feliz"}</Text>
      <Text style={{ fontSize: 40 }}>{isHappy ? "Motivação" : ""}</Text>
      <Text style={{ fontSize: 40 }}>{isHappy ? "😁" : "😭"}</Text>
      <Text style={{ fontSize: 40 }}>{count > 10 ? "Parabéns": ""}</Text>
      <Text style={{fontSize: 20, margin: 5}}>Cliques: {count}</Text>

      <Button title="MOOD" onPress={handleMood}></Button>
      <Button title="reset" onPress={reset}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
