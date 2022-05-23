import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";

const CharacterDetail = ({ navigation, route }) => {
  console.log(route.params);
  const { name, status, species, gender, image } = route.params.randomCharacter;
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
        }}
        style={{ height: "100%" }}
      >
        <Text style={styles.baseText}>Nombre: {name}</Text>
        <Text style={styles.baseText}>Estatus: {status}</Text>
        <Text style={styles.baseText}>Especie: {species}</Text>
        <Text style={styles.baseText}>Genero: {gender}</Text>
        <Image source={{ uri: image }} style={styles.image} />
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

export default CharacterDetail;
