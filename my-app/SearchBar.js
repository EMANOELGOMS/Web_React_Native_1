import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  //Cria o estado e armazena os jogadores
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = (text) => {
    setPlayerName(text);
  };

//handleSearch = indentidicador da pesquisa
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
    paddingRight: 10,
  },
  barraPesquisa: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 8,
    width: 200,
    paddingLeft: 10,
  },
});

export default SearchBar;
