import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, ImageBackground } from "react-native";

const Episodes = ({ navigation }) => {
  const [primerEpisodio, setPrimerEpisodio] = useState({});
  const [ultimoEpisodio, setUltimoEpisodio] = useState({});
  useEffect(() => {
    console.log("**** get de episodios");

    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          console.log(data.results[0]);
          setPrimerEpisodio(data.results[0]);
        }

        fetch(`https://rickandmortyapi.com/api/episode?page=${data.info.pages}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              setUltimoEpisodio(data.results[data.results.length - 1]);
            }
          });
      });

    console.log("fetchterminado");
  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
      }}
      style={{ height: "100%" }}
    >
      <ScrollView>
        <Text style={styles.baseText}>Primer Episodio: </Text>
        <Text style={styles.titleText}>{primerEpisodio.episode}</Text>
        <Text style={styles.titleText}>{primerEpisodio.name}</Text>

        <Text style={styles.baseText}>Ultimo Episodio: </Text>
        <Text style={styles.titleText}>{ultimoEpisodio.episode}</Text>
        <Text style={styles.titleText}>{ultimoEpisodio.name}</Text>
      </ScrollView>
    </ImageBackground>
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
    fontSize: 20,
    textAlign: "center",
  },
});
export default Episodes;
