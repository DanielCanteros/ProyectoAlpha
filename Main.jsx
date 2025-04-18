import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/fondo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.alphaText}>ALPHA</Text>
          <View style={styles.subtitleContainer}>
           <Text style={styles.subtitle}>Aprende lenguaje de señas de forma fácil</Text>
          </View>
           <Image
            source={require('../assets/icono 1.png')}  // Asegúrate de tener este archivo
            style={styles.secondaryLogo}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/icon 2.png')}  // Asegúrate de tener este archivo
            style={styles.tertiaryLogo}
            resizeMode="contain"
          />
          
        </View>

        <TouchableOpacity 
          style={styles.imageButton}
          onPress={() => navigation.navigate('NextScreen')} // Navega a NextScreen
          activeOpacity={0.7}
        >
          <Image
            source={require('../assets/boton principal.png')} // Asegúrate de tener esta imagen
            style={styles.buttonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(245,245,245,0.3)',
  },
  logoContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 250,
    height: 250,
  },
  secondaryLogo: {
    position: 'absolute', // Posicionamiento absoluto
    top: -100, // Distancia desde arriba
    left: 0, // Distancia desde la izquierda
    zIndex: 1, 
    width: 150,  // Tamaño menor que el logo principal
    height: 150,
    marginTop: 0, 
    // Espacio adicional si es necesario
  },
  tertiaryLogo: {
    position: 'absolute',
    top: -100,          // Distancia desde arriba (ajusta según necesites)
    right: 20,        // Distancia desde la derecha (puedes usar 0 para pegado al borde)
    zIndex: 1 
    // Espacio adicional si es necesario
  },
  buttonImage: {
    width: 100, // Ajusta el tamaño según tu imagen
    height: 100,
  },
  imageButton: {
    alignSelf: 'center',
    marginBottom: 40,
    top: -100, // Ajusta la posición vertical
  },
  
  contentContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#3498db',
    fontStyle: 'italic',
  },
  alphaText: {
    fontSize: 40,             // Tamaño grande
    fontWeight: 'bold',       // Negrita
    color: 'white',         // Color oscuro
    textAlign: 'center',      // Centrado
    marginTop: -20,            // Espacio entre logo y texto
    textShadowColor: 'rgba(255, 255, 255, 0.2)', // Sombra sutil
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    fontStyle: 'roboto',
  },
  subtitle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'roboto',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitleContainer: {
    backgroundColor: 'rgba(252, 245, 245, 0.18)', // Negro al 50% de opacidad
    borderRadius: 10,                      // Bordes redondeados
    paddingHorizontal: 20,                 // Espacio horizontal interno
    paddingVertical: 10,                   // Espacio vertical interno
    marginTop: 10,                         // Separación del texto "ALPHA"
    alignSelf: 'center',                   // Centrado horizontal
  },
});

export default Main;