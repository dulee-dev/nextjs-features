import styles from "./show-text.module.scss";

interface Props {
  text: string;
}

const ShowText = ({ text }: Props) => {
  
  return <div className={styles.text}>{text}</div>
}

export default ShowText;