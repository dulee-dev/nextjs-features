import { renderHook } from '@testing-library/react-hooks';
import { useInputText } from './use-input-text';
import { useAtom, PrimitiveAtom, atom } from 'jotai';
import  React, { ChangeEventHandler } from 'react';
const Jotai = { useAtom }


describe("", () => {
  let testAtom: PrimitiveAtom<string>
  let errorMsgHandler = (str: string) => {
    if (str.length > 10) {
      return "김"
    }
    return null
  }
  let result: {
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    errorMsg: string | null;
  };
  it("init", () => {
    testAtom = atom<string>("");
    result = renderHook((initial: any) => useInputText(initial), {initialProps: { atom: testAtom, errorMsgHandler,}}).result.current;
    expect(result.input).toEqual("");
    expect(result.errorMsg).toEqual(null);
    
  })

  it("change state", () => {
    const longStr = "12345678901";
    testAtom = atom<string>(longStr);
    result = renderHook((initial: any) => useInputText(initial), {initialProps: { atom: testAtom, errorMsgHandler,}}).result.current;
    expect(result.errorMsg).toEqual("김");
  })
})