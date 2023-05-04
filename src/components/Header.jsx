import styles from './Header.module.css';
import igniteLogo from '../assets/logo.svg';

function Header() {

  return (
    <header className={styles.header}>
     <img src={igniteLogo} alt="Logo ignite Feed"/>
    </header>
  )
}

export default Header;