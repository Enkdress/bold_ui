import styles from "assets/card.module.scss";

function Card({ title, content, isDark = false, isFullWidthContent = false, width = "100%" }) {
  return (
    <div className={styles.card} style={{ width }}>
      <div className={isDark ? styles.titleDark : styles.titleLight}>
        {title}
      </div>
      <div className={isFullWidthContent ? null : styles.content}>{content}</div>
    </div>
  );
}

export default Card;
