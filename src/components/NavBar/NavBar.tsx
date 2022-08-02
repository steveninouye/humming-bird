import Button from 'src/components/Button/Button';
import Image from 'next/image';
import styles from './NavBar.module.scss';

export interface INavBar {}

const NavBar: React.FC<INavBar> = () => {
  return (
    <>
      <div className={styles.navBarPadding}></div>
      <div className={styles.navBarContainer}>
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <li className={styles.logo}>
              <Image src="/logo.svg" alt="logo" height="40px" width="227px" />
            </li>
            <li className={styles.links}>Vendors</li>
            <li className={styles.links}>Gallery</li>
            <li className={styles.links}>Favorites</li>
            <li className={styles.links}>Checklist</li>
            <li className={styles.links}>Budget</li>
            <li className={styles.links}>Guestlist</li>
          </ul>
          <ul className={styles.buttons}>
            <li>
              <Button text="Login" isFilled={false} />
            </li>
            <li>
              <Button text="Sign Up" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
