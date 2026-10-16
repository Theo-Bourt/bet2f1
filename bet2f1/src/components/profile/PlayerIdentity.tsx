import styles from './PlayerIdentity.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Avatar, pseudo, niveau, solde, rang.
// Props prévues : player: Player

export function PlayerIdentity() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">PlayerIdentity</span>
      <p className="muted">À faire — Avatar, pseudo, niveau, solde, rang.</p>
    </div>
  );
}
