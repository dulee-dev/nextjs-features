import { useEffect } from "react";
import { useFruit } from "../hooks/use-fruit";

const Fruit = () => {
  const { data, mutate } = useFruit();
  const onClick = () => {
    mutate([...data, {
      id: 6,
      name: "꿀",
      price: 10000,
    }], false)
  }
  return <div>
    <button onClick={onClick}>click</button>
    {JSON.stringify(data)}
  </div>
}

export default Fruit;
