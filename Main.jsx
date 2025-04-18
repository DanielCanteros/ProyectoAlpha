import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/usaresta.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logousar.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('NextScreen')} // Navega a NextScreen
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Pulsa Para continuar</Text>
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
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 500,
    height: 500,
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
  button: {
    backgroundColor: '#000000',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginHorizontal: 40,
    marginBottom: 40,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.5,
  },
});

export default Main;