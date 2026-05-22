import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { UserScreen } from './src/screens/UserScreen/UserScreen';

//tipagem de passagem de parametros
export type StackParamList = {
  Home: undefined
  User: {
    username: string
    age: string
    email: string
  }
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const Stack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator<StackParamList>()


export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="User" component={UserScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
