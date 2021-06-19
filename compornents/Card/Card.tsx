import styles from "./Card.module.css";

type Props = {
  link: string;
  title: string;
  description: string;
};
const Card = (props: Props) => {
  return (
    <a href={props.link} target="_blank" className={styles.href}>
      <div className={styles.card}>
        <div className={styles.image_box}>
          <img src="./images/logo-only-dark.png" alt="zennのロゴ" />
        </div>
        <div className={styles.description}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.text}>{props.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
