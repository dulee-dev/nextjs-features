import { PrimitiveAtom, useAtom } from 'jotai';
import { ChangeEventHandler } from 'react';

interface Props {
  atom: PrimitiveAtom<string>;
  errorMsgHandler: (input: string) => string | null;
}

export const useInputText = ({ atom, errorMsgHandler }: Props) => {
  const [input, setInput] = useAtom(atom);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInput(value);
  }
  const errorMsg = errorMsgHandler(input);
  return {
    input,
    onChange,
    errorMsg,
  }
}