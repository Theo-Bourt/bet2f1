import styles from './FriendsPreview.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Classement de tes amis.
// Props prévues : friends: LeaderboardEntry[]

export function FriendsPreview() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">FriendsPreview</span>
      <p className="muted">À faire — Classement de tes amis.</p>
    </div>
  );
}
