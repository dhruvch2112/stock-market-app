import React from "react";
import styles from "./sidebar.module.css";
import logoImage1 from "../assets/image 4.png";
import logoImage2 from "../assets/image 5.png";
import logoImage3 from "../assets/image 6.png";
import logoImage4 from "../assets/image 7.png";
import logoImage5 from "../assets/image 8.png";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.menuItem} ${styles.active}`}
        onClick={() => handleNavigation("/dashboard")}
      >
        <img className={styles.logoImage} src={logoImage1.src} alt="Logo" />
        <span className={styles.menuText}>Portfolio</span>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation("/forecast")}
      >
        <img className={styles.logoImage} src={logoImage2.src} alt="Logo" />
        <span className={styles.menuText}>Forecasting</span>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation("/recommend")}
      >
        <img className={styles.logoImage} src={logoImage3.src} alt="Logo" />
        <span className={styles.menuText}>Recommend</span>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation("/realtime")}
      >
        <img className={styles.logoImage} src={logoImage4.src} alt="Logo" />
        <span className={styles.menuText}>Real-Time</span>
      </div>
      <div
        className={styles.menuItem}
        onClick={() => handleNavigation("/historic")}
      >
        <img className={styles.logoImage} src={logoImage5.src} alt="Logo" />
        <span className={styles.menuText}>Historic</span>
      </div>
    </div>
  );
};

export default Sidebar;
