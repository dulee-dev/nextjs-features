import { PrimitiveAtom, useAtom } from "jotai"
import { ChangeEventHandler } from "react";

const REGEX =  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export const useEmail = (atom: PrimitiveAtom<string>) => {
  const [email, setEmail] = useAtom(atom);
  const ok = REGEX.test(email);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setEmail(value);
  }
  return { email, onChange, ok };
}