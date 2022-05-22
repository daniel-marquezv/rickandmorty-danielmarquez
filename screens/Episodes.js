import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  ImageBackground,
  useColorScheme,
  View,
} from "react-native";

const Episodes = ({ navigation }) => {
  const [episodios, setEpisodios] = useState([]);
  const [primerEpisodio, setPrimerEpisodio] = useState({});
  const [ultimoEpisodio, setUltimoEpisodio] = useState({});
  useEffect(() => {
    console.log("**** get de episodios");

    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        setEpisodios(data.results.map((episodio) => episodio));
        if (data.results.length > 0) {
          console.log(data.results[0]);
          setPrimerEpisodio(data.results[0]);
          console.log(episodios[data.results.length - 1]);
          setUltimoEpisodio(data.results[data.results.length - 1]);
        }
      });
    console.log("fetchterminado");
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
        }}
        style={{ width: 450, height: 700 }}
      >
        <Text style={styles.baseText}>Primer Episodio: </Text>
        <Text style={styles.titleText}>{primerEpisodio.episode}</Text>
        <Text style={styles.titleText}>{primerEpisodio.name}</Text>

        <Text style={styles.baseText}>Ultimo Episodio: </Text>
        <Text style={styles.titleText}>{ultimoEpisodio.episode}</Text>
        <Text style={styles.titleText}>{ultimoEpisodio.name}</Text>
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
  },
});
export default Episodes;