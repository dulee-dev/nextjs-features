import { useEmail } from '../hooks/use-email';
import { testEmailAtom } from '../store';

const One = () => {
  const { email, ok, onChange } = useEmail(testEmailAtom);
  return <div>
    <h1>One</h1>
    <input type="text" onChange={onChange} id={"1"} />
    <div>{email}</div>
    <div>{ok ? "ok" : "err"}</div>
  </div>
}

export default One;
