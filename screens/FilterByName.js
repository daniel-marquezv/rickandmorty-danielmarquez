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
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  };

  return (
    <View>
      
      <Text>Busqueda por nombre</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFilterName}
        value={filterName}
      />

      <Button
        onPress={obtenerPersonaje}
        title="Buscar"
        color="#008f39"
        accessibilityLabel="Aprende mas sobre este personaje"
      />
      
      
      <ScrollView>
      
        {existe ? (
          personajeEncontrado.map((personaje, index) => (
            <View key={index}>
              <Text style={styles.baseText}>nombre: {personaje.name}</Text>
              <Text style={styles.baseText}>estatus: {personaje.status}</Text>
              <Text style={styles.baseText}>especie: {personaje.species}</Text>
              <Text style={styles.baseText}>genero: {personaje.gender}</Text>
              <Image
                source={{ uri: personaje.image }}
                style={{
                  width: 411,
                  height: 350,
                }}
              />
            </View>
          ))
        ) : (
          <Text>no se encontro el personaje</Text>
        )}
         
      </ScrollView>
     
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
});
export default FilterByName;
