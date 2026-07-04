import { StyleSheet, Text, View } from 'react-native';

export default function Tela() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});