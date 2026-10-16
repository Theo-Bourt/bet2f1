import styles from './SimulationNotice.module.css';

/** Bandeau rappelant que tout est simulé et fictif. */
export function SimulationNotice() {
  return (
    <div className={styles.notice}>
      <span className="eyebrow">Simulated racing · Fictional demo data</span>
      <span className={styles.right}>Virtual pts · No cash</span>
    </div>
  );
}
