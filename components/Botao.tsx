import { Pressable, Text } from 'react-native';

export function Botao({ titulo, onPress }: { titulo: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ padding: 16, backgroundColor: '#7A4A9E' }}>
      <Text style={{ color: '#fff' }}>{titulo}</Text>
    </Pressable>
  );
}