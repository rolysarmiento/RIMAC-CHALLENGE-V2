import styles from './styles/Footer.module.scss';
import logoWhite from '../assets/images/Logo/logoWhite.png';
import logoMobile from '../assets/images/Logo/LogoMobile.png';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.footer}>
      <img
        src={isMobile ? logoMobile : logoWhite}
      />
      <span>
        © 2025 RIMAC Seguros y Reaseguros.
      </span>
    </div>
  )
}

export default Footer;
