const PainelFavoritos = ({ favoritos }) => {
    return (
      <View>
        <Text>Painel de Favoritos</Text>
        {favoritos.map((atleta, index) => (
          <View key={index}>
            {/* Aqui, use atleta.foto e atleta.nome */}
            <Image source={{ uri: atleta.foto }} style={{ width: 50, height: 50 }} />
            <Text>{atleta.nome}</Text>
          </View>
        ))}
      </View>
    );
  };
  
  export default PainelFavoritos;