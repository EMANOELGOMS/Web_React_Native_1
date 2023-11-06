import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import SearchBar from './SearchBar';
import GetPlayerInfo from './jogadorInfor';
import PainelFavoritos from './PainelFavoritos';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritos, setFavoritos] = useState([]);
  //const [showPlayerInfo, setShowPlayerInfo] = useState(false);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowPlayerInfo(false);
  };

  const adicionarFavorito = atleta => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Jogador</Text>
      <StatusBar style="auto" />

      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      <ScrollView>
        {searchQuery && (
          <GetPlayerInfo
            searchQuery={searchQuery}
            onAdicionarFavorito={adicionarFavorito}
          />
        )}
      </ScrollView>

      <PainelFavoritos favoritos={favoritos}></PainelFavoritos>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
