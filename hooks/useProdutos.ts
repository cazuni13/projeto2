import { useEffect, useState } from 'react';

export function useProdutos() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setCarregando(true);
        const resposta = await fetch('https://api.exemplo.com/produtos');
        setDados (await resposta.json());
      } catch (e) {
        setErro('Falha ao carregar');
      } finally {
        setCarregando(false);
      }
    })();
  }, []);

  return { dados, carregando, erro };
}