import { View , Text, Image , StyleSheet,ScrollView} from 'react-native';

const PainelFavoritos = ({ favoritos }) => {
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>Painel de Favoritos</Text> 
          
          {favoritos.map((atleta, index) => (
            <View key={index} style={styles.divider}>
              
              {/* Aqui, use atleta.foto e atleta.nome */}
              <Image source={{ uri: atleta.foto }} style={{ width: 50, height: 50 }} />
              <Text>{atleta.nome}</Text>
              <Text>Time: {atleta.time}</Text>
              <Text>Posição: {atleta.posicao}</Text>
              <Text>Número da camisa: {atleta.numero}</Text>
              <Text>Idade: {atleta.idade}</Text>
              <Text>Gols marcados: {atleta.qtdGolsMarcados}</Text>
              
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

    
  export default PainelFavoritos;

  const styles = StyleSheet.create({
   
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,},

    divider: {
      borderBottomWidth: 2,
      borderBottomColor: '#ECECEC',
      marginBottom: 10,
    }
  });