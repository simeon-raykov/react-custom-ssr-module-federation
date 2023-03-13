import styles from './user-bar.module.scss';
import { isUserLoggedIn } from '@sw2.0/core';

export function UserBar() {
  return (
    <div
      className={styles.container}
      onClick={() => alert('Hello from remote!')}
    >
      {isUserLoggedIn('') ? (
        <span>My Account</span>
      ) : (
        <>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.joinButton}>Join</button>
        </>
      )}
    </div>
  );
}

export default UserBar;
