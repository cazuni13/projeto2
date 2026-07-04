import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCriarProduto() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (novo) => fetch('https://api.exemplo.com/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novo),
    }),
    onSuccess: () => qc.invalidateQueries({queryKey: ['produtos'] }),
  });
}