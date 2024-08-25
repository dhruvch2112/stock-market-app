import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig"; // Adjust the path as necessary
import { collection, getDocs } from "firebase/firestore";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
} from "chart.js";
import styles from "./portfolio.module.css";

// Register the necessary components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale
);

const Portfolio: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // Assuming there's only one user document
        setUserName(doc.data().name);
      });
    };
    fetchUserName();
  }, []);

  const pieData = {
    labels: ["Stock A", "Stock B", "Stock C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        <div className={styles.companyInfo}>
          Welcome {userName ? userName : "Loading..."}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <div className={styles.section}>
            <h3>Total Asset Value</h3>
            <p>$100,000</p>
          </div>
          <div className={styles.section}>
            <h3>Gain vs Yesterday</h3>
            <p>+2%</p>
          </div>
          <div className={styles.section}>
            <h3>Top Gainer/Loser</h3>
            <p>Gainer: Stock A +5%</p>
            <p>Loser: Stock B -3%</p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Pie data={pieData} />
          <button className={styles.button}>Open Full Details</button>
          <button className={styles.button}>Add New Stock</button>
          <button className={styles.button}>Sell Stock</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
