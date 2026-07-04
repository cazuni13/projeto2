import { StyleSheet, View, Text } from 'react-native';
import { ListaProdutos } from '@/components/ListaProdutos'; // Usando o atalho @/

export default function Tela() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Produtos</Text>
      <ListaProdutos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});