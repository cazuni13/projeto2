import { useQuery } from '@tanstack/react-query';
import { Text, FlatList, View } from 'react-native';

export function ListaProdutos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['produtos'],
    queryFn: async () => {
      // Trocámos a API de exemplo por uma API real de testes
      const r = await fetch('https://fakestoreapi.com/products');
      return r.json();
    }
  });

  if (isLoading) return <Text>Carregando produtos...</Text>;
  if (isError) return <Text>Erro ao carregar os dados reais</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          {/* Ajustámos para "item.title" que é o formato que esta API devolve */}
          <Text>{item.title}</Text>
        </View>
      )}
      ListEmptyComponent={() => <Text>Lista vazia</Text>}
      showsVerticalScrollIndicator={false}
    />
  );
}