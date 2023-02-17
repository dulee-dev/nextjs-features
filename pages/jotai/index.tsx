import { NextPage } from 'next';
import One from './components/one';
import Two from './components/two';

const Jotai: NextPage = () => {
  console.log('hi');
  return <>
    <One />
    <Two />
  </>
}

export default Jotai;
