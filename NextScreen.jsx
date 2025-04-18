import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const NextScreen = ({ navigation }) => {
  const handleAction = (action) => {
    console.log(`Acción: ${action}`);
    // Navegación según la acción seleccionada
    if(action === 'Premium') {
      navigation.navigate('PremiumScreen');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/usaresta.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Encabezado con logo */}
        <View style={styles.header}>
          <Image 
            source={require('../assets/logousar.png')} 
            style={styles.logo} 
            resizeMode="contain" 
          />
          
          {/* Mensaje de bienvenida mejorado */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeMainText}>¡Bienvenido!</Text>
            <Text style={styles.welcomeSubText}>¿Qué deseas aprender hoy?</Text>
          </View>
        </View>

        {/* Grupo de Botones con más espacio */}
        <View style={styles.buttonGroup}>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]} 
              onPress={() => handleAction('Abecedario')}
            >
              <Text style={styles.buttonText}>Abecedario</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]} 
              onPress={() => handleAction('Vocabulario')}
            >
              <Text style={[styles.buttonText, styles.secondaryText]}>Vocabulario</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.spacer} />

          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.infoButton]} 
              onPress={() => handleAction('Frases')}
            >
              <Text style={styles.buttonText}>Frases Comunes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.dangerButton]} 
              onPress={() => handleAction('Juegos')}
            >
              <Text style={styles.buttonText}>Juegos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.spacer} />

          <TouchableOpacity 
            style={[styles.button, styles.featuredButton]} 
            onPress={() => handleAction('Premium')}
          >
            <Text style={styles.buttonText}>Cursos Premium</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'rgba(245,245,245,0.7)',
    padding: 25,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  welcomeMainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 5,
  },
  welcomeSubText: {
    fontSize: 20,
    color: '#3498db',
    fontStyle: 'italic',
    textAlign: 'center',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  spacer: {
    height: 25,
  },
  button: {
    flex: 0.48,
    height: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  primaryButton: {
    backgroundColor: '#3498db',
    borderWidth: 2,
    borderColor: '#2980b9',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#3498db',
  },
  secondaryText: {
    color: '#3498db',
  },
  infoButton: {
    backgroundColor: '#2ecc71',
    borderWidth: 2,
    borderColor: '#27ae60',
  },
  dangerButton: {
    backgroundColor: '#e74c3c',
    borderWidth: 2,
    borderColor: '#c0392b',
  },
  featuredButton: {
    backgroundColor: '#9b59b6',
    marginVertical: 15,
    width: '100%',
    borderWidth: 2,
    borderColor: '#8e44ad',
    height: 100,
  },
});

export default NextScreen;