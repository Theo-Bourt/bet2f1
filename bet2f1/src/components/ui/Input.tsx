import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
  /** Élément à droite du champ (ex. bouton pour afficher le mot de passe). */
  trailing?: ReactNode;
}

/** Champ de formulaire avec libellé, icône et message d'erreur. */
export function Input({ label, icon, error, trailing, ...rest }: InputProps) {
  const id = useId();

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={error ? `${styles.control} ${styles.hasError}` : styles.control}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input id={id} className={styles.input} aria-invalid={Boolean(error)} {...rest} />
        {trailing}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
