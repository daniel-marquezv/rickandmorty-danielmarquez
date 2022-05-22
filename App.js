import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import FilterByName from "./screens/FilterByName";
import CharacterDetail from "./screens/CharacterDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Episodes from "./screens/Episodes";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Personaje Aleatorio" component={CharacterDetail} />
        <Stack.Screen name="Episodios" component={Episodes}/>
        <Stack.Screen name="Filtrar por nombre" component={FilterByName}/>
      </Stack.Navigator>
    </NavigationContainer>
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
     