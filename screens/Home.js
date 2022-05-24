/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Button,
  View,
} from "react-native";

const Home = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);
  const [cantidadPersonajes, setCantidadPersonajes] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [numberPage, setNumberPage] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  useEffect(() => {
    console.log("**** get de personajes");
    listaPersonajes("https://rickandmortyapi.com/api/character");
  }, []);

  const listaPersonajes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results.map((personaje) => personaje));
        setCantidadPersonajes(data.info.count);
        setNextPage(data.info.next);
        setPrevPage(data.info.prev);
        setNumberPage(data.info.pages);
        if (url.includes("page")) {
          setActualPage(url.split("page=")[1]);
        }
      });
  };

  return (
    <ScrollView style={{ backgroundColor: "#0b8bb6" }}>
      <View style={styles.fixToText}>
        <Button
          title="Atras"
          disabled={prevPage == null}
          onPress={() => listaPersonajes(prevPage)}
        />
        <Text style={styles.pageNumber}>
          {actualPage}/{numberPage}
        </Text>
        <Button title="Siguiente" onPress={() => listaPersonajes(nextPage)} />
      </View>
      <Text style={styles.titleText}> Personajes rick and morty</Text>
      <Text style={styles.baseText}>
        Total: <Text style={styles.baseText}>{cantidadPersonajes}</Text>
      </Text>
      {personajes.map((personaje, index) => (
        <View key={index}>
          <Text style={styles.baseText}>
            {" "}
            {personaje.id}.- {personaje.name}{" "}
          </Text>
          <Image source={{ uri: personaje.image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  image: {
    width: 200,
    height: 200,
    // borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    alignSelf: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  pageNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default Home;
