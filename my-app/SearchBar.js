import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (text) => {
    setPlayerName(text);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.barraPesquisa}
        value={playerName}
        onChangeText={handleInputChange}
        placeholder="Digite o nome do jogador"
        placeholderTextColor="#888888"
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barraPesquisa: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    width: 300,
  },
});

export default SearchBar;
