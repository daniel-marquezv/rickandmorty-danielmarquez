import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getDrawerStatusFromState } from "@react-navigation/drawer";

const CharacterDetail = ({ navigation, route }) => {
  // console.log(route.params);

  const [personajeAleatorio, setPersonajeAleatorio] = useState({});
  const isFocused = useIsFocused();
  const [esAleatorio, setEsAleatorio] = useState(false);

  useEffect(() => {}, []);

  const obtenerRandom = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setEsAleatorio(true);
        const random = Math.floor(Math.random() * data.info.count);
        // console.log(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            setPersonajeAleatorio(data);
          });
      });
  };

  useEffect(() => {
    if (isFocused && !route?.params?.characterSelected) {
      obtenerRandom();
    } else {
      navigation.setOptions({ baseText: "personaje seleccionado" });
      fetch(
        `https://rickandmortyapi.com/api/character/${route?.params?.characterSelected}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPersonajeAleatorio(data);
          setEsAleatorio(false);
          navigation.setParams({ characterSelected: null });
        });
    }

    return () => {
      setPersonajeAleatorio({});
    };
  }, [isFocused]);
  console.log(route);
  // console.log(personajeAleatorio)

  // hacer un fetch mandando id que viene del character selected

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
        {esAleatorio && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Button
              title="Generar nuevo personaje"
              onPress={() => obtenerRandom()}
              color="#FF4000"
            />
          </View>
        )}
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
