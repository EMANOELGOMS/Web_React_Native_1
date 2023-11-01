import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navegar para a tela 'Home' sem necessidade de autenticação
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Tela de Login</Text>
      <Button title="Login" onPress={handleLogin} />
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
    marginBottom: 10,}
});

export default LoginScreen;