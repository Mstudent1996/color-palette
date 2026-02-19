import { useParams, Link } from "react-router-dom";
import palettes from "../../assets/data/palettes.json";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const { id } = useParams(); // Henter id fra url'en
  const palette = palettes.find((p) => String(p.id) === String(id)); // Finder paletten med det id

  // Loader billeder fra src/assets
  const imgUrls = palette.images.map(
    (name) => new URL(`../../assets/${name}`, import.meta.url).href
  );

  return (
    <div className={styles.detailPage}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>
          ↶ Return
        </Link>
        <h1>{palette.name}</h1>
      </div>

      {/* Viser tags */}
      <div className={styles.tags}>
        {palette.tags?.map((tag, i) => (
          <span key={i} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Viser farver */}
      <div className={styles.colors}>
        {palette.colors.map((hex, i) => (
          <div
            key={i}
            className={styles.color}
            style={{ backgroundColor: hex }}
          >
            <span className={styles.hex}>{hex}</span>
          </div>
        ))}
      </div>

      {/* Viser billeder */}
      <div className={styles.imageWrapper}>
        {imgUrls.map((url, i) => (
          <img key={i} src={url} alt={`${palette.name} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
