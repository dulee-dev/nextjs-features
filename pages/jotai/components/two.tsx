import { useEmail } from '../hooks/use-email';
import { testEmail2Atom } from '../store';

const Two = () => {
  const { email, ok, onChange } = useEmail(testEmail2Atom);
  console.log('two');
  return <div>
    <h1>Two</h1>
    <input type="text" onChange={onChange} id={"2"} />
    <div>{email}</div>
    <div>{ok ? "ok" : "err"}</div>
  </div>
}

export default Two;
