import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WeatherComponent = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thingspeak.com/channels/2352930/fields/1.json?api_key=TMGQ76ZQHSANBUUX&results=1');
        
        if (response.ok) {
          const data = await response.json();
          const latestTemperature = data.feeds[0]?.field1;
          setTemperature(latestTemperature);
        } else {
          console.error('Erro ao buscar os dados da API');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.weatherContainer}>
      {temperature !== null ? (
        <Text style={styles.weatherText}>A temperatura atual é: {temperature} °C</Text>
      ) : (
        <Text style={styles.weatherText}>Carregando temperatura...</Text>
      )}
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navegar para a tela 'Home' sem necessidade de autenticação
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button title="Login" onPress={handleLogin} />
      <WeatherComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
