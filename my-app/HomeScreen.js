import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'


export default HomeScreen = ({navigation}) => {

    const [textoBusca, setTextoBusca] = useState('')
    const [players, setPlayers] = useState([])
    const [favoritos, setFavoritos] = useState([])

    const atualizarTexto = (value) => {
        setTextoBusca(value.toLowerCase())
    } 

    const buscarAtletas = async () => {
        try {
            /* const url = 'https://pokeapi.co/api/v2/pokemon/' + textoBusca
            console.log(url)
            const resultado = await axios.get(url)
            console.log(resultado.data.abilities)
            setResultado(resultado.data.abilities) */
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
        setPlayers([])
        setPlayers(filteredPlayers);


            
        } catch (error) {
            console.log(error.message)
            Alert.alert('Erro durante a busca')
        }

      /*   if (navigation) {
            
            
        } */
    }

    return (
        <View>
            <Text>Busca de Jogadores</Text>
            <TextInput 
                placeholder='Digite o nome do Jogador' 
                onChangeText={atualizarTexto}
            />

            <TouchableOpacity onPress={ buscarAtletas }>
                <Text>Buscar</Text>
            </TouchableOpacity>
            <View>

                {players.map( (player) => {
                    return (

                        <Text key={player.name}>
                            Nome: {player.name}
                        </Text>

                                        
                    )
                })}
            </View>
        </View>
    )
}