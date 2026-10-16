import styles from './XpBar.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Barre de progression d'XP.
// Props prévues : xp: number, xpToNextLevel: number

export function XpBar() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">XpBar</span>
      <p className="muted">À faire — Barre de progression d'XP.</p>
    </div>
  );
}
