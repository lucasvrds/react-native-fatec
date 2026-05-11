import React, { useState, useReducer, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const DATA = [
  {
    id: "1",
    name: "S24 Ultra",
    price: "R$ 6.499",
    img: require("./assets/s24-ultra.png"),
  },
  {
    id: "2",
    name: "Apple 2025 MacBook Air",
    price: "R$ 9.299",
    img: require("./assets/macBook-air.png"),
  },
  {
    id: "3",
    name: "Fone QCY MeloBuds N50",
    price: "R$ 249",
    img: require("./assets/qcy-n50.jpg"),
  },
  {
    id: "4",
    name: "Xiaomi Mi Smart Band 8 Pro",
    price: "R$ 499",
    img: require("./assets/mi-smart-band-8-pro.png"),
  },
];

const favReducer = (state: string[], action: any) => {
  if (action.type === "TOGGLE")
    return state.includes(action.id)
      ? state.filter((id) => id !== action.id)
      : [...state, action.id];
  return state;
};

export default function App() {
  const [favs, dispatch] = useReducer(favReducer, []);
  const [search, setSearch] = useState("");
  const [showFavs, setShowFavs] = useState(false);
  const [filtered, setFiltered] = useState(DATA);

  useEffect(() => {
    let res = DATA.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
    if (showFavs) res = res.filter((p) => favs.includes(p.id));
    setFiltered(res);
  }, [search, showFavs, favs]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🛍️ Catálogo</Text>
        <TouchableOpacity
          onPress={() => setShowFavs(!showFavs)}
          style={styles.btnFav}
        >
          <Text style={styles.btnFavText}>
            {showFavs ? "⭐ Ver Todos" : "★ Favoritos"}
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Filtrar produtos por nome..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => dispatch({ type: "TOGGLE", id: item.id })}
            >
              <Text style={styles.icon}>
                {favs.includes(item.id) ? "⭐" : "☆"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  btnFav: {
    backgroundColor: '#579c9a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnFavText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  input: {
    height: 50,
    backgroundColor: '#202024',
    borderWidth: 1,
    borderColor: '#323238',
    borderRadius: 8,
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202024',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#323238',
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 15,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#e1e1e6',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#579c9a',
    marginTop: 4,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 32,
  },
});