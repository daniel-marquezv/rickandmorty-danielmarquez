import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-web";

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
        style={{  height: '100%' }}
      >
        
        <Text style={styles.baseText}>nombre: {name}</Text>
        <Text style={styles.baseText}>estatus: {status}</Text>
        <Text style={styles.baseText}>especie: {species}</Text>
        <Text style={styles.baseText}>genero: {gender}</Text>
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
