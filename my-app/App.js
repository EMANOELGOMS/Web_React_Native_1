import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './components/barraPesquisa';
import GetPlayerInfo from './components/GetPlayerInfo';
import PainelFavoritos from './components/PainelFavoritos';
import { ScrollView } from 'react-native';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);
    setShowPlayerInfo(true);
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
      <Text style={styles.heading}>Busca de jogadores</Text>
      <SearchBar onSearch={handleSearch} onClear={clearSearch} />
      <ScrollView>
        {showPlayerInfo && (
          <GetPlayerInfo searchQuery={searchQuery} onAdicionarFavorito={adicionarFavorito} />
        )}
      </ScrollView>
      <View style={styles.hr} />
      <PainelFavoritos favoritos={favoritos}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 40
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 16,
  },
});

export default App;

/*
<NavigationContainer>

<Stack.Navigator>

    <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
    />

    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
    />

</Stack.Navigator>

</NavigationContainer>

*/