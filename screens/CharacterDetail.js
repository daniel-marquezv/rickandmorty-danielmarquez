import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const CharacterDetail = ({ navigation, route }) => {
  console.log(route.params);

  const [personajeAleatorio, setPersonajeAleatorio] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          const random = Math.floor(Math.random() * data.info.count);
          console.log(random);
          fetch(`https://rickandmortyapi.com/api/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
              setPersonajeAleatorio(data);
            });
        });
    }
    console.log("desmontado");
  }, [isFocused]);

  const { name, status, species, gender, image } = personajeAleatorio;

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
        }}
        style={{ height: "100%" }}
      >
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.baseText}>Nombre: {name}</Text>
        <Text style={styles.baseText}>Estatus: {status}</Text>
        <Text style={styles.baseText}>Especie: {species}</Text>
        <Text style={styles.baseText}>Genero: {gender}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    marginTop: 5,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
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
    alignSelf: "center",
    marginTop: 10,
  },
});

export default CharacterDetail;
