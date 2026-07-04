import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function MinhaLocalizacao() {
  const [coords, setCoords] = useState<Location.LocationObjectCoords | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErro('Permissão de localização negada');
        return;
      }
      const posicao = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setCoords(posicao.coords);
    })();
  }, []);

  if (erro) return <Text>{erro}</Text>;
  if (!coords) return <Text>Obtendo localização...</Text>;

  return (
    <View>
      <Text>Latitude: {coords.latitude}</Text>
      <Text>Longitude: {coords.longitude}</Text>
    </View>
  );
}