import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./assets/lucas-icon.jpg")}
          style={styles.imageSize}
        />

        <View style={styles.flexName}>
          <Text style={styles.textName}>Lucas Vieira Dev Front-End</Text>
        </View>
      </View>

      <View style={styles.flexFollowers}>
        <View>
          <Text style={styles.text}>Seguindo</Text>
          <Text style={styles.textNumber}>250</Text>
        </View>

        <View>
          <Text style={styles.text}>Seguidores</Text>
          <Text style={styles.textNumber}>100</Text>
        </View>
      </View>

      <View style={styles.flexFollow}>
        <Pressable>
          <Text style={styles.buttonFollow}>Seguir</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08001f",
    alignItems: "center",
    justifyContent: "center",
  },
  imageSize: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: "#d6d4cb",
  },
  flexName: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  flexFollowers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 32,
    marginBottom: 32,
  },
  flexFollow: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#d6d4cb",
    fontWeight: "500",
    borderWidth: 2,
    borderColor: "#d6d4cb",
    borderRadius: 8,
    padding: 12,
  },
  textName: {
    fontSize: 20,
    color: "#d6d4cb",
    fontWeight: "600",
    width: 240,
    borderWidth: 2,
    borderColor: "#d6d4cb",
    borderRadius: 8,
    padding: 12,
    textAlign: "center",
  },
  textNumber: {
    fontSize: 20,
    color: "#d6d4cb",
    fontWeight: "500",
    padding: 12,
    textAlign: "center",
  },
  buttonFollow: {
    fontSize: 24,
    color: "#d6d4cb",
    fontWeight: "500",
    width: 144,
    borderWidth: 2,
    borderColor: "#d6d4cb",
    borderRadius: 8,
    padding: 12,
    textAlign: "center",
  },
});
