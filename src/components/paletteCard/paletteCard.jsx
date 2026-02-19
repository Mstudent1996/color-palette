import { Link } from "react-router-dom";
import styles from "./paletteCard.module.css";

export default function PaletteCard({ id, name, colors = [] }) {
  return (
    <Link
      className={styles.PaletteCard}
      to={`/palettes/${id}`}
      aria-label={`Åbn ${name}`}
    >
      <div className={styles.palettename}>{name}</div>

      <div className={styles.swatches}>
        {colors.slice(0, 5).map((hex, i) => (
          <div key={i} className={styles.swatch} style={{ background: hex }}>
            <span className={styles.hex}>{hex}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
