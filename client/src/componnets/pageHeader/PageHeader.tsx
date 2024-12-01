import React from "react";
import styles from "./PageHeader.module.css";
interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader(props: Props) {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.pageHeader__title}>{props.title}</h1>
      <h2 className={styles.pageHeader__subtitle}>{props.subtitle}</h2>
    </div>
  );
}
