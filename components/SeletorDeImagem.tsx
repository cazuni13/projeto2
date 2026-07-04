import { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SeletorDeImagem() {
  const [imagem, setImagem] = useState<string | null>(null);

  async function escolherDaGaleria() {
    // Solicita permissão de acesso a galeria
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      return; // usuário negou trate aqui (ex.: Alert)
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  }

  return (
    <View>
      <Button title="Escolher imagem" onPress={escolherDaGaleria} />
      {imagem && (
        <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}