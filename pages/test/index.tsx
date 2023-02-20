import { NextPage } from 'next';
import { useInputText } from './hooks/use-input-text/use-input-text';
import { testEmailAtom } from './store';
import { errorMsgHandler } from './function';

const Test: NextPage = () => {
  const { input, onChange, errorMsg } = useInputText({ atom: testEmailAtom, errorMsgHandler })

  return <>
    <input  onChange={onChange} value={input} role='input' id='input' />
    <span id='errorMsg'>{errorMsg}</span>
  </>
}

export default Test;
