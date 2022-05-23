/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Button,
  useColorScheme,
  View,
} from "react-native";
import AndroidHorizontalScrollContentViewNativeComponent from "react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Separator from "../components/Separator";

const Home = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState({});
  useEffect(() => {
    console.log("**** get de personajes");

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        setPersonajes(data.results.map((personaje) => personaje))
      );
    console.log("fetchterminado");
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://instruccionespara.com/wp-content/uploads/rick-y-morty-artwork_3840x2400_xtrafondos.com_-1024x640.jpg",
        }}
        // style={{ width: 450 }}
      >
        <View >
        <Button
          // 
          onPress={() => {
            const random =
              personajes[Math.floor(Math.random() * personajes.length)];
            navigation.navigate("Personaje Aleatorio", {
              randomCharacter: random,
            });
          }}
          title="Detalles de un personaje aleatorio"
          color="#008f39"
          accessibilityLabel="Aprende mas sobre este personaje"
        />
        </View>
        <View style={{ borderWidth:1, borderColor:'#77DD77',borderRadius:50,}}>
        <Button
          onPress={() => {
            navigation.navigate("Episodios");
          }}
          title="Primer y ultimo episodio"
          color="#008f39"
          accessibilityLabel="Aprende mas sobre este episodio"
        />
        </View>
        <Button
          onPress={() => {
            navigation.navigate("Filtrar por nombre");
          }}
          title="filtrar por nombre"
          color="#008f39"
          accessibilityLabel="Aprende mas sobre este episodio"
        />
        <Text style={styles.baseText}>
          Cantidad total de personajes de Rick and Morty:{" "}
          <Text style={styles.titleText}>{personajes.length}</Text>
        </Text>
        <Text style={styles.baseText}> Personajes de rick and morty</Text>
        {personajes.map((personaje, index) => (
          
            <View key={index}>
              <Text style={styles.baseText}>
                {" "}
                {index + 1}.- {personaje.name}{" "}
              </Text>
              <Image
                source={{ uri: personaje.image }}
                style={styles.image}
              />
            </View>
            // <Separator />
        
        ))}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    // borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
});

export default Home;
