import { useQuery } from '@tanstack/react-query';

export function ListaProdutos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['produtos'],
    queryFn: async () => {
      const r = await fetch('https://api.exemplo.com/produtos');
      return r.json();
    }
  });

  if (isLoading) return <Text>Carregando...</Text>;
  if (isError) return <Text>Erro ao carregar</Text>;

  return <FlatList data={data} /* */ />;
}