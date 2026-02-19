import styles from "./filterPanel.module.css";

export default function FilterPanel({
  selectedTag,
  setSelectedTag,
  selectedColor, 
  setSelectedColor,
  tags = [],
  hues = [], 
}) {
  return (
    <div className={styles.filterPanel}>
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className={styles.dropdown}
      >
        <option value="">All tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        className={styles.dropdown}
      >
        <option value="">All colors</option>
        {hues.map((hue) => (
          <option key={hue} value={hue}>
            {hue}
          </option>
        ))}
      </select>
    </div>
  );
}
