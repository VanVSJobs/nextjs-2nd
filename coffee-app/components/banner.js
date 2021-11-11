import styles from './banner.module.css';

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span> Van's</span>
        <span className={styles.subTitle}> Coffee Stores</span>
      </h1>
      <p className={styles.title1}>Best local coffee store</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
