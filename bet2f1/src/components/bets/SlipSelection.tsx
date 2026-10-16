import styles from './SlipSelection.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Une sélection du slip avec son champ de mise.
// Props prévues : selection: BetSelection, onStakeChange: (stake: number) => void, onRemove: () => void

export function SlipSelection() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">SlipSelection</span>
      <p className="muted">À faire — Une sélection du slip avec son champ de mise.</p>
    </div>
  );
}
