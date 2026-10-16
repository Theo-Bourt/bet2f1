import styles from './Pagination.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Pagination du classement.
// Props prévues : page: number, totalPages: number, onPageChange: (page: number) => void

export function Pagination() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">Pagination</span>
      <p className="muted">À faire — Pagination du classement.</p>
    </div>
  );
}
