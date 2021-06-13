import styles from "./Card.module.css";

type Enclosure = {
  link: string;
  type: string;
};
type Props = {
  link: string;
  title: string;
  description: string;
  enclosure: Enclosure;
};
const Card = (props: Props) => {
  const stringCutTitle = (title: string): string => {
    const STRING: string = title;
    const MAX_LENGTH: number = 15; //文字数上限
    let modStr: string = ""; //カット後の文字列

    if (STRING.length > MAX_LENGTH) {
      modStr = STRING.substr(0, MAX_LENGTH) + "...";
      return modStr;
    } else {
      return STRING;
    }
  };

  const stringCutDescription = (description: string): string => {
    const STRING: string = description;
    const MAX_LENGTH: number = 50; //文字数上限
    let modStr: string = ""; //カット後の文字列

    if (STRING.length > MAX_LENGTH) {
      modStr = STRING.substr(0, MAX_LENGTH) + "...";
      return modStr;
    } else {
      return STRING;
    }
  };

  return (
    <a href={props.link} target="_blank" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.image_box}>
          <img src={props.enclosure.link} alt={props.title} />
        </div>
        <div className={styles.description}>
          <h3 className={styles.title}>{stringCutTitle(props.title)}</h3>
          <p className={styles.text}>
            {stringCutDescription(props.description)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
