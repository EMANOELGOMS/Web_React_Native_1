import { View,Text, Image } from "react-native";

const PainelFavoritos = ({ favoritos }) => {
    return (
      <View>
        <Text style ={{fontWeight: 'bold', fontSize: 20}} >Painel de Favoritos</Text>
        {favoritos.map((atleta, index) => (
          <View key={index}>
            
            <Image source={{ uri: atleta.foto }} style={{ width: 50, height: 50 }} />
            <Text>{atleta.nome}</Text>
            <Text>Nome: {atleta.nome}</Text>
            <Text>Time: {atleta.time}</Text>
            <Text>Posição: {atleta.posicao}</Text>
            <Text>Nacionalidade: {atleta.nacionalidade}</Text>
            <Text>Gols marcados: {atleta.qtdGolsMarcados}</Text>
          </View>
        ))}
      </View>
    );
  };


  export default PainelFavoritos;