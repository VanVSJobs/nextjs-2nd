import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('hello');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>One of Van's websites</title>
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={'View your local stores'}
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
