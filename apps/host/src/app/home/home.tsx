import styles from './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return <div className={styles['container']}>Host app</div>;
}

export default Home;
