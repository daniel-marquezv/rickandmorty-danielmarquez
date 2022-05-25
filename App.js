import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import FilterByName from "./screens/FilterByName";
import CharacterDetail from "./screens/CharacterDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Episodes from "./screens/Episodes";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { lazy } from "react/cjs/react.production.min";
import { Button } from "react-native-web";

const Drawer = createDrawerNavigator();

export default function App({ navigation, route }) {
  return (
    <NavigationContainer >
      <Drawer.Navigator >
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Personaje Aleatorio" component={CharacterDetail}  />
        <Drawer.Screen name="Episodios" component={Episodes} />
        <Drawer.Screen name="Filtrar por nombre" component={FilterByName} />
      </Drawer.Navigator>
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
