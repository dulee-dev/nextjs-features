import type { NextPage } from 'next'
import Fruit from './components/fruit';
import { useFruit } from './hooks/use-fruit';

const Swr: NextPage = () => {
  const { data } = useFruit(1);

  return <div>
    <Fruit />
    <Fruit />
  </div>
}

export default Swr
