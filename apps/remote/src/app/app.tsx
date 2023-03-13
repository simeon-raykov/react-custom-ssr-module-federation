// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import UserBar from './user-bar/user-bar';

export function App() {
  return (
      <div className={styles.wrapper}>
        <UserBar/>
      </div>
  );
}

export default App;
