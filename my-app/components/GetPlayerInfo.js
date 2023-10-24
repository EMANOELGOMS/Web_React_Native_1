import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import axios from 'axios';

const GetPlayerInfo = ({ searchQuery, onAdicionarFavorito }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '3e0a856bd02675eba4ca1a26f3c5a98dbc1b1118c44f1dac567623de4af6e24a';
        const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${searchQuery}&APIkey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const filteredPlayers = response.data.map(player => ({
          nome: player.player_name,
          time: player.team_name,
          foto: player.player_image,
          nacionalidade: player.player_country,
          qtdGolsMarcados: player.player_goals,
          posicao: player.player_type
        }));
        
        setPlayers(filteredPlayers);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setPlayers([]);
    }
  }, [searchQuery]);

  return (
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {players.map(player => (
        <View key={player.nome} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jogador</Text>
          <Text>Nome: {player.nome}</Text>
          <Text>Time: {player.time}</Text>
          {player.foto && <Image source={{ uri: player.foto }} style={{ width: 100, height: 100 }} />}
          <Text>Posição: {player.posicao}</Text>
          <Text>Nacionalidade: {player.nacionalidade}</Text>
          <Text>Gols marcados: {player.qtdGolsMarcados}</Text>
          <Button
            title="Adicionar aos Favoritos"
            onPress={() => onAdicionarFavorito(player)}
          />
        </View>
      ))}
    </View>
  );
};

export default GetPlayerInfo;
