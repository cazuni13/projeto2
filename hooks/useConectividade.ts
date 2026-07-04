import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export function useConectividade() {
  const [online, setOnline] = useState<boolean | null>(true);

  useEffect(() => {
    const remover = NetInfo.addEventListener((estado) => {
      setOnline(estado.isConnected);
    });
    return () => remover();
  }, []);

  return online;
}