import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={[styles.cardGeral, styles.card1]}>🎉 Bem-vindos à aula! 🎉</Text>

      <Text style={[styles.cardGeral, styles.card2]}>📝 Vamos aprender React Native</Text>

      <Text style={[styles.cardGeral, styles.card3]}>🚀 Inline styles são facéis de entender!</Text>
      <StatusBar style="light" />

      <Text style={[styles.cardGeral, styles.card4]}>🌈🎨 Alterar cores e tamanhos é divertido!</Text>

      <Text style={[styles.cardGeral, styles.card5]}>✨ Desafio: tente recriar este layout!</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#147BD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardGeral: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontWeight: 'medium'
  },

  card1: {
    color:'#FB644A',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15
  },
  card2: {
    color:'#558CBA',
    backgroundColor: '#E6F2FF',
    fontSize: 22,
    marginBottom: 25
  },
  card3: {
    color:'#3B9362',
    backgroundColor: '#D4F5E1',
    borderColor: 'red',
    fontSize: 18,
    marginBottom: 30
  },
  card4: {
    color:'#FF9F31',
    backgroundColor: '#FFF5E6',
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10
  },
  card5: {
    color:'#9D2E9F',
    backgroundColor: '#F3E6FF',
    fontSize: 16,
  },
});
