import useSwr from 'swr';

const fetcher = async (url: string) => {
  console.log('hi');
  const data = await fetch(url)
  return await data.json();
}

export const useFruit = (id?: number) => {
  const url = 'http://localhost:3001/fruit' + (id ? `/${id}` : '');
  const { data, error, isLoading, mutate } = useSwr(url, fetcher)
  return { data, error, isLoading, mutate };
}