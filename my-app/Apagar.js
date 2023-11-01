// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from './components/barraPesquisa';
// import GetPlayerInfo from './components/GetPlayerInfo';
// import PainelFavoritos from './components/PainelFavoritos';
// import { ScrollView } from 'react-native';


// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const [showPlayerInfo, setShowPlayerInfo] = useState(false);
//   const [favoritos, setFavoritos] = useState([]);

//   const handleSearch = query => {
//     setSearchQuery(query);
//     setShowPlayerInfo(true);
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     setShowPlayerInfo(false);
//   };

//   const adicionarFavorito = atleta => {
//     setFavoritos([...favoritos, atleta]);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Busca de jogadores</Text>
//       <SearchBar onSearch={handleSearch} onClear={clearSearch} />
//       <ScrollView>
//         {showPlayerInfo && (
//           <GetPlayerInfo searchQuery={searchQuery} onAdicionarFavorito={adicionarFavorito} />
//         )}
//       </ScrollView>

//       <View style={styles.hr} />
      
//       <PainelFavoritos favoritos={favoritos}/>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     marginTop: 40
//   },
//   hr: {
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     width: '100%',
//     marginVertical: 16,
//   },
// });

// export default App;

// /*
// <NavigationContainer>

// <Stack.Navigator>

//     <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//     />

//     <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//     />

// </Stack.Navigator>

// </NavigationContainer>

// */





// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import axios from 'axios';

// const GetPlayerInfo = ({ searchQuery, onAdicionarFavorito }) => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
//         const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiKey}`;

//         const response = await axios.get(apiUrl);
//         const filteredPlayers = response.data.map(player => ({
//           nome: player.player_name,
//           time: player.team_name,
//           foto: player.player_image,
//           nacionalidade: player.player_country,
//           qtdGolsMarcados: player.player_goals,
//           posicao: player.player_type
//         }));
        
//         setPlayers(filteredPlayers);
//       } catch (error) {
//         console.error('Error fetching player data:', error);
//       }
//     };

//     if (searchQuery) {
//       fetchData();
//     } else {
//       setPlayers([]);
//     }
//   }, [searchQuery]);

//   return (
   
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {players.map(player => (
//         <View key={player.nome} style={{ marginBottom: 20 }}>
//           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jogador</Text>
//           <Text>Nome: {player.nome}</Text>
//           <Text>Time: {player.time}</Text>
//           {player.foto && <Image source={{ uri: player.foto }} style={{ width: 100, height: 100 }} />}
//           <Text>Posição: {player.posicao}</Text>
//           <Text>Nacionalidade: {player.nacionalidade}</Text>
//           <Text>Gols marcados: {player.qtdGolsMarcados}</Text>
//           <Button
//             title="Adicionar aos Favoritos"
//             onPress={() => onAdicionarFavorito(player)}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default GetPlayerInfo;



// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';

// const SearchBar = ({ onSearch }) => {
//   const [playerName, setPlayerName] = useState('');

//   const handleInputChange = text => {
//     setPlayerName(text);
//   };

//   const handleSearch = () => {
//     onSearch(playerName);
//   };

//   return (
//     <View>
//       <TextInput
//         style={{ height: 40, width: 150 , borderColor: 'gray', borderWidth: 1 }}
//         placeholder="Pesquisar"
//         value={playerName}
//         onChangeText={handleInputChange}
//       />
//       <Button title="Pesquisar" onPress={handleSearch} />
//     </View>
//   );
// };

// export default SearchBar;






// import { View,Text, Image } from "react-native";

// const PainelFavoritos = ({ favoritos }) => {
//     return (
//       <View>
//         <Text style ={{fontWeight: 'bold', fontSize: 20}} >Painel de Favoritos</Text>
//         {favoritos.map((atleta, index) => (
//           <View key={index}>
            
//             <Image source={{ uri: atleta.foto }} style={{ width: 50, height: 50 }} />
//             <Text>{atleta.nome}</Text>
//             <Text>Nome: {atleta.nome}</Text>
//             <Text>Time: {atleta.time}</Text>
//             <Text>Posição: {atleta.posicao}</Text>
//             <Text>Nacionalidade: {atleta.nacionalidade}</Text>
//             <Text>Gols marcados: {atleta.qtdGolsMarcados}</Text>
//           </View>
//         ))}
//       </View>
//     );
//   };


//   export default PainelFavoritos;





