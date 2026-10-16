import styles from './QuickBet.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Pari rapide « Next overtake ? » avec choix Yes / No et mise.
// Props prévues : question: string, yesMultiplier: number, noMultiplier: number

export function QuickBet() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">QuickBet</span>
      <p className="muted">À faire — Pari rapide « Next overtake ? » avec choix Yes / No et mise.</p>
    </div>
  );
}
