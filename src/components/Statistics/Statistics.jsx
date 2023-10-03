import React from 'react';
import { getRandomHexColor } from './getRandomHexColor';
import styles from './Statistics.module.css';

const Statistics = ({title, stats }) =>{
return (
    <section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>

  <ul className={styles.statList}>
    {stats.map (stats =>
         (<li className={styles.statItem}
          key={stats.id}
          style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.label}>{stats.label}</span>
            <span className={styles.percentage}>{stats.percentage}%</span>
         </li>))}
  </ul>
</section>
)};
export default Statistics;