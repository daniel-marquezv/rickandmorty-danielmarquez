import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  ImageBackground,
  View,
  TextInput,
} from "react-native";

const FilterByName = () => {
  const [filterName, setFilterName] = useState("");
  console.log(filterName);
  const [personajeEncontrado, setPersonajeEncontrado] = useState([]);
  const [existe, setExiste] = useState(false);

  console.log("**** get de personajes");
  const obtenerPersonaje = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${filterName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          setExiste(true);
          setPersonajeEncontrado(data.results.map((personaje) => personaje));
        } else {
          setPersonajeEncontrado([]);
          setExiste(false);
        }
        return;
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
        setPersonajeEncontrado([]);
        setExiste(false);
      });
  };

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://wallpapersflix.com/es/wp-content/uploads/2020/06/Fondo-De-Pantalla-Rick-Y-Morty.jpg",
        }}
        style={{ height: "100%" }}
      >
        <ScrollView>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setFilterName}
              value={filterName}
              placeholder="Ingrese nombre"
              placeholderTextColor="black"
            />
            <Button
              onPress={obtenerPersonaje}
              title="Buscar"
              color="#FF4000"
              accessibilityLabel="Aprende mas sobre este personaje"
            />
          </View>
          <View>
            {existe ? (
              personajeEncontrado.map((personaje, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    marginTop: 15,
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: personaje.image }}
                      style={styles.image}
                    />
                  </View>
                  <View>
                    <Text style={styles.baseText}>
                      Nombre: {personaje.name}
                    </Text>
                    <Text style={styles.baseText}>
                      Estatus: {personaje.status}
                    </Text>
                    <Text style={styles.baseText}>
                      Especie: {personaje.species}
                    </Text>
                    <Text style={styles.baseText}>
                      Genero: {personaje.gender}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={styles.baseText}>No se encontro el personaje</Text>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    // borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
  baseText: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FilterByName;
