import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";

const CharacterDetail = ({ navigation, route }) => {
  console.log(route.params);
  const { name, status, species, gender, image } = route.params.randomCharacter;
  return (
    // https://indiehoy.com/wp-content/uploads/2020/06/rick-and-morty-1.jpg
    <View>
      <ImageBackground
        source={{
          uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
        }}
        style={{ width: 450, height: 700 }}
      >
        <Text style={styles.baseText}>nombre: {name}</Text>
        <Text style={styles.baseText}>estatus: {status}</Text>
        <Text style={styles.baseText}>especie: {species}</Text>
        <Text style={styles.baseText}>genero: {gender}</Text>
        <Image
          source={{ uri: image }}
          style={{
            width: 411,
            height: 350,
          }}
        />
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
});

export default CharacterDetail;
