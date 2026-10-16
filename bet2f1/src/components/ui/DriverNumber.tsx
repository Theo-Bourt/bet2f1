import styles from './DriverNumber.module.css';

interface DriverNumberProps {
  number: number;
  color: string;
  size?: number;
}

/** Pastille ronde numérotée, couleur de l'écurie (marqueurs du circuit, classements). */
export function DriverNumber({ number, color, size = 32 }: DriverNumberProps) {
  return (
    <span
      className={styles.marker}
      style={{ backgroundColor: color, width: size, height: size, fontSize: size * 0.4 }}
    >
      {number}
    </span>
  );
}
