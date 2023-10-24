import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from './SearchBar';
import GetPlayerInfo from './jogadorInfor';


const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Jogador</Text>
      <StatusBar style="auto" />
      {/* barra de pesquisa */}
      <SearchBar onSearch={handleSearch} />
      <ScrollView>
        {searchQuery && <GetPlayerInfo searchQuery={searchQuery} />}
      </ScrollView>
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
