import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Variante mise en avant (bordure cyan, comme l'info-bulle pilote). */
  highlighted?: boolean;
  as?: 'section' | 'article' | 'div';
}

/** Conteneur sombre arrondi utilisé partout dans le design. */
export function Card({ children, highlighted = false, as: Tag = 'section', className, ...rest }: CardProps) {
  const classes = [styles.card, highlighted ? styles.highlighted : '', className ?? ''].filter(Boolean).join(' ');
  return <Tag className={classes} {...rest}>{children}</Tag>;
}
