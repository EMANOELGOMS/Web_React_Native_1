import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [playerName, setPlayerName] = useState('');

  const handleInputChange = text => {
    setPlayerName(text);
  };

  const handleSearch = () => {
    onSearch(playerName);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, width: 150 , borderColor: 'gray', borderWidth: 1 }}
        placeholder="Pesquisar"
        value={playerName}
        onChangeText={handleInputChange}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
